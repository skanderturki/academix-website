require('../config/env');
const mongoose = require('mongoose');
const crypto = require('crypto');
const User = require('../models/User');
const Chapter = require('../models/Chapter');
const PracticeAttempt = require('../models/PracticeAttempt');
const ExamAttempt = require('../models/ExamAttempt');
const Certificate = require('../models/Certificate');

const SALT = process.env.EXPORT_SALT || 'pilot-analysis-salt';
const pseudo = (id) =>
  id
    ? 'u' + crypto.createHash('sha256').update(SALT + id.toString()).digest('hex').slice(0, 6)
    : null;

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const [users, chapters, practice, exams, certs] = await Promise.all([
    User.find({}, 'role isActive isVerified createdAt lastLogin progress').lean(),
    Chapter.find({}, 'chapterCode title topics').lean(),
    PracticeAttempt.find(
      {},
      'user examTitle score totalQuestions correctCount timeTaken completedAt createdAt'
    ).lean(),
    ExamAttempt.find(
      {},
      'user examTitle score totalQuestions correctCount passed timeTaken startedAt completedAt createdAt certificate'
    ).lean(),
    Certificate.find({}, 'user examTitle score issuedAt isRevoked').lean(),
  ]);

  const out = {
    exportedAt: new Date().toISOString(),
    summary: {
      users: users.length,
      verifiedUsers: users.filter((u) => u.isVerified).length,
      activeUsers: users.filter((u) => u.isActive).length,
      practiceAttempts: practice.length,
      examAttempts: exams.length,
      certificates: certs.length,
      chapters: chapters.length,
    },
    users: users.map((u) => ({
      id: pseudo(u._id),
      role: u.role,
      isVerified: u.isVerified,
      isActive: u.isActive,
      createdAt: u.createdAt,
      lastLogin: u.lastLogin,
      completedTopicCount: u.progress?.completedTopics?.length || 0,
      practiceCount: u.progress?.practiceAttempts?.length || 0,
      examCount: u.progress?.examAttempts?.length || 0,
      certificateCount: u.progress?.certificates?.length || 0,
    })),
    chapters: chapters.map((c) => ({
      chapterCode: c.chapterCode,
      title: c.title,
      topicCount: c.topics?.length || 0,
    })),
    practiceAttempts: practice.map((p) => ({
      user: pseudo(p.user),
      examTitle: p.examTitle,
      score: p.score,
      totalQuestions: p.totalQuestions,
      correctCount: p.correctCount,
      timeTaken: p.timeTaken,
      completedAt: p.completedAt,
      createdAt: p.createdAt,
    })),
    examAttempts: exams.map((e) => ({
      user: pseudo(e.user),
      examTitle: e.examTitle,
      score: e.score,
      totalQuestions: e.totalQuestions,
      correctCount: e.correctCount,
      passed: e.passed,
      timeTaken: e.timeTaken,
      startedAt: e.startedAt,
      completedAt: e.completedAt,
      createdAt: e.createdAt,
      hasCertificate: !!e.certificate,
    })),
    certificates: certs.map((c) => ({
      user: pseudo(c.user),
      examTitle: c.examTitle,
      score: c.score,
      issuedAt: c.issuedAt,
      isRevoked: c.isRevoked,
    })),
  };

  process.stdout.write(JSON.stringify(out, null, 2));
  await mongoose.disconnect();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

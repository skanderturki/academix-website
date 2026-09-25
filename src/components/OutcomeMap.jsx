import React from 'react';
import { motion } from 'framer-motion';

/**
 * OutcomeMap — the CLO → PLO "outcome mapping / audit-trail" motif used in the
 * hero. Visually represents what Academix sells: structured, auditable evidence
 * linking course outcomes to programme outcomes.
 */
export default function OutcomeMap({ accent = '#e9b872' }) {
  const W = 380;
  const H = 168;
  const leftYs = [0.18, 0.42, 0.66, 0.9].map((f) => f * H);
  const rightYs = [0.3, 0.7].map((f) => f * H);
  const lx = 40;
  const rx = W - 56;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="block overflow-visible">
      {leftYs.map((y1, i) =>
        rightYs.map((y2, j) => (
          <motion.line
            key={`l-${i}-${j}`}
            x1={lx}
            y1={y1}
            x2={rx}
            y2={y2}
            stroke="rgba(127,168,217,0.28)"
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 + (i + j) * 0.12 }}
          />
        ))
      )}

      {leftYs.map((y, i) => (
        <g key={`clo-${i}`}>
          <circle cx={lx} cy={y} r={5} fill="#0a1628" stroke={accent} strokeWidth={1.5} />
          <motion.circle
            cx={lx}
            cy={y}
            r={2}
            fill={accent}
            animate={{ opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
          />
          <text x={lx - 10} y={y + 3.5} textAnchor="end" fill="#7f8fab" fontSize={9} className="font-mono">
            {`CLO${i + 1}`}
          </text>
        </g>
      ))}

      {rightYs.map((y, j) => (
        <g key={`plo-${j}`}>
          <circle cx={rx} cy={y} r={6} fill="#0a1628" stroke="#7fa8d9" strokeWidth={1.5} />
          <motion.circle
            cx={rx}
            cy={y}
            r={2.5}
            fill="#7fa8d9"
            animate={{ opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 + j * 0.3 }}
          />
          <text x={rx + 10} y={y + 3.5} textAnchor="start" fill="#9fb0cc" fontSize={9} className="font-mono">
            {`PLO${j + 1}`}
          </text>
        </g>
      ))}
    </svg>
  );
}

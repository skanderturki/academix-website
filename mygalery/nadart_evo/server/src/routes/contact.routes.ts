import { Router } from 'express'
import { z } from 'zod'

// The gallery's contact form: the visitor's message is emailed to the gallery
// owner through Resend, from the verified jahiz.tn domain like every other
// Jahiz site, with the visitor as reply-to. (It used to go through an n8n
// webhook; n8n was retired.)

const router = Router()

const contactSchema = z.object({
  email: z.string().email().max(200),
  msg: z.string().min(1).max(5000),
})

const escapeHtml = (s: string) => s
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

router.post('/', async (req, res, next) => {
  try {
    const data = contactSchema.parse(req.body)

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL || process.env.ADMIN_EMAIL
    if (!apiKey || !to) {
      res.status(503).json({ message: 'The contact form is not available right now.' })
      return
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'NadArt Gallery <gallery@jahiz.tn>',
        to,
        reply_to: data.email,
        subject: `[gallery.jahiz.tn] Message from ${data.email}`,
        text: `From: ${data.email}\n\n${data.msg}`,
        html: `<p><strong>From:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>`
          + `<div style="white-space:pre-wrap;font-family:Arial,sans-serif;">${escapeHtml(data.msg)}</div>`,
      }),
    })

    if (!response.ok) {
      console.error('[contact] Resend answered', response.status, (await response.text()).slice(0, 300))
      throw new Error('Failed to send message')
    }

    res.json({ message: 'Message sent successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: 'Validation error', errors: error.errors })
      return
    }
    next(error)
  }
})

export default router

// src/app/api/contact/route.ts
// API Route (App Router) for handling contact form submissions.
// This file runs on the server by default in Next.js 13+ App Router and must
// NOT include the "use client" directive. It does not access browser-only APIs
// or React hooks; it parses JSON and sends an email via Resend.
//
// What this endpoint does:
// - Accepts POST requests with JSON body: { name, email, phone?, message }.
// - Validates required fields (name, email, message) and returns 400 on error.
// - Sends a notification email using Resend to info@lvbice.com with replyTo set
//   to the sender's email, so recipients can respond directly.
// - Returns a JSON success payload if the email was queued/sent by Resend.
//
// Configuration:
// - Requires RESEND_API_KEY in the environment (e.g., .env.local) for the
//   Resend SDK to authenticate. Without it, the send will fail at runtime.
// - The "from" domain configured in Resend to use an LVBICE address.
//
// Security and operations notes (future improvements):
// - Consider adding server-side email validation and input length limits to
//   mitigate abuse and oversized payloads.
// - Add simple anti-spam measures (honeypot field, rate limiting, CAPTCHA).
// - Log with a structured logger and avoid echoing untrusted data in logs.
// - If exposing this publicly, consider CORS controls if used cross-origin.

import { Resend } from 'resend';

console.log(
  'RESEND_API_KEY:',
  process.env.RESEND_API_KEY ? 'Exists' : 'Missing'
);
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Handle POST /api/contact
 *
 * Request body (JSON):
 * - name: string (required)
 * - email: string (required)
 * - phone: string (optional)
 * - message: string (required)
 *
 * Responses:
 * - 200: { success: true, result: ResendResponse }
 * - 400: { error: 'Missing required fields' }
 * - 500: { error: 'Failed to send email', details?: string }
 */
export async function POST(req: Request) {
  try {
    // Parse incoming JSON; Next.js provides the Request object in the App Router.
    const data = await req.json();

    const { name, email, phone, message } = data;

    // Basic required-field validation. The client also validates but the server
    // must enforce this to ensure integrity when called directly.
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email via Resend. "to" must be an array. We use replyTo so the
    // recipient can reply directly to the sender's address.
    const result = await resend.emails.send({
      from: 'LVBICE <info@updates.lvbice.com>',
      to: ['info@lvbice.com'],
      subject: 'New Contact Form Submission',
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // Return the result from Resend (useful for debugging in development).
    return Response.json({ success: true, result });
  } catch (error: any) {
    // Avoid leaking sensitive internals; include message for observability.
    console.error('Contact API Error:', error);
    return Response.json(
      {
        error: 'Failed to send email',
        details: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}

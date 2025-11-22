// src/app/pages/about/ContactSection.tsx
// "use client" is required because this component:
// - Uses React state (useState) to manage form fields, validation, loading, and status.
// - Attaches event handlers to inputs and the submit button.
// - Calls fetch (browser API) to post the form to /api/contact.
// Server components are not interactive, so without this directive the form
// would not function on the client.
'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import lake from '@/assets/images/ai-generated-3d-water.jpg';

/**
 * Props for ContactSection.
 *
 * id: Optional anchor id for in-page navigation (e.g., #contact).
 * className: Optional Tailwind utility classes to customize layout.
 */
type ContactSectionProps = {
  id?: string;
  className?: string;
};

export default function ContactSection({
  id = '',
  className = '',
}: ContactSectionProps) {
  // Local form state for controlled inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    msg: string;
  } | null>(null);

  // Basic email pattern for instant feedback; server should still validate.
  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  // Submit the form to the API route. Shows a loading state and success/error.
  const handleSubmit = async () => {
    setLoading(true);
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      return setStatus({
        type: 'error',
        msg: 'Please complete all required fields.',
      });
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus({
        type: 'success',
        msg: `Your message has been sent successfully. We’ll reach out to you through the email address you provided: ${form.email}.`,
      });

      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        msg: 'Failed to send message. Please try again.',
      });
    }

    setLoading(false);
  };

  return (
    <Box id={id} className={`${className} flex flex-col items-center`}>
      <div className='flex w-full flex-col bg-blue-500/20 lg:flex-row'>
        {/* Left Image */}
        <div className='flex w-full lg:min-w-1/2'>
          <div
            className='h-72 w-full bg-cover bg-center md:h-96 lg:h-full'
            style={{ backgroundImage: `url(${lake.src})`, opacity: 0.25 }}
          ></div>
        </div>

        {/* Right Content */}
        <div className='flex w-full items-start justify-center px-4 py-10 lg:min-w-1/2 lg:py-20 lg:pr-16 lg:pl-20 xl:pr-32 2xl:pr-56'>
          <div className='flex w-full max-w-xl flex-col items-start justify-center gap-8'>
            {/* Decorative dots */}
            <div className='flex gap-2'>
              {[1, 2, 3].map(i => (
                <span
                  key={i}
                  className='aspect-square h-2 rounded-full bg-yellow-500'
                />
              ))}
            </div>

            {/* Title */}
            <Typography variant='h4'>Contact LVBICE</Typography>

            <Typography variant='body1'>
              For any questions about attending, sponsoring, or speaking at
              LVBICE 2026, we’re here to help. Reach out anytime through the
              form below.
            </Typography>

            {/* Static contact details */}
            <div className='flex flex-col gap-1'>
              <Typography>
                <b>Phone:</b> +254 116 126133 / +254 751 297760
              </Typography>
              <Typography>
                <b>WhatsApp:</b> +254 116 126133
              </Typography>
              <Typography>
                <b>Email:</b> info@lvbice.com
              </Typography>
            </div>

            {/* Status Alerts */}
            {status && (
              <Alert severity={status.type} className='w-full'>
                {status.msg}
              </Alert>
            )}

            {/* Form */}
            <div className='w-full space-y-6'>
              <TextField
                label='Name'
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                className='w-full bg-blue-500/10'
              />

              <div className='flex flex-col gap-6 md:flex-row'>
                <TextField
                  label='Email'
                  value={form.email}
                  onChange={e => {
                    const value = e.target.value;
                    setForm({ ...form, email: value });

                    if (!validateEmail(value)) {
                      setEmailError('Invalid email format');
                    } else {
                      setEmailError('');
                    }
                  }}
                  required
                  error={!!emailError}
                  helperText={emailError}
                  className='w-full bg-blue-500/10'
                />

                <TextField
                  label='Phone (optional)'
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className='w-full bg-blue-500/10'
                />
              </div>

              <TextField
                multiline
                rows={4}
                label='Message'
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                className='w-full bg-blue-500/10'
              />

              <Button
                variant='contained'
                className='w-full py-3'
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

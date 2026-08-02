import { NextResponse } from 'next/server';
import { insertLeadMagnetSubscriber } from '@/lib/supabase';
import { sendLeadMagnetGuideEmail } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, honeypot } = body;

    // 1. Spam protection: Honeypot field check
    // If hidden honeypot field is filled by a bot, silently return success without processing
    if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
      console.warn('Bot detected via honeypot input field');
      return NextResponse.json(
        { success: true, message: 'Check your inbox!' },
        { status: 200 }
      );
    }

    // 2. Server-side Email Validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // 3. Save subscriber to Supabase database
    const dbResult = await insertLeadMagnetSubscriber(trimmedEmail, 'cover-letter-guide');
    if (!dbResult.success) {
      console.warn('Database save warning (proceeding to email send):', dbResult.error);
    }

    // 4. Send Email with PDF attachment via Resend
    const emailResult = await sendLeadMagnetGuideEmail({ email: trimmedEmail });
    if (!emailResult.success) {
      console.error('Failed to send lead magnet email via Resend:', emailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again in a few moments.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Check your inbox! Your free guide is on its way.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API Error in /api/lead-magnet:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { sendPaymentProofNotification } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, proofUrl } = body;

    if (!fullName || !email || !phone || !proofUrl) {
      return NextResponse.json(
        { error: 'Full name, email, phone number, and proof of payment URL are required.' },
        { status: 400 }
      );
    }

    const emailResult = await sendPaymentProofNotification({
      fullName,
      email,
      phone,
      proofUrl
    });

    return NextResponse.json({
      success: true,
      message: 'Payment confirmation submitted successfully! Expect confirmation within 2–4 hours.',
      data: emailResult
    });
  } catch (err) {
    console.error('Enrollment API error:', err);
    return NextResponse.json(
      { error: 'Internal server error processing payment proof submission.' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({ name, email, phone, message });

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    } else {
      return NextResponse.json(
        { error: 'Failed to dispatch email. Please try again or WhatsApp us.' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('Contact API handler error:', err);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}

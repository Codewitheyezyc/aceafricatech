import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || 're_placeholder_key';
export const resend = new Resend(resendApiKey);

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
export const TEAM_NOTIFICATION_EMAIL = process.env.TEAM_NOTIFICATION_EMAIL || 'support@aceafricatech.com';

export interface SendPaymentNotificationParams {
  fullName: string;
  email: string;
  phone: string;
  proofUrl: string;
}

export async function sendPaymentProofNotification(params: SendPaymentNotificationParams) {
  if (!process.env.RESEND_API_KEY) {
    console.log('[Dev mode] Resend API key missing. Mocking payment proof email sending:', params);
    return { success: true, mock: true };
  }

  try {
    const data = await resend.emails.send({
      from: `AceAfrica Enrollment <${FROM_EMAIL}>`,
      to: [TEAM_NOTIFICATION_EMAIL],
      subject: `🚨 New Student Payment Confirmation: ${params.fullName} (₦25,000)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0B0757; padding: 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 20px;">AceAfrica Tech Support Skills Limited</h1>
            <p style="margin: 6px 0 0 0; color: #EF7F1A; font-weight: bold;">New Payment Confirmation Received</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
            <h2 style="font-size: 18px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Student Information</h2>
            <p><strong>Full Name:</strong> ${params.fullName}</p>
            <p><strong>Email Address:</strong> <a href="mailto:${params.email}">${params.email}</a></p>
            <p><strong>Phone / WhatsApp:</strong> ${params.phone}</p>
            <p><strong>Amount Paid:</strong> ₦25,000 (Bank Transfer)</p>
            <div style="margin: 20px 0; padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #EF7F1A;">
              <p style="margin: 0 0 8px 0; font-weight: bold;">Proof of Payment File:</p>
              <a href="${params.proofUrl}" target="_blank" style="display: inline-block; background-color: #0B0757; color: white; padding: 10px 18px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Proof Screenshot ↗</a>
            </div>
          </div>
        </div>
      `
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending Resend payment notification:', error);
    return { success: false, error };
  }
}

export interface SendContactMessageParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(params: SendContactMessageParams) {
  if (!process.env.RESEND_API_KEY) {
    console.log('[Dev mode] Resend API key missing. Mocking contact email sending:', params);
    return { success: true, mock: true };
  }

  try {
    const data = await resend.emails.send({
      from: `AceAfrica Contact Form <${FROM_EMAIL}>`,
      to: [TEAM_NOTIFICATION_EMAIL],
      subject: `📩 New Website Inquiry from ${params.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0B0757;">Website Contact Inquiry</h2>
          <p><strong>Name:</strong> ${params.name}</p>
          <p><strong>Email:</strong> ${params.email}</p>
          <p><strong>Phone:</strong> ${params.phone || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f8fafc; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${params.message}</p>
        </div>
      `
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending Resend contact email:', error);
    return { success: false, error };
  }
}

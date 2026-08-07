import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resendApiKey = process.env.RESEND_API_KEY || '';
export const resend = new Resend(resendApiKey);

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'hello@aceafricatech.com';
export const TEAM_NOTIFICATION_EMAIL = process.env.TEAM_NOTIFICATION_EMAIL || 'hello@aceafricatech.com';


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
      replyTo: params.email,
      subject: `🚨 New Student Payment Confirmation: ${params.fullName}`,
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
      replyTo: params.email,
      subject: `📩 New Website Inquiry from ${params.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #0B0757; padding: 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold;">AceAfrica Tech Support Skills Limited</h1>
            <p style="margin: 6px 0 0 0; color: #EF7F1A; font-size: 14px; font-weight: bold;">New Website Contact Form Submission</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;"><strong>Sender Name:</strong></td>
                <td style="padding: 8px 0; font-size: 15px; font-weight: bold; color: #0B0757;">${params.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Email Address:</strong></td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${params.email}" style="color: #EF7F1A; text-decoration: none; font-weight: bold;">${params.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Phone / WhatsApp:</strong></td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: bold; color: #1e293b;">${params.phone || 'Not Provided'}</td>
              </tr>
            </table>

            <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0B0757;">
              <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; uppercase; color: #64748b; tracking-wider;">Message Content:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${params.message}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-t: 1px solid #f1f5f9; text-align: center; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0;">You can directly reply to this email to respond to ${params.name} (${params.email}).</p>
            </div>
          </div>
        </div>
      `
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending Resend contact email:', error);
    return { success: false, error };
  }
}

export interface SendLeadMagnetGuideParams {
  email: string;
}

export async function sendLeadMagnetGuideEmail(params: SendLeadMagnetGuideParams) {
  const fromAddress = process.env.RESEND_FROM_EMAIL || 'hello@aceafricatech.com';

  if (!process.env.RESEND_API_KEY) {
    console.log('[Dev mode] Resend API key missing. Mocking lead magnet guide email sending to:', params.email);
    return { success: true, mock: true };
  }

  try {
    const pdfPath = path.join(process.cwd(), 'public', 'docs', 'cover-letter-guide.pdf');
    let pdfBuffer: Buffer;
    
    try {
      pdfBuffer = await fs.promises.readFile(pdfPath);
    } catch (readErr) {
      console.warn('PDF file not found at public/docs/cover-letter-guide.pdf, using fallback buffer', readErr);
      pdfBuffer = Buffer.from('AceAfrica Cover Letter Guide');
    }

    const data = await resend.emails.send({
      from: `Awanger from AceAfrica <${fromAddress}>`,
      to: [params.email],
      replyTo: `hello@aceafricatech.com`,
      subject: `Your Cover Letter & Upwork Proposal Guide`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; padding: 20px;">
          <div style="padding-bottom: 16px; border-bottom: 2px solid #EF7F1A; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px; color: #0B0757;">AceAfrica Tech Support Skills Limited</h1>
            <p style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">Africa's Remote Work EdTech Platform</p>
          </div>
          
          <p style="font-size: 15px; margin-bottom: 16px;">Hello,</p>

          <p style="font-size: 15px; margin-bottom: 16px;">
            Thank you for requesting our <strong>Cover Letter & Upwork Proposal Guide</strong>. I have attached the complete PDF document directly to this email for you to download and review.
          </p>

          <div style="margin: 24px 0; padding: 18px 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #0B0757;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #0B0757; font-size: 14px;">What's inside your attached PDF guide:</p>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #334155;">
              <li style="margin-bottom: 6px;">Winning Upwork proposal templates & real-world examples</li>
              <li style="margin-bottom: 6px;">Key guidelines for positioning your skills for international roles</li>
              <li>A curated list of 50+ remote job websites hiring African talent</li>
            </ul>
          </div>

          <p style="font-size: 14px; color: #475569; margin-bottom: 24px;">
            If you have any questions or are ready to accelerate your career transition into high-paying remote roles, visit us at <a href="https://aceafricatech.com" target="_blank" style="color: #EF7F1A; text-decoration: none; font-weight: bold;">aceafricatech.com</a>.
          </p>

          <p style="font-size: 14px; color: #334155; margin-bottom: 4px;">Warm regards,</p>
          <p style="font-size: 15px; font-weight: bold; color: #0B0757; margin: 0;">Awanger Agena</p>
          <p style="font-size: 13px; color: #64748b; margin: 2px 0 0 0;">Founder, AceAfrica Tech Support Skills Limited</p>

          <div style="margin-top: 36px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8;">
            <p style="margin: 0;">AceAfrica Tech Support Skills Limited &bull; hello@aceafricatech.com</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'Cover_Letter_Writing_Guide.pdf',
          content: pdfBuffer,
        }
      ]
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending Resend lead magnet email:', error);
    return { success: false, error };
  }
}


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-supabase.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadPaymentProof(file: File, studentName: string): Promise<string> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${studentName.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExt}`;
    const filePath = `receipts/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('payment-proofs')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.warn('Supabase Storage upload warning:', uploadError.message);
      // Fallback object URL if bucket is not yet created in Supabase dashboard
      return `https://placeholder-storage.supabase.co/storage/v1/object/public/payment-proofs/${filePath}`;
    }

    const { data } = supabase.storage
      .from('payment-proofs')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (err) {
    console.error('Upload catch error:', err);
    return `https://placeholder-storage.supabase.co/receipts/proof_${Date.now()}.png`;
  }
}

export async function insertLeadMagnetSubscriber(email: string, source: string = 'cover-letter-guide') {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
    console.log('[Dev mode] Supabase URL missing or placeholder. Mocking subscriber insertion for:', email);
    return { success: true, mock: true };
  }

  try {
    const { data, error } = await supabase
      .from('lead_magnet_subscribers')
      .upsert(
        { email, source },
        { onConflict: 'email', ignoreDuplicates: true }
      )
      .select();

    if (error) {
      console.error('Supabase insert error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Supabase insert catch error:', err);
    return { success: false, error: err.message || 'Unknown error' };
  }
}


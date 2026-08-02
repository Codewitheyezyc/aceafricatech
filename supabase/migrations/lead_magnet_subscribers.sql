-- Migration: Create lead_magnet_subscribers table
CREATE TABLE IF NOT EXISTS public.lead_magnet_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    source TEXT DEFAULT 'cover-letter-guide' NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.lead_magnet_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy to allow anonymous/public insert access
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'lead_magnet_subscribers' 
        AND policyname = 'Allow public insert to lead_magnet_subscribers'
    ) THEN
        CREATE POLICY "Allow public insert to lead_magnet_subscribers" 
        ON public.lead_magnet_subscribers 
        FOR INSERT 
        WITH CHECK (true);
    END IF;
END $$;

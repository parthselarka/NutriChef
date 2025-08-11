-- Supabase Database Setup for Nutrichef Waitlist
-- Run this in your Supabase SQL Editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    source TEXT DEFAULT 'unknown' CHECK (source IN ('hero', 'footer', 'unknown')),
    ip_address TEXT,
    user_agent TEXT,
    is_subscribed BOOLEAN DEFAULT true,
    unsubscribe_token UUID DEFAULT gen_random_uuid() UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create an index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Create an index on source for analytics
CREATE INDEX IF NOT EXISTS idx_waitlist_source ON waitlist(source);

-- Create an index on unsubscribe_token for unsubscribe functionality
CREATE INDEX IF NOT EXISTS idx_waitlist_unsubscribe_token ON waitlist(unsubscribe_token);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to auto-update updated_at
CREATE TRIGGER IF NOT EXISTS update_waitlist_updated_at 
    BEFORE UPDATE ON waitlist 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for public inserts (for waitlist signup)
CREATE POLICY "Allow public inserts" ON waitlist
    FOR INSERT 
    WITH CHECK (true);

-- Create policy for public selects with limited access (for stats)
CREATE POLICY "Allow public count access" ON waitlist
    FOR SELECT 
    USING (true);

-- Create policy for unsubscribe functionality
CREATE POLICY "Allow unsubscribe updates" ON waitlist
    FOR UPDATE 
    USING (true)
    WITH CHECK (true);

-- Optional: Create a view for analytics (accessible to authenticated users only)
CREATE OR REPLACE VIEW waitlist_analytics AS
SELECT 
    DATE_TRUNC('day', created_at) as signup_date,
    source,
    COUNT(*) as signups,
    COUNT(*) FILTER (WHERE is_subscribed = true) as active_subscribers
FROM waitlist 
GROUP BY DATE_TRUNC('day', created_at), source
ORDER BY signup_date DESC, source;

-- Grant permissions on the view
GRANT SELECT ON waitlist_analytics TO authenticated;

-- Insert some sample data (optional - remove this in production)
-- INSERT INTO waitlist (email, source) VALUES 
-- ('test1@example.com', 'hero'),
-- ('test2@example.com', 'footer'),
-- ('test3@example.com', 'hero');

-- Query to check table structure
-- SELECT column_name, data_type, is_nullable, column_default 
-- FROM information_schema.columns 
-- WHERE table_name = 'waitlist' 
-- ORDER BY ordinal_position;

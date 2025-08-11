# Nutrichef Waitlist Setup Guide

## Overview
This guide will help you set up a Supabase database to collect waitlist signups for your Nutrichef landing page.

## 🗄️ Database Schema

### `waitlist` Table Structure
| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key, auto-generated |
| `email` | TEXT | User's email (unique, not null) |
| `source` | TEXT | Where signup came from ('hero', 'footer', 'unknown') |
| `ip_address` | TEXT | User's IP address (optional) |
| `user_agent` | TEXT | Browser/device info (optional) |
| `is_subscribed` | BOOLEAN | Whether user is still subscribed (default: true) |
| `unsubscribe_token` | UUID | Token for unsubscribe links (auto-generated) |
| `created_at` | TIMESTAMP | When user signed up |
| `updated_at` | TIMESTAMP | Last updated (auto-updated) |

## 🚀 Setup Instructions

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for setup to complete
4. Go to Settings > API to get your keys

### 2. Set Up Database
1. In your Supabase dashboard, go to SQL Editor
2. Copy and paste the contents of `database/setup.sql`
3. Click "Run" to execute the SQL

### 3. Configure Environment Variables
1. Copy your Supabase project URL and anon key
2. Update `.env.local` with your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Test the Setup
1. Run your Next.js app: `npm run dev`
2. Try signing up with different emails
3. Check your Supabase dashboard > Table Editor > waitlist

## 📊 Viewing Your Data

### In Supabase Dashboard
1. Go to Table Editor > waitlist
2. View all signups, sources, and timestamps
3. Use filters to analyze signup sources

### Analytics Queries
Run these in SQL Editor for insights:

```sql
-- Total signups
SELECT COUNT(*) as total_signups FROM waitlist WHERE is_subscribed = true;

-- Signups by source
SELECT source, COUNT(*) as count 
FROM waitlist 
WHERE is_subscribed = true 
GROUP BY source;

-- Daily signups
SELECT DATE(created_at) as date, COUNT(*) as signups 
FROM waitlist 
GROUP BY DATE(created_at) 
ORDER BY date DESC;

-- Recent signups
SELECT email, source, created_at 
FROM waitlist 
ORDER BY created_at DESC 
LIMIT 10;
```

## 🔒 Security Features

### Row Level Security (RLS)
- Enabled on the waitlist table
- Public can insert (signup) and read count
- Full access requires authentication

### Data Protection
- Email addresses are stored in lowercase
- Unique constraint prevents duplicates
- Unsubscribe tokens for GDPR compliance

## 📧 Export Email List

To export emails for your email marketing tool:

```sql
-- Export all active emails
SELECT email, created_at, source 
FROM waitlist 
WHERE is_subscribed = true 
ORDER BY created_at;

-- Export as CSV format
COPY (
  SELECT email, created_at, source 
  FROM waitlist 
  WHERE is_subscribed = true 
  ORDER BY created_at
) TO STDOUT WITH CSV HEADER;
```

## 🔧 Advanced Features

### Unsubscribe Functionality
Users can unsubscribe using their unique token:
- URL format: `https://yoursite.com/unsubscribe?token=uuid`
- Implement an unsubscribe page using the `unsubscribeFromWaitlist` function

### IP Address Tracking
To enable IP tracking, create an API route that captures the user's IP:

```javascript
// pages/api/waitlist.js
export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // Use this IP when calling addToWaitlist
}
```

### Email Validation
The current setup includes basic email validation. For advanced validation, consider:
- Email verification via confirmation emails
- Disposable email detection
- Domain blacklisting

## 📱 Real-time Updates

To show live signup counts, the app includes:
- `WaitlistCounter` component that fetches real count
- API endpoint at `/api/waitlist-stats`
- Fallback to static numbers if database is unavailable

## 🚨 Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check `.env.local` file exists and has correct values
   - Restart your dev server after adding env vars

2. **"Failed to join waitlist"**
   - Check Supabase RLS policies are correctly set
   - Verify your anon key has insert permissions

3. **Duplicate email error**
   - This is expected behavior - same email can't signup twice
   - User sees "This email is already on the waitlist!" message

### Useful Supabase Dashboard Sections
- **Table Editor**: View/edit data directly
- **SQL Editor**: Run custom queries
- **Authentication**: Manage RLS policies  
- **Logs**: Debug API errors
- **Settings > API**: Get connection details

## 📈 Growth Tracking

Monitor these metrics:
- Daily/weekly signup rates
- Conversion rates by source (hero vs footer)
- Geographic distribution (if IP tracking enabled)
- Device/browser analytics (via user_agent)

Your waitlist is now ready to collect emails and grow your user base! 🚀

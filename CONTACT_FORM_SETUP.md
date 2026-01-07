# Contact Form Setup

This contact form uses Resend to send emails. Follow these steps to set it up:

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. The free tier includes 3,000 emails/month, which should be plenty for a contact form

## 2. Get Your API Key

1. After signing up, go to the API Keys section in your Resend dashboard
2. Create a new API key
3. Copy the API key (it starts with `re_`)

## 3. Set Up Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (the one starting with `re_`)
   - **Environment**: Production, Preview, and Development (select all)
4. Save the environment variable

## 4. Verify a Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In Resend dashboard, go to Domains
2. Add your domain (e.g., `yourdomain.com`)
3. Add the DNS records Resend provides to your domain's DNS settings
4. Once verified, update the `from` field in `src/pages/api/contact.ts`:
   ```typescript
   from: 'Contact Form <noreply@yourdomain.com>',
   ```

Until you verify a domain, the form will use Resend's onboarding email (`onboarding@resend.dev`), which works for testing but may have deliverability issues.

## 5. Test the Form

1. Deploy your site to Vercel (or test locally with `npm run dev`)
2. Fill out the contact form
3. Check `miletteriis@live.com` for the email

## Troubleshooting

- **Emails not arriving**: Check your spam folder, and ensure the Resend API key is set correctly
- **API errors**: Check Vercel function logs in the Vercel dashboard
- **Domain verification**: Make sure DNS records are properly configured and propagated (can take up to 48 hours)

## Security Features

- **Honeypot field**: Hidden field that catches bots (if filled, submission is silently rejected)
- **Input validation**: Server-side validation of all fields
- **Input sanitization**: Limits on field lengths to prevent abuse
- **Rate limiting**: Consider adding rate limiting in production (Vercel Pro plan includes this)

# EMMO AI Travel Robot – Landing Page

A Next.js + Tailwind CSS landing page for an AI travel robot product, with a simple backend API
endpoint for handling contact form submissions.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Tech Stack

- Next.js 14 (pages router)
- React 18
- Tailwind CSS 3
- Framer Motion for subtle animations

## Backend API

The contact form sends a POST request to `/api/contact` with:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "company": "Company",
  "message": "How you want to use EMMO"
}
```

Currently the API just logs the payload and returns a success message.
You can extend it to send emails or store to a database.

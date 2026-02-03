# Sanity CMS Setup Guide

This guide walks you through connecting your portfolio to Sanity CMS for easy content editing.

---

## Step 1: Create a Sanity Account & Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up (free)
2. Create a new project:
   - Click "Create new project"
   - Name it (e.g., "My Portfolio")
   - Select "Start with empty project"
   - Choose your dataset name (use `production`)

3. Note your **Project ID** from the dashboard

---

## Step 2: Configure Environment Variables

1. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your Sanity project ID:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

---

## Step 3: Install Sanity Dependencies

Run this in your terminal:

```bash
npm install @sanity/client sanity next-sanity
```

---

## Step 4: Initialize Sanity Studio

Option A - **Embedded Studio** (edit at `/studio` on your site):

```bash
npm install sanity @sanity/vision
```

Then add to your Next.js app - create `app/studio/[[...index]]/page.jsx`:

```jsx
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

Option B - **Separate Studio** (recommended for beginners):

```bash
npm create sanity@latest -- --project YOUR_PROJECT_ID --dataset production
```

This creates a separate Sanity Studio you can deploy to sanity.io.

---

## Step 5: Deploy Schemas to Sanity

If using embedded studio, the schemas are already configured.

If using separate studio, copy the schema files from `sanity/schemas/` to your Sanity Studio project.

---

## Step 6: Add Content in Sanity Studio

1. Open your Sanity Studio (either at `/studio` or your deployed studio URL)
2. Create content for each type:
   - **Profile**: Your name, bio, contact info
   - **Proof Points**: Hero metrics
   - **Services**: Your service offerings
   - **Projects**: Case studies
   - **Resources**: Downloadable files
   - **Skills**: Expert & advanced skills

---

## Step 7: Update Your Page to Fetch from Sanity

Replace the hardcoded data in `app/page.js` with dynamic fetching.

At the top of the file, add:
```javascript
import { getPortfolioContent } from '../lib/sanity'
```

Change the component to fetch data:
```javascript
export default async function Portfolio() {
  const content = await getPortfolioContent()

  // Use content.profile, content.services, etc.
  // Fall back to hardcoded data if Sanity is empty
  const proofPoints = content.proofPoints?.length > 0
    ? content.proofPoints
    : [ /* your fallback data */ ]

  // ... rest of component
}
```

---

## Quick Start Commands

```bash
# Install dependencies
npm install @sanity/client

# Run your site
npm run dev

# Access Sanity Studio (if embedded)
# Open http://localhost:3000/studio
```

---

## Helpful Links

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [Sanity Studio](https://www.sanity.io/studio)
- [GROQ Query Cheat Sheet](https://www.sanity.io/docs/groq-syntax)

---

## Troubleshooting

**"Unauthorized" error:**
- Check your Project ID in `.env.local`
- Make sure CORS is enabled in Sanity project settings for `localhost:3000`

**Content not appearing:**
- Verify you published the content in Sanity Studio (click "Publish")
- Check the browser console for errors
- Test your GROQ query in Sanity Vision plugin

**Studio not loading:**
- Ensure `sanity.config.js` has correct projectId
- Check that all schema files are properly exported

---

## Need Help?

- Sanity Community: [slack.sanity.io](https://slack.sanity.io)
- GitHub Issues: Open an issue on your repo

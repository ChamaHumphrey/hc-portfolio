# Humphrey Chama: Portfolio

Next.js (App Router), React, TypeScript and Tailwind CSS v4. Fully static, no database.

## Run locally
1. Install Node.js LTS from https://nodejs.org (check with `node -v`).
2. In this folder run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000.

Check a production build with `npm run build`, and types with `npm run lint`.

## Add your details
Everything lives in `lib/content.ts`:
- `site.email`, `site.phone`, `site.linkedin`, `site.github`: edit or fill in. Empty values hide those buttons.
- `site.cvUrl`: points to `public/Humphrey-Chama-CV.pdf`. This CV was generated from the details on the site, so replace it with your own final CV (same file name) when ready.
- `site.siteUrl`: your final Vercel address (used for social sharing).
- Projects: add `demo` and/or `code` URLs to a project and the buttons appear. Add new projects by copying an entry.
- Experience, skills, leadership and education are edited in the same file.

## Deploy to Vercel
1. Create a GitHub account and a new empty repository.
2. In this folder: `git init`, `git add .`, `git commit -m "Portfolio"`, then push using the commands GitHub shows.
3. Go to https://vercel.com, sign in with GitHub, click **Add New > Project**, import the repository and press **Deploy**. Defaults are correct.
4. Copy your `.vercel.app` address into `site.siteUrl`, commit and push. Vercel redeploys automatically.

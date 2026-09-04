# Nimish Nirmal — Game Portfolio

Cinematic single-page portfolio + local CMS prototype.

## Stack
Next.js 16 App Router, TypeScript, React 19, Tailwind CSS 4, Motion, Lucide.

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

Admin prototype: `http://localhost:3000/admin`

The admin currently stores project/content changes in browser storage. The intended phase 2 is replacing `lib/client-store.ts` with Supabase database/auth/storage without redesigning the public UI.

## Notes
- Projects remain separate sections.
- Header jumps directly to every major section.
- Project cards have hover motion and image zoom.
- The visual direction is cinematic and inspired by AAA game-site presentation, without copying Rockstar/GTA branding or assets.

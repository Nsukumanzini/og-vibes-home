# OG Vibes public website

This is the public home for the OG Vibes ecosystem. It introduces the student app, explains installation, publishes version updates and links staff to their dashboard.

## Local preview

```powershell
npm.cmd run dev
```

## Android APK download

The site never shows a broken download button. After you upload a signed APK to a public HTTPS location, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_ANDROID_APK_URL` to that URL. The Android download button will then appear automatically.

## Updating release notes

Edit `app/releases.ts` when you publish a new version. Keep the newest release first and describe changes in everyday English.

## Production

Build and deploy this site only when you are ready. The student and staff links currently point to their existing production addresses.

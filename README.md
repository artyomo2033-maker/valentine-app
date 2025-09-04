# Valentine Interactive (Static Site)

A playful, single-file web page that starts with **“Will you be my Valentine?”** and:
- **No** → cycles through dramatic prompts: “Are you sure?” → “Really really sure?” → “You'll break my heart... 💔” → “Last chance! 😢” (then the **No** button tries to escape).
- **Yes** → reveals a sweet message + plays your **video**.

## Quick Start (no coding)

1. **Download** this folder as a ZIP and unzip it.
2. Put your video at: `assets/valentine.mp4` (MP4/H.264 recommended).
3. Double-click `index.html` to open in your browser.
4. Done ✅

## Customize

- Change prompts inside `script.js` (the `messages` array).
- Edit colors/gradients in `style.css`.
- Replace text in `index.html` → look for the elements with IDs `prompt` and the `.reveal` section.

## Deploy Options

### GitHub Pages (free)
1. Create a new repo on GitHub (e.g., `valentine`).
2. Upload the files (`index.html`, `style.css`, `script.js`, `assets/...`).
3. Go to **Settings → Pages** → Choose **Branch: main** and **Folder: / (root)** → Save.
4. Your site will be live at: `https://<your-username>.github.io/<repo-name>/`.

### Vercel (free, easiest)
1. Create an account at Vercel and click **New Project**.
2. Import your GitHub repo and deploy.
3. You’ll get a link like `https://valentine-yourname.vercel.app`.

## Video Tips
- Keep it under 20–30 MB for quick loading.
- Use 720p, H.264/AAC, `mp4` format for best compatibility.
- Name it exactly `assets/valentine.mp4` (or change the `<source>` in `index.html`).

Enjoy! 💘

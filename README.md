# Nexaone Infotech Solutions Website

Static site (HTML/CSS/JS) plus an optional zero-dependency Node.js server for the live AI chatbot.

## Files
`index.html`, `style.css`, `script.js`, `privacy.html`, `assets/nexaone-logo.png` (your original logo, unmodified), `server/server.js`, `.env.example`, `package.json`, `.gitignore`.

## Run locally
- **Static only:** open `index.html`, or run `python3 -m http.server 8000`. The chatbot answers with ready-made replies (no live AI).
- **With server (needs Node 18+):** `npm start`, then open http://localhost:3000.

## Activate real AI
1. Get an API key from the Anthropic Console.
2. Copy `.env.example` to `.env` and set `ANTHROPIC_API_KEY=...` (and optionally `AI_MODEL`).
3. Run `npm start`. The key stays on the server and is never sent to the browser.
4. Deploy `server/` on any Node host (Render, Railway, VPS) and set the same variables there. If the static files live elsewhere, set `API_BASE` in `script.js` and `ALLOWED_ORIGIN` in `.env`.

If the key is missing or the server is unreachable, the chatbot falls back to pre-written answers.

## Contact form
By default it posts to Web3Forms using the access key from your previous site (set in `CONFIG` at the top of `script.js`). The page shows "sent" only when Web3Forms reports `success: true`; otherwise it shows an error. To route through your own server, set `CONTACT_MODE: "server"` and `WEB3FORMS_KEY` in `.env`.

## Things to confirm
- **WhatsApp** uses 9560706880 (first number in your files). Change `CONFIG.WHATSAPP` if another number should be used.
- **Social links:** LinkedIn, X, Instagram and Facebook are plain HTML links in `index.html` (header, contact section, footer). To change a URL, search for it in `index.html` and update all three places. Icons are inlined Font Awesome Free SVGs (no extra library or network request).
- **Privacy policy** is a placeholder and needs legal review.
- Web3Forms access keys are designed to be public, but you can restrict the domain in your Web3Forms dashboard.

## Chatbot troubleshooting
- Terminal me `npm start` ke baad **"Live AI: ON"** dikhna chahiye. "OFF" ka matlab `.env` me `ANTHROPIC_API_KEY` nahi mili.
- Chatbot sirf `http://localhost:3000` (ya deployed Node server) par live hota hai. `index.html` seedha kholne par demo mode hi rahega.
- Chat error par server ke terminal me reason print hota hai: galat key (401), galat model (404 -> `AI_MODEL` badlein), ya credits khatam.
- Logo `assets/nexaone-logo.png` pehle se folder me hai.

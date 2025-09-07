
# Thai Street Kitchen — Static Site

A simple, polished one-page website ready for GitHub Pages.

## Deploy on GitHub Pages (User site or Project site)

1. **Create repo** on GitHub (e.g. `thai-street-kitchen`).
2. Upload all files from this folder to the repo root (index.html, styles.css, script.js, assets/).
3. Go to **Settings → Pages**:
   - **Source**: select **Deploy from a branch**.
   - **Branch**: choose `main` (or `master`) and `/root`.
4. Save. After a minute, your site will be live at:
   - `https://<your-username>.github.io/thai-street-kitchen/` (project site).

### Custom Domain (optional)
- Buy a domain, add a DNS `CNAME` pointing to `<your-username>.github.io`.
- In **Settings → Pages**, add your custom domain.
- Commit a `CNAME` file containing only your domain name to the repo root.

### Swapping the logo
Replace `assets/logo-placeholder.png` with your actual `logo.png` and update the `<img src>` if needed.

### Contact form options
The current form is static. Pick one of these:
- **Formspree**: add their `action` attribute to the `<form>`.
- **Basin** / **Getform** / **Netlify Forms**: follow provider-specific attributes.
- **Email link only**: replace the form with a `mailto:` link.

### Editing the Menu
All menu items/prices are in `index.html` (look for the Menu section). We can move them to a JSON file later if preferred.

---

Built 2025-09-07

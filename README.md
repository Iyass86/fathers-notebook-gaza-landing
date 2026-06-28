# Gaza Land - Book Landing Page

A beautiful, bilingual (Arabic/English) digital book landing page built with React, Vite, and Tailwind CSS.

## Quick Start

### Local Development
```bash
npm install
npm run dev
```
The site will be available at `http://localhost:3000`

### Build for Production
```bash
npm install
npm run build
```
This creates a `dist` folder with the production build.

## Deployment to Replit

1. **Create a new Replit project** from this GitHub repository
2. **Replit will automatically detect** it's a Node.js/React project
3. **Run the build**:
   ```bash
   npm install
   npm run build
   ```
4. **Deploy**: Replit will serve the `dist` folder automatically

## Connecting Custom Domain (book.iyass.com)

1. In Replit, go to **Settings** → **Domains**
2. Add your custom domain `book.iyass.com`
3. Update your domain registrar's DNS records to point to Replit's nameservers
4. Replit will provide SSL certificate automatically

## Project Structure

```
├── client/
│   ├── index.html          # Main HTML entry point
│   ├── public/
│   │   └── images/         # Book preview card images
│   └── src/
│       ├── pages/Home.tsx   # Main landing page
│       ├── App.tsx          # App routing
│       ├── index.css        # Global styles & Tailwind
│       └── main.tsx         # React entry point
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## Features

- ✅ Bilingual (Arabic/English) with proper RTL support
- ✅ Beautiful editorial preview cards (book pages)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Gumroad integration for book sales
- ✅ Smooth animations and transitions
- ✅ Premium literary aesthetic

## Customization

### Update Gumroad URL
Edit `client/src/pages/Home.tsx` and replace:
```typescript
const GUMROAD_URL = 'https://gumroad.com/l/gaza-land'; // ← Replace with your Gumroad product URL
```

### Modify Colors
Edit `client/src/index.css` to change the color scheme. Current palette:
- Primary: `#B45B5B` (burgundy)
- Dark: `#2E2A28` (dark navy)
- Light: `#F5F1E8` (cream)

### Update Content
All text content is in `client/src/pages/Home.tsx`. Edit the JSX directly to update headlines, descriptions, and copy.

## Environment Variables

No environment variables are required for this static site. All configuration is hardcoded in the source.

## Troubleshooting

### Images not loading
- Ensure all images are in `client/public/images/`
- Check image paths use `/images/filename.webp` format

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires Node 18+)

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild: `npm run build`

## Support

For issues or questions, refer to:
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**License**: MIT

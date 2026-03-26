# ZeroTwoCode - Industry-Oriented IT Training Landing Page

A modern, fully responsive, and SEO-optimized landing page built with **Next.js 16**, **Tailwind CSS**, **shadcn/ui**, and **TypeScript**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC)

## 🎯 Features

### 🎨 Design & UX
- ✅ Modern, professional design with orange (#FF6B35) + cream color scheme
- ✅ Fully responsive mobile-first layout
- ✅ Smooth animations and transitions
- ✅ Accessibility-first approach (WCAG 2.1)
- ✅ Beautiful component library (shadcn/ui)

### 📄 Page Sections
- **Header** - Sticky navigation with mobile menu
- **Hero** - Compelling headline with stats and CTAs
- **Learning Paths** - 6 career tracks (AWS, Python, Java, Android, Digital Marketing, Full-Stack)
- **Features** - Why choose ZeroTwoCode + Benefits + Flexible formats
- **Pricing** - 3 pricing tiers with features list
- **Testimonials** - 3 student success stories with ratings
- **FAQ** - Accordion-style Q&A section
- **Contact Form** - Email validation and form handling
- **Final CTA** - Compelling call-to-action with stats
- **Footer** - Links, contact info, social media

### 🔍 SEO & Performance
- ✅ Meta tags (title, description, keywords)
- ✅ JSON-LD structured data (Organization, Course, AggregateRating)
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt configuration
- ✅ Open Graph & Twitter Card tags
- ✅ Mobile viewport optimization
- ✅ Core Web Vitals ready
- ✅ Semantic HTML structure
- ✅ Internal linking strategy
- ✅ Vercel Analytics integrated

### 💻 Development
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Centralized data management
- ✅ Form validation and error handling
- ✅ API route ready for contact form
- ✅ Zero external dependencies (UI components)
- ✅ Environment variables support

## 🚀 Quick Start

### 1. Clone & Install
```bash
https://github.com/zerotwocodeofficial
git clone https://github.com/zerotwocodeofficial
cd zerotwocode-landing
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
zerotwocode-landing/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles & design tokens
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API endpoint
├── components/
│   ├── header.tsx              # Navigation
│   ├── hero-section.tsx        # Hero section
│   ├── learning-paths.tsx      # Career tracks
│   ├── features-section.tsx    # Benefits & features
│   ├── pricing-section.tsx     # Pricing tiers
│   ├── testimonials-section.tsx # Student stories
│   ├── faq-section.tsx         # FAQ accordion
│   ├── contact-form.tsx        # Contact form
│   ├── cta-section.tsx         # Final CTA
│   ├── footer.tsx              # Footer
│   ├── schema.tsx              # JSON-LD structured data
│   └── ui/                     # shadcn/ui components (auto-generated)
├── lib/
│   ├── utils.ts                # Utility functions
│   └── data.ts                 # Hardcoded content data
├── public/
│   ├── sitemap.xml             # XML sitemap
│   └── robots.txt              # Robot directives
├── IMPLEMENTATION.md           # Implementation guide
├── DEPLOYMENT.md               # Deployment instructions
├── DESIGN_TOKENS.md            # Design system reference
├── SEO_CHECKLIST.md            # SEO optimization guide
└── README.md                   # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#FF6B35` (Orange) - CTAs and highlights
- **Background**: `#FAF6F0` (Cream) - Main background
- **Foreground**: `#2D2D2D` (Dark Gray) - Text
- **Secondary**: `#F5E6D3` (Light Beige) - Accents
- **Muted**: `#E8DCC8` (Warm Gray) - Borders

### Typography
- **Font**: Geist (Google Fonts)
- **Headings**: Bold, up to 48px
- **Body**: 16px with 1.6 line-height
- **Contrast**: WCAG AA compliant

See [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) for complete design system documentation.

## 🔧 Customization

### Update Content
Edit `/lib/data.ts`:
```typescript
export const courseData = [
  { icon: "AWS", label: "AWS" },
  // ... add or modify courses
]
```

### Change Colors
Edit CSS variables in `/app/globals.css`:
```css
:root {
  --primary: #FF6B35;        /* Change primary color */
  --background: #FAF6F0;     /* Change background */
  /* ... other variables ... */
}
```

### Modify Sections
Each section is a separate component in `/components/`. Edit individually and they'll update automatically.

### Add Images
Replace image paths with actual files:
1. Add images to `/public/`
2. Update component imports
3. Use Next.js Image component for optimization

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Deploy (automatic)
# Vercel will automatically deploy on push
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Other Platforms
- AWS, Google Cloud, Azure, DigitalOcean
- Docker support ready
- Fully static-generated (if needed)

## 📊 SEO & Analytics

### Pre-Configured
- ✅ Meta tags
- ✅ JSON-LD schemas
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Vercel Analytics

### Setup Required
1. Add Google Analytics 4 tracking ID
2. Add OG images to `/public/`
3. Submit sitemap to Google Search Console
4. Configure custom domain
5. Monitor search console for errors

See [SEO_CHECKLIST.md](./SEO_CHECKLIST.md) for complete SEO guide.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (`md:` prefix)
- **Desktop**: 1024px+ (`lg:` prefix)
- **Large Desktop**: 1280px+ (`xl:` prefix)

All sections are fully responsive and tested on all devices.

## 🔐 Security

- ✅ Form input validation
- ✅ Email validation
- ✅ XSS protection (Next.js)
- ✅ CSRF protection ready
- ✅ Rate limiting ready (implement in API)
- ✅ HTTPS ready (via Vercel)

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast ratios (WCAG AA)
- ✅ Mobile-friendly touch targets
- ✅ Screen reader optimized

## 🧪 Testing

### Local Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
```

### Browser Testing
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari 12+, Chrome Android)

## 📈 Performance Metrics

**Target Metrics**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

**Current Status**: ✅ On Track

## 🎯 Next Steps

1. **Customize Content**
   - Update company information
   - Add real testimonials
   - Adjust pricing
   - Customize course descriptions

2. **Add Media**
   - Upload images to `/public/`
   - Add logo and favicon
   - Create OG images for social sharing

3. **Set Up Backend**
   - Implement contact form email service
   - Connect to CRM or database
   - Set up analytics

4. **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Configure custom domain
   - Submit to search engines

5. **Optimize**
   - Monitor analytics
   - Gather user feedback
   - A/B test sections
   - Improve based on data

## 📚 Documentation

- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Architecture & setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) - Design system
- [SEO_CHECKLIST.md](./SEO_CHECKLIST.md) - SEO optimization

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | Framework |
| React | 19 | UI Library |
| Tailwind CSS | v4 | Styling |
| TypeScript | 5+ | Type Safety |
| shadcn/ui | Latest | Components |
| Vercel | Latest | Hosting |

## 📝 Environment Variables

No environment variables required for basic deployment. Optional:

```env
# Optional: For form submission
NEXT_PUBLIC_API_URL=https://your-api.com

# Optional: For email service
CONTACT_EMAIL=your-email@example.com
```

## 🤝 Contributing

This is a template project. Feel free to:
- Customize content and styling
- Add new sections
- Integrate with backend services
- Extend functionality

## 📄 License

MIT License - feel free to use this for any project!

## 🙋 Support

- Check [IMPLEMENTATION.md](./IMPLEMENTATION.md) for technical details
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review [SEO_CHECKLIST.md](./SEO_CHECKLIST.md) for SEO optimization
- Check [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) for design system

## 🌟 Credits

Built with:
- [Next.js](https://nextjs.org) - The React Framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) - Component Library
- [Vercel](https://vercel.com) - Deployment Platform

---

**Ready to launch your ZeroTwoCode landing page?** Start with the quick start guide above, customize your content, and deploy to Vercel! 🚀

**Last Updated**: March 2026

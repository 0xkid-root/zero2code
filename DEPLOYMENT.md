# ZeroTwoCode Landing Page - Deployment Guide

## 🎯 Quick Start

Your ZeroTwoCode landing page is ready to deploy! Follow these steps to go live.

## 📦 What's Included

✅ **8 Complete Sections**
- Hero with compelling value prop and stats
- Learning paths with 6 career tracks
- Why choose ZeroTwoCode + benefits
- Flexible training formats
- Pricing with 3 tiers
- Student testimonials (3 success stories)
- FAQ section with 4 common questions
- Contact form with validation

✅ **SEO Ready**
- Meta tags with keywords
- JSON-LD structured data (Organization, Course, Rating)
- Sitemap.xml
- Robots.txt
- Open Graph tags for social sharing
- Twitter Card tags
- Mobile viewport configuration

✅ **Performance Optimized**
- Next.js 16 with React 19
- Tailwind CSS for minimal CSS
- Server Components by default
- Responsive design (mobile-first)
- Accessibility features (WCAG 2.1)
- Vercel Analytics integrated

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ZeroTwoCode landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/skillmanthan.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New..." → "Project"
   - Select your repository
   - Framework: Next.js (auto-detected)
   - Click "Deploy"

3. **Domain Setup**
   - Purchase domain at registrar (Namecheap, GoDaddy, etc.)
   - In Vercel, go to Project Settings → Domains
   - Add your domain
   - Update DNS records at registrar

### Option 2: Docker + Any Hosting

1. **Build Docker image**
   ```bash
   docker build -t skillmanthan-landing .
   docker run -p 3000:3000 skillmanthan-landing
   ```

2. **Deploy to**
   - AWS (ECS, Elastic Beanstalk)
   - Google Cloud (Cloud Run)
   - Azure (Container Instances)
   - DigitalOcean (App Platform)

### Option 3: Manual Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Upload dist files**
   - Files in `.next` directory
   - Public assets from `/public`
   - Use FTP/SFTP to upload to server

## 🔧 Post-Deployment Configuration

### 1. Enable HTTPS
```
✅ Automatic on Vercel
❌ Manual on other platforms: Get SSL certificate (Let's Encrypt)
```

### 2. Set Environment Variables (if needed)
In Vercel Project Settings → Environment Variables:
```
NEXT_PUBLIC_API_URL=https://api.skillmanthan.com
CONTACT_EMAIL=support@skillmanthan.com
```

### 3. Configure Analytics
- Google Analytics: Add GA4 tracking ID
- Vercel Analytics: Already integrated
- Monitor dashboard: https://vercel.com/dashboard

### 4. Monitor Performance
```bash
# Local testing
npm run dev

# Production build test
npm run build
npm run start
```

## 📊 SEO Submission Checklist

After deployment:

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster
- [ ] Add domain in Google Search Console
- [ ] Verify domain ownership
- [ ] Request indexing of homepage
- [ ] Monitor crawl errors
- [ ] Check search appearance
- [ ] Set preferred domain (www or non-www)
- [ ] Configure robots.txt
- [ ] Set crawl budget limits if needed

### Google Search Console Setup
1. Visit: https://search.google.com/search-console
2. Add property for your domain
3. Verify domain ownership (DNS record method recommended)
4. Submit sitemap.xml
5. Monitor indexation status

## 🎨 Customization Before Deployment

### Required Updates
1. **Replace Content**
   - Update company info in `/lib/data.ts`
   - Update testimonials with real students
   - Update pricing (currently in INR)
   - Update course descriptions

2. **Add Images**
   - Hero section image: `/public/hero-image.png`
   - OG image: `/public/og-image.png` (1200x630)
   - Twitter image: `/public/twitter-image.png` (1200x675)
   - Favicon: `/public/favicon.ico`

3. **Update Contact Info**
   - Email in footer: `/components/footer.tsx`
   - Phone number: `/components/footer.tsx`
   - Address: `/components/footer.tsx`
   - Social media links: `/components/footer.tsx`

4. **Update Metadata**
   - Company name: `/app/layout.tsx`
   - Domain URL: `/public/sitemap.xml`, schema, metadata
   - Email verification: `/app/layout.tsx`

### Optional Enhancements
- Add animations (Framer Motion)
- Add video background hero
- Implement live chat
- Add blog section
- Create course detail pages
- Add student dashboard

## 🔐 Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set secure headers (CSP, X-Frame-Options)
- [ ] Validate form inputs (backend)
- [ ] Sanitize user submissions
- [ ] Rate limit API endpoints
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Backup critical data

### Add Security Headers
In `next.config.mjs`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
}
```

## 📈 Analytics & Monitoring

### Key Metrics to Track
1. **Traffic Metrics**
   - Organic traffic
   - Direct traffic
   - Referral sources
   - Geographic distribution

2. **Engagement Metrics**
   - Bounce rate
   - Pages per session
   - Average session duration
   - Click-through rate

3. **Conversion Metrics**
   - Form submissions
   - Button clicks
   - Course interest
   - Contact requests

4. **Performance Metrics**
   - Page load time
   - Core Web Vitals (LCP, FID, CLS)
   - Mobile vs Desktop performance
   - Time to first paint

### Set Up Google Analytics 4
```tsx
// Add to app/layout.tsx
import Script from 'next/script'

<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"
/>
<Script id="ga4" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');`}
</Script>
```

## 🆘 Troubleshooting

### Common Issues

**Site not loading**
- Check Vercel deployment status
- Verify domain DNS settings
- Clear browser cache

**Forms not working**
- Check API endpoint in browser console
- Verify backend integration
- Check environment variables

**SEO not improving**
- Wait 4-6 weeks for indexing
- Check Google Search Console for errors
- Verify sitemap submission
- Check robots.txt

**Images not showing**
- Verify image paths
- Check Next.js Image component setup
- Verify image file exists

## 📞 Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## 🎉 Post-Launch

### Week 1
- Monitor site performance
- Check all links work
- Verify form submissions
- Monitor analytics data

### Month 1
- Analyze user behavior
- Collect first feedback
- Monitor SEO rankings
- Optimize based on data

### Ongoing
- Regular content updates
- Customer testimonial additions
- Blog posts for SEO
- Performance monitoring
- Security updates

---

**Ready to launch?** All files are configured and ready. Just:
1. Update content with your information
2. Add images
3. Deploy to Vercel
4. Submit to search engines

Good luck with SkillManthan! 🚀

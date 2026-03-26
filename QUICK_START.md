# ⚡ Quick Start Guide - ZeroTwoCode Landing Page

Get your landing page up and running in 5 minutes!

## Step 1: Preview Your Site (2 minutes)

1. Open the **Preview** panel (blue button in top right)
2. Your landing page will load automatically
3. Test on desktop and mobile
4. ✅ Everything working? Move to Step 2

## Step 2: Customize Your Content (5 minutes)

Edit the most important file:

### `/lib/data.ts` - Update All Content

```typescript
// 1. Update stats
export const stats = [
  { value: "+48%", label: "Student Growth" },
  { value: "100+", label: "Your Stat Here" }
];

// 2. Update pricing (currently in INR)
export const pricing = [
  {
    id: 1,
    name: "₹5000 / month",    // Change your price
    features: ["Feature 1", "Feature 2"]
  },
  // ... add more
];

// 3. Update testimonials with REAL students
export const testimonials = [
  {
    id: 1,
    name: "Student Name",
    text: "Actual student quote here..."
  }
];

// 4. Update FAQ
export const faqs = [
  {
    id: 1,
    question: "Your common question?",
    answer: "Answer here..."
  }
];
```

**Changes made here will instantly appear on your site!**

## Step 3: Update Contact Information

### Footer & Header - `/components/footer.tsx`

Find and update:
```typescript
// Change email
<a href="mailto:your-email@example.com">

// Change phone
<a href="tel:+YOUR_PHONE_NUMBER">

// Change address
<span>Your City, Your Country</span>

// Add social links
<a href="https://www.linkedin.com/company/zerotwocode/">
```

### Logo Text - `/components/header.tsx` & `/components/footer.tsx`

```typescript
// Change "zerotwocode" to your company name
<span className="text-xl font-bold">YourCompanyName</span>
```

## Step 4: Customize Colors (Optional)

### Edit `/app/globals.css` - Change Color Scheme

```css
:root {
  /* Change these to match your brand */
  --primary: #FF6B35;        /* Main orange */
  --background: #FAF6F0;     /* Cream background */
  --foreground: #2D2D2D;     /* Dark text */
  --secondary: #F5E6D3;      /* Light backgrounds */
  --muted: #E8DCC8;          /* Borders */
}
```

**All components automatically update to your colors!**

## Step 5: Deploy to Vercel (2 minutes)

### Option A: If You Have GitHub
1. Push to GitHub: `git push`
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Select your GitHub repo
5. Click "Deploy"
6. ✅ Live! Your site is now live at vercel.app

### Option B: If You Don't Have GitHub
1. Sign up at [vercel.com](https://vercel.com)
2. Click "Deploy"
3. Drag & drop your project folder
4. ✅ Live! Your site goes live instantly

## Next Steps After Deployment

### 1. Set Up Your Domain (Optional)
- Buy domain from Namecheap, GoDaddy, etc.
- Go to Vercel Project Settings → Domains
- Add your domain
- Update DNS at registrar
- ✅ Your site at yourdomain.com

### 2. Add Google Analytics (5 minutes)
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy tracking ID (format: G-XXXXX)
3. Add to `/app/layout.tsx`:
```typescript
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');`}
</Script>
```

### 3. Submit to Google Search (5 minutes)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain
3. Verify domain ownership
4. Submit sitemap: yoursite.com/sitemap.xml
5. ✅ Your site appears in Google search!

### 4. Add Your Logo/Images (10 minutes)
1. Prepare images:
   - Hero image: any size (will be resized)
   - OG image: 1200×630px
   - Favicon: 32×32px
2. Add to `/public/` folder
3. Update image paths in components
4. ✅ Your branding is live!

## File Locations - What to Edit

```
📝 EDIT THESE:
├── /lib/data.ts                  ← All content (courses, pricing, FAQ)
├── /components/footer.tsx        ← Company info, email, phone
├── /components/header.tsx        ← Logo & navigation
├── /app/globals.css              ← Colors
└── /app/layout.tsx              ← Meta tags & analytics

📁 ADD TO /public/:
├── /public/hero-image.png        ← Your main image
├── /public/og-image.png          ← Social share image
└── /public/favicon.ico           ← Browser tab icon

✅ DON'T TOUCH (Auto-generated):
├── /components/ui/               ← UI components
└── /.next/                       ← Build files
```

## Command Reference

```bash
# Start developing
npm run dev

# Check for errors
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

## Common Questions

### Q: How do I add a new course?
**A:** Edit `/lib/data.ts` → `careerPaths` array

### Q: How do I change the email address?
**A:** Edit `/components/footer.tsx` → find "mailto:" link

### Q: How do I update testimonials?
**A:** Edit `/lib/data.ts` → `testimonials` array

### Q: My changes aren't showing?
**A:** 
1. Did you save the file? (Ctrl+S / Cmd+S)
2. Is the preview refreshing? (Try F5)
3. For production, did you deploy? (Push to GitHub)

### Q: Can I change the layout?
**A:** Yes! Each section is a separate component in `/components/`

### Q: How do I add new sections?
**A:** Create new component, import in `/app/page.tsx`

## Customization Examples

### Change Pricing Amounts
```typescript
// /lib/data.ts
export const pricing = [
  {
    name: "$99 / month",    // Change this
    features: ["Access all courses", "Support"]
  }
];
```

### Change Training Times
```typescript
// /lib/data.ts
export const formats = [
  {
    title: "Morning Training",
    timing: "6:00 AM - 8:00 AM"   // Change this
  }
];
```

### Update Course Titles
```typescript
// /lib/data.ts
export const careerPaths = [
  {
    title: "AWS Track",        // Change this
    description: "Your description"
  }
];
```

## Performance Tips

✅ **Your site is already optimized for:**
- Mobile devices
- Search engines (SEO)
- Fast loading
- Accessibility

📈 **To improve further:**
1. Add real images (instead of placeholders)
2. Optimize images with [TinyPNG](https://tinypng.com)
3. Add Google Analytics to track visitors
4. Monitor Core Web Vitals in PageSpeed Insights

## Getting Help

- **For Next.js questions**: https://nextjs.org/docs
- **For Tailwind CSS**: https://tailwindcss.com/docs
- **For shadcn/ui**: https://ui.shadcn.com
- **For Vercel deployment**: https://vercel.com/docs

## You're Ready! 🎉

Your landing page is:
- ✅ Beautiful
- ✅ Responsive
- ✅ SEO-optimized
- ✅ Ready to deploy
- ✅ Easy to customize

**Next step**: Update your content in `/lib/data.ts` and deploy!

**Questions?** Check out:
- [README.md](./README.md) - Full documentation
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Technical details
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) - Pre-launch checklist

---

**Happy launching! 🚀**

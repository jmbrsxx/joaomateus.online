# Quick Customization Guide

## 🚀 Essential Changes Before Launch

### 1. Update Email Address
Replace `hello@joaomateus.online` in:
- `src/components/Header.tsx` (line with CTA button)
- `src/components/Contact.tsx` (line 86)
- `src/components/Footer.tsx` (line that shows email)

### 2. Update Hero Stats
In `src/components/Hero.tsx` (around line 62-75):
```tsx
<div>
  <div className="text-2xl font-bold text-cyan-400">50+</div>  <!-- Change
  <div className="text-sm text-slate-400">Projects Delivered</div>
</div>
```

### 3. Update Testimonials
In `src/components/Testimonials.tsx`, modify the `testimonials` array:
```tsx
{
  name: 'Your Client Name',
  title: 'Their Position, Their Company',
  content: 'Their actual testimonial text here...',
  rating: 5,
}
```

### 4. Update Projects/Case Studies
In `src/components/Projects.tsx`, modify the `projects` array:
```tsx
{
  title: 'Your Project Title',
  problem: 'What was the problem?',
  solution: 'What did you build?',
  result: 'What were the results?',
  image: 'gradient-from-cyan-500/20 to-blue-500/20', // Change gradient
}
```

### 5. Update About Section
In `src/components/About.tsx`:
- Change emoji to your photo/avatar (currently 👨‍💻)
- Update "Based in Portugal 🇵🇹" to your location
- Update years of experience
- Add your personal description

## 🎨 Design Customizations

### Change Primary Color
Replace `cyan` with another color throughout:
- `text-cyan-400` → `text-blue-400`
- `bg-cyan-500` → `bg-blue-500`
- Search and replace in all components

Available colors: `blue`, `green`, `purple`, `pink`, `indigo`, `violet`

### Change Dark Theme
Modify Tailwind classes:
- `bg-slate-950` → darker: perfect as is
- `bg-slate-900` → lighter dark: use `bg-slate-800` for more contrast

### Add Your Logo
In `src/components/Header.tsx` (line 15):
```tsx
// Replace this button with an image
<button onClick={() => scrollToSection('hero')} className="text-lg font-bold text-white hover:text-cyan-400 transition">
  Your Logo Here
</button>

// Or use an image
<img src="/logo.png" alt="Logo" className="h-8" />
```

## 🔗 Connect Contact Form

### Option 1: Formspree (Easiest)
1. Go to https://formspree.io
2. Create a new form
3. Get your form ID
4. In `src/components/Contact.tsx`, update handleSubmit:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formElement = e.target as HTMLFormElement;
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: new FormData(formElement),
    headers: {
      'Accept': 'application/json',
    },
  });

  if (response.ok) {
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
      setSubmitted(false);
    }, 3000);
  }
};
```

### Option 2: Resend (Email Service)
1. Install: `npm install resend`
2. Get API key from https://resend.com
3. Create API route or use server action
4. In `src/components/Contact.tsx`:

```tsx
// Call your backend API
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 📊 Analytics Setup

Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

## 🤖 Social Meta Tags

Add to `index.html` in the `<head>`:
```html
<meta property="og:title" content="João Mateus - Building Websites & AI Systems That Generate Revenue">
<meta property="og:description" content="Custom websites, AI automation, and sales funnels for serious business owners.">
<meta property="og:image" content="https://joaomateus.online/og-image.png">
<meta property="og:url" content="https://joaomateus.online">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="João Mateus - Digital Builder">
<meta name="twitter:description" content="High-performance websites and AI systems built for revenue.">
<meta name="twitter:image" content="https://joaomateus.online/og-image.png">
```

## 📱 Mobile Optimization Checklist

- [ ] Test on iPhone/Android
- [ ] Check form inputs on mobile (proper keyboard types)
- [ ] Verify button sizes are touch-friendly (44px+ min)
- [ ] Check navbar menu opens/closes properly
- [ ] Test smooth scrolling on mobile
- [ ] Verify images load fast on 4G

## 🚀 Deployment Checklist

### Before Pushing Live:
- [ ] Update all contact information
- [ ] Add real content to projects/testimonials
- [ ] Connect form to backend service
- [ ] Add analytics tracking
- [ ] Set up sitemap.xml
- [ ] Add robots.txt
- [ ] Test full site on mobile
- [ ] Run performance audit (Lighthouse)

### Deploy to Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Deploy to Netlify:
1. Push to GitHub
2. Connect at https://netlify.com
3. Build: `npm run build`
4. Publish: `dist`

## 🎯 Optimization Tips

### Performance
- Run `npm run build` and check bundle size
- Use `npm install -D vite-plugin-compression` for gzip
- Optimize images: https://tinypng.com

### SEO
- Add descriptive meta descriptions
- Create sitemap: `npm install -D vite-plugin-sitemap`
- Submit to Google Search Console
- Set up Page Speed Insights monitoring

### Accessibility
- Test with keyboard navigation (Tab key)
- Check color contrast ratios
- Add ARIA labels where needed
- Test with screen readers

## 🐛 Common Issues & Solutions

**Form not submitting:**
- Check browser console for errors
- Verify email backend is configured
- Test CORS settings if using external API

**Styling looks wrong:**
- Clear cache: `npm install && npm run dev`
- Check Tailwind content config in `tailwind.config.js`
- Verify CSS file is imported in `index.css`

**Navigation smooth scroll not working:**
- Check `scroll-behavior: smooth` in CSS
- Verify section IDs match button names
- Test in different browsers

**Images not loading:**
- Put images in `public/` folder
- Reference as `/image-name.png`
- Optimize image size before uploading

## 📚 Useful Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **Vite**: https://vite.dev
- **Lucide Icons**: https://lucide.dev
- **Web.dev Performance**: https://web.dev/performance/

## ✉️ Next Steps

1. Customize all content with your actual information
2. Test the site thoroughly on all devices
3. Connect the contact form to a backend
4. Set up domain (already at joaomateus.online)
5. Add SSL certificate
6. Deploy to production
7. Set up analytics and monitoring
8. Promote on social media and start getting inquiries!

---

**Your site is ready. Make it yours. 🚀**

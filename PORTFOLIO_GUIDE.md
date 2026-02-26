# João Mateus - Premium Portfolio Website

A high-performance, dark, modern portfolio website for João Mateus - Digital Builder & Growth Engineer.

## 🎨 Design Philosophy

**Premium, Minimal, Tech-Focused.** Not flashy, just powerful and confident. Built for serious digital builders and entrepreneurs.

- **Dark Theme**: Sophisticated slate and black backgrounds
- **Cyan/Blue Accents**: Modern, tech-forward aesthetic using cyan-400 and blue-500 gradients
- **Minimal Design**: Clean typography, generous whitespace, purposeful animations
- **Performance First**: Optimized React with Tailwind CSS
- **Mobile Responsive**: Beautiful on all devices from mobile to desktop

## 📋 Sections

### 1. **Header** (`src/components/Header.tsx`)
- Sticky navigation bar with smooth scrolling
- Logo/brand name
- Navigation links to all sections
- CTA button ("Get Started")
- Mobile hamburger menu

### 2. **Hero Section** (`src/components/Hero.tsx`)
- Bold headline: "I Build Websites & AI Systems That Make Businesses Money"
- Subheadline explaining what you do
- Dual CTA buttons (Schedule Call + View Work)
- Social proof stats (50+ Projects, $5M+ Revenue, 98% Satisfaction)
- Animated gradient background elements
- Responsive layout with visual element

### 3. **Services** (`src/components/Services.tsx`)
Five core services with icons:
- Custom Website Development
- AI Automation & AI Receptionists
- Sales Funnels & Landing Pages
- Business Process Automation
- Performance & Conversion Optimization

Each service card is interactive with hover effects.

### 4. **Selected Work/Projects** (`src/components/Projects.tsx`)
Four detailed case studies including:
- E-Commerce Platform Redesign (+340% conversions)
- AI Receptionist for SaaS (85% automation)
- High-Converting Sales Funnel ($1.2M pipeline)
- Agency Website with Lead System (250+ leads)

Each project shows: Problem → Solution → Results format.

### 5. **How I Work** (`src/components/HowIWork.tsx`)
Three-step proven process:
1. Understand Your Business
2. Design & Build the Solution
3. Launch, Optimize & Scale

Includes timeline expectations (weeks 1-2 discovery, weeks 3-8 build, weeks 9+ launch).

### 6. **Testimonials** (`src/components/Testimonials.tsx`)
Six powerful client testimonials:
- Real quotes focused on results ($5M+ revenue)
- Client names and titles
- Star ratings
- Results-driven language (not generic praise)

### 7. **About** (`src/components/About.tsx`)
Personal introduction to João Mateus:
- Professional, confident tone
- 7+ years experience
- 50+ successful projects
- Focus on results, not technical jargon
- Highlights: selective, results-driven, serious founder focus

### 8. **FAQ** (`src/components/FAQ.tsx`)
Eight common questions:
- Who do you work with?
- How much do projects cost?
- Do you offer ongoing support?
- How long does a project take?
- Integration with existing systems?
- What if I'm unsure what I need?
- Ongoing optimization?
- Current availability?

Expandable accordion UI.

### 9. **Contact** (`src/components/Contact.tsx`)
Professional contact section with:
- Email, Phone, LinkedIn quick access
- Comprehensive contact form
- Fields: Name, Email, Company, Project Type, Message
- Form validation
- Success state confirmation
- Mobile responsive

### 10. **Footer** (`src/components/Footer.tsx`)
- Brand statement
- Service links
- Company navigation
- Contact info
- Social links (LinkedIn, Twitter)
- Back to top button

## 🛠 Tech Stack

- **React 19** - Latest React with React Hooks
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe code
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm lint
```

The dev server will start at `http://localhost:5174` (or next available port).

## 📱 Key Features

- **Smooth Scrolling**: Elegant scroll-to-section navigation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Interactive Components**: Hover effects, transitions, and micro-animations
- **Dark Mode**: Premium dark theme throughout
- **Form Handling**: Contact form with validation and success states
- **Performance Optimized**: Fast load times, optimized images, clean code
- **SEO Ready**: Semantic HTML, proper heading hierarchy

## 🎯 Customization

### Update Personal Information

**In `src/components/About.tsx`:**
- Change location (currently "Based in Portugal 🇵🇹")
- Update years of experience
- Modify service focus areas

**In `src/components/Hero.tsx` & `src/components/Testimonials.tsx`:**
- Update stats to match your actual metrics
- Change testimonials with real client feedback

### Update Contact Information

**In `src/components/Header.tsx`, `src/components/Contact.tsx`, and `src/components/Footer.tsx`:**
- Replace `hello@joaomateus.online` with your email
- Add your actual phone number
- Update social media links

### Modify Services

Edit the `services` array in `src/components/Services.tsx` to match your offerings.

### Update Projects

Edit the `projects` array in `src/components/Projects.tsx` with your real case studies.

### Change Colors

Update Tailwind color classes in components:
- **Primary Color**: Change `cyan` to `blue`, `green`, `purple`, etc.
- **Dark Mode**: Colors are Tailwind's slate palette

## 🔗 Backend Integration

### Contact Form

The contact form currently logs data to browser console. To make it functional:

**Option 1: Formspree.io**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
  // Handle response
};
```

**Option 2: Resend (Email Service)**
- Install: `npm install resend`
- Use Resend API to send emails directly

**Option 3: Custom Backend**
- Create API endpoint to handle form submissions
- Send emails via your backend service

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
```bash
npm run build
# Upload `dist` folder to your host
```

## 🎨 Design System

### Color Palette
- **Background**: `bg-slate-950` (dark navy)
- **Surfaces**: `bg-slate-900`, `bg-slate-800`
- **Text**: `text-white`, `text-slate-400`
- **Accent**: `bg-cyan-500`, `text-cyan-400`
- **Accents**: Cyan (primary), Blue (secondary), Purple (highlights)

### Typography
- **Headings**: Bold, large sizes (4xl, 5xl, 6xl)
- **Body**: Regular weight, slate-400 for secondary text
- **Accents**: Cyan color on key points

### Spacing
- Uses Tailwind's default 4px grid
- Generous whitespace (24px sections, 16px padding)
- Responsive gaps that adapt to screen size

### Animations
- Smooth transitions on interactive elements
- Gradient backgrounds with blur effects
- Hover scale transforms (+105%)
- Fade-in animations on load

## 🔍 SEO Optimization

### What's Included
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Descriptive alt text ready
- Mobile responsive (mobile-first)
- Fast load times (Core Web Vitals optimized)

### What to Add
1. **Meta Tags** - Add in `index.html`:
   - `<meta name="description" content="...">`
   - `<meta name="keywords" content="...">`
   - `<meta property="og:title" content="...">`

2. **Sitemap** - Generate and add to `public/sitemap.xml`

3. **Robots.txt** - Add to `public/robots.txt`

4. **Analytics** - Integrate Google Analytics or similar

## 📝 Content Guidelines

### Headlines
- **Bold and direct**: "I Build Websites & AI Systems That Make Businesses Money"
- **Benefit-focused**: Focus on client outcomes, not features
- **Confident tone**: Serious operator, not salesy

### Subheadings
- **One or two sharp sentences**: Explain value proposition clearly
- **Action-oriented**: What will happen when they work with you

### Body Copy
- **Short paragraphs**: Max 2-3 sentences
- **Active voice**: "I build..." not "websites are built..."
- **Results language**: "340% increase in conversions" not "improved conversions"

### CTAs
- **Action words**: "Schedule Call", "Get Started", "View Work"
- **Urgency**: Implied urgency from professional positioning
- **Clear value**: Know what happens when they click

## 🐛 Troubleshooting

### Port Already in Use
If port 5174 is occupied:
```bash
npm run dev -- --port 3000
```

### TypeScript Errors
- Ensure `tsconfig.json` is properly configured
- Run `npm install` to update dependencies
- Clear node_modules: `rm -r node_modules && npm install`

### Styling Not Applying
- Check `tailwind.config.js` content paths
- Ensure `@tailwind` directives in `index.css`
- Restart dev server

### Build Issues
```bash
npm run build
# Check for errors in output
```

## 📚 File Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Services.tsx        # Services offerings
│   ├── Projects.tsx        # Case studies
│   ├── HowIWork.tsx        # Process/methodology
│   ├── Testimonials.tsx    # Client feedback
│   ├── About.tsx           # Personal/professional bio
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer navigation
│   └── AnimateOnScroll.tsx # Optional: fade-in animations
├── hooks/
│   └── useInView.ts        # Optional: intersection observer hook
├── App.tsx                 # Main app component
├── App.css                 # App styles & animations
├── index.css               # Global styles
└── main.tsx                # React entry point
```

## 🤝 Support & Next Steps

### Before Going Live
1. ✅ Update all placeholder content
2. ✅ Add real project images/descriptions
3. ✅ Connect contact form to backend
4. ✅ Add analytics tracking
5. ✅ Test on all devices
6. ✅ Get SSL certificate (auto with Vercel/Netlify)

### Performance Tips
- Compress project images (use WebP)
- Lazy load images below the fold
- Minify and optimize bundle

### Marketing
- Set up Google Search Console
- Add Open Graph tags for social sharing
- Create XML sitemap
- Submit to Google/Bing search

---

**Domain**: joaomateus.online  
**Built with**: React, Vite, Tailwind CSS  
**Last Updated**: February 2026

This is your foundation. Customize it, make it yours, and watch your business grow. 🚀

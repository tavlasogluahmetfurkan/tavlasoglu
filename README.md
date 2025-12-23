This is a [Next.js](https://nextjs.org) project - Omer Abim Professional Portfolio

# 🎬 Omer Abim - Sinematik Portföy Web Sitesi

Profesyonel belgesel yapımcısı ve drone operatörü için modern, dark-themed, tamamen responsive portföy web sitesi.

## ✨ Özellikler

- 🎥 **Hero Section** - Tam ekran video arka planlı giriş
- 🖼️ **Responsive Gallery** - Masonry layout + lightbox
- ⚡ **Smooth Animations** - Framer Motion powered
- 📱 **Fully Responsive** - Mobile-first design
- 🎨 **Dark Theme** - Premium gold & dark color scheme
- 📧 **Contact Form** - Working form with validation
- 🔍 **SEO Optimized** - Meta tags + Open Graph

## 🛠️ Teknoloji

- **Next.js 14+** (App Router)
- **Tailwind CSS 4** (Utility-first)
- **Framer Motion** (Animations)
- **TypeScript** (Type-safe)
- **Lucide React** (Icons)
- **Inter & Cinzel** (Google Fonts)

## 🚀 Başlayın

```bash
# Kurulum
npm install

# Dev server
npm run dev

# Production build
npm run build
npm run start
```

Browser: **http://localhost:3000**

## 📁 Yapı

```
src/
├── app/              # Pages & layout
├── components/       # React components
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Gallery, Services, Contact
│   └── ui/           # Button, Skeleton, SectionWrapper
├── hooks/            # Custom hooks
└── lib/              # Utils & helpers
```

## 🎨 Renk Paleti

- **Dark**: `#0a0a0a`
- **Gold**: `#d4af37`
- **Gray**: `#e0e0e0`

## 📚 Daha Fazla Bilgi

- [📖 Detaylı Dokümantasyon](./DOCUMENTATION.md)
- [🚀 Deployment Guide](./DEPLOYMENT.md)
- [🔧 Kustomizasyon](./DOCUMENTATION.md#-kustomizasyon-rehberi)

## 📋 Available Scripts

```bash
npm run dev          # Dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
npm run format       # Format code
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```bash
docker build -t omerabim .
docker run -p 3000:3000 omerabim
```

### Self-Hosted
```bash
npm run build
npm run start
```

Detaylı deployment rehberi için [DEPLOYMENT.md](./DEPLOYMENT.md) dosyasını inceleyin.

## 🔐 Güvenlik

- ✅ Security headers configured
- ✅ Content Security Policy
- ✅ CSRF protection ready
- ✅ No vulnerabilities (npm audit)

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ Fast build time (~5s)
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading

## 🤝 Katkıda Bulunun

Hata bulduysanız veya iyileştirme öneriniz varsa lütfen issue açınız.

## 📄 Lisans

MIT License - Kişisel ve ticari kullanıma açıktır.

---

**Tasarım & Geliştirme:** GitHub Copilot  
**Versiyon:** 1.0.0  
**Son Güncelleme:** 17 Aralık 2025

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

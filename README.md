# Skisnowly — Drone & Belgesel Portföy Sitesi

Ömer Faruk Tavlaşoğlu'nun drone ve belgesel çekim portföyü. Canlı: https://www.snowly.com.tr

**Teknolojiler:** Next.js 16 (App Router, Turbopack, React Compiler) · React 19 · Tailwind CSS v4 · Motion · Lenis

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npm run type-check
```

## Yapı

```
src/
  app/                 layout (font, SEO, JSON-LD), sayfa, 404, sitemap, robots
  content/site.ts      TÜM metinler, iletişim bilgileri, portföy listesi
  components/
    layout/            Navbar, Footer, SmoothScroll (Lenis)
    sections/          Hero, Marquee, Work (portföy + oynatıcı), About, Services, Contact
    ui/                BackgroundVideo, Reveal, BrandIcons
  lib/                 hook'lar ve yardımcılar
public/media/          web için optimize edilmiş videolar ve posterler
```

Metin, telefon, e-posta, sosyal medya veya video başlıklarını değiştirmek için sadece
`src/content/site.ts` dosyasını düzenlemeniz yeterli.

## Videolar

> ⚠️ **Videoları Git LFS ile eklemeyin.** Vercel LFS dosyalarını varsayılan olarak çekmez ve
> sitede video yerine 134 byte'lık bir metin dosyası sunulur — eski sürümde videoların açılmamasının
> sebebi buydu. `.gitattributes` bu yüzden LFS kullanmıyor.

Kameradan çıkan 4K dosyalar (yüzlerce MB) web için çok büyük. Yeni bir portföy videosu eklerken
[ffmpeg](https://ffmpeg.org) ile üç dosya üretin (örnek: dikey bir video, `work-07`):

```bash
# 1) Tam sürüm (oynatıcıda açılır) — yatay video için scale=1920:-2 kullanın
ffmpeg -i kaynak.mp4 -vf "scale=-2:1920:flags=lanczos" -c:v libx264 -preset slow -crf 24 \
  -maxrate 5M -bufsize 10M -pix_fmt yuv420p -r 30 -an -movflags +faststart public/media/work-07.mp4

# 2) Kart önizlemesi (6 sn, sessiz döngü) — yatay için scale=960:-2
ffmpeg -ss 2 -t 6 -i kaynak.mp4 -vf "scale=-2:960:flags=lanczos" -c:v libx264 -preset slow -crf 28 \
  -maxrate 1500k -bufsize 3M -pix_fmt yuv420p -r 30 -an -movflags +faststart public/media/work-07-preview.mp4

# 3) Poster görseli
ffmpeg -ss 1.5 -i kaynak.mp4 -frames:v 1 -vf "scale=-2:1280" -q:v 3 public/media/work-07.jpg
```

Sonra `src/content/site.ts` içindeki `works` listesine ekleyin:

```ts
work(7, 'Başlık', 'Kısa açıklama', 'portrait'),
```

Dosya başına ~30 MB'ı geçmemeye çalışın (GitHub 50 MB'ta uyarır, 100 MB'ta reddeder).

## Yayınlama

`main` dalına her push'ta Vercel otomatik olarak yayınlar.

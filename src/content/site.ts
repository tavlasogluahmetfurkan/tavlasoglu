/**
 * Sitenin tüm metin içeriği, bağlantıları ve medya listesi burada.
 * Metin değiştirmek veya yeni video eklemek için sadece bu dosyayı düzenlemek yeterli.
 */

export const site = {
  brand: 'Skisnowly',
  person: 'Ömer Faruk Tavlaşoğlu',
  role: 'Drone & Belgesel Çekim',
  location: 'Erzurum, Türkiye',
  url: 'https://tavlasoglu.vercel.app',
  title: 'Skisnowly',
  description:
    'Erzurum merkezli drone ve belgesel çekimleri. Havadan sinematik görüntüler, belgesel tarzı anlatım, kurgu ve renk düzenleme.',
  keywords: ['drone çekimi', 'belgesel', 'erzurum', 'havadan çekim', 'video kurgu', 'sinematik video', 'skisnowly'],
  email: 'omerfb399@hotmail.com',
  phone: { display: '+90 553 751 01 25', href: 'tel:+905537510125' },
  whatsapp: 'https://wa.me/905537510125',
  instagram: 'https://www.instagram.com/skisnowly/',
  linkedin: 'https://www.linkedin.com/in/%C3%B6mer-faruk-tavla%C5%9Fo%C4%9Flu-b83731325/',
} as const;

export const navItems = [
  { label: 'Portföy', href: '#portfoy', id: 'portfoy' },
  { label: 'Hakkımda', href: '#hakkimda', id: 'hakkimda' },
  { label: 'Hizmetler', href: '#hizmetler', id: 'hizmetler' },
  { label: 'İletişim', href: '#iletisim', id: 'iletisim' },
] as const;

export const stats = [
  { value: '100+', label: 'Proje' },
  { value: '10+', label: 'Yıl deneyim' },
  { value: '5+', label: 'Ödül & takdir' },
] as const;

export const marqueeWords = [
  'Drone çekimi',
  'Belgesel',
  'Kurgu',
  'Renk düzenleme',
  'Erzurum',
  '4K Ultra HD',
  'Havadan anlatı',
] as const;

export type Work = {
  id: string;
  title: string;
  caption: string;
  tag: string;
  orientation: 'portrait' | 'landscape';
  /** Tam kalite video (lightbox) */
  src: string;
  /** Kart üzerinde oynayan kısa, sessiz döngü */
  preview: string;
  poster: string;
};

const work = (
  n: number,
  title: string,
  caption: string,
  orientation: Work['orientation'],
): Work => {
  const id = `work-${String(n).padStart(2, '0')}`;
  return {
    id,
    title,
    caption,
    orientation,
    tag: orientation === 'portrait' ? 'Drone · Dikey 4K' : 'Drone · 4K',
    src: `/media/${id}.mp4`,
    preview: `/media/${id}-preview.mp4`,
    poster: `/media/${id}.jpg`,
  };
};

/** Sıralama, masaüstündeki mozaik düzeni belirler: geniş, dikey, dikey / dikey, dikey, geniş */
export const works: Work[] = [
  work(1, 'Kulelerin Ardında Güneş', 'Kış ışığında kayakla atlama kuleleri', 'landscape'),
  work(2, 'Ormanın Üstünde', 'Karla örtülü çam ormanı boyunca yükseliş', 'portrait'),
  work(3, 'Gün Batımı Sırtları', 'Bulutların altında altın saat', 'portrait'),
  work(4, 'Beyaz Sessizlik', 'Kuleye doğru uzun bir süzülüş', 'portrait'),
  work(5, 'Şehre Doğan Işık', 'Güneşin şehrin üzerine düştüğü an', 'portrait'),
  work(6, 'Zirve Tesisleri', 'Karlı tepelerde sabah turu', 'landscape'),
];

export const services = [
  {
    title: 'Havadan Görüntüleme',
    description: 'Drone teknolojisiyle farklı bir perspektiften, etkileyici ve sinematik çekimler.',
    features: ['DJI Mavic 4 Pro', 'Gerçek zamanlı izleme', 'Stabil ve akıcı planlar'],
  },
  {
    title: 'Belgesel Çekimi',
    description: 'Fikirden çekime, kurgudan teslime kadar yüksek kaliteli belgesel prodüksiyon.',
    features: ['4K Ultra HD çekim', 'Sinematik renk düzenleme', 'Profesyonel ekip'],
  },
  {
    title: 'Kurgu & Post-Prodüksiyon',
    description: 'Profesyonel kurgu, ses tasarımı ve renk düzenleme ile hikâyeyi tamamlıyorum.',
    features: ['Adobe Creative Suite', 'VFX & motion graphics', 'Ses tasarımı'],
  },
] as const;

export const process = [
  { title: 'Keşif & planlama', text: 'Hikâyeyi, lokasyonu ve çekim planını birlikte netleştiriyoruz.' },
  { title: 'Çekim', text: 'Drone ve yer kameralarıyla, ışığın en doğru olduğu anda.' },
  { title: 'Kurgu & renk', text: 'Ritim, ses ve renkle görüntüleri bir hikâyeye dönüştürüyorum.' },
  { title: 'Teslim', text: 'Sosyal medya, web veya büyük ekran için hazır formatlarda.' },
] as const;

export const equipment = [
  { name: 'DJI Mavic 4 Pro', category: 'Drone' },
  { name: 'DJI Osmo Pocket 3', category: 'Gimbal kamera' },
  { name: 'Canon EOS 650D', category: 'Fotoğraf & video' },
  { name: 'Gimbal stabilizer', category: 'Stabilizasyon' },
] as const;

# PULSE Athletic Club — Premium Fitness Web Sitesi (Demo)

Spor salonu / fitness işletmelerine sunulmak üzere hazırlanmış, **tamamen kurgusal** bir
premium fitness kulübü web sitesi. Satış demolarında "sizin işletmeniz için böyle bir dijital
sistem kurabiliriz" örneği olarak kullanılmak üzere tasarlandı.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19 + TypeScript
- **Tailwind CSS v4** — tema token'ları `app/globals.css` içinde
- **lucide-react** — ikonlar
- **framer-motion** — yalnızca anlamlı etkileşimler (scroll reveal, mobil menü, accordion, sekme geçişi)
- **clsx + tailwind-merge** — sınıf birleştirme yardımcıları

## Çalıştırma

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (27 rota, tamamı statik)
```

## Yapı

```
app/            15 sayfa rotası + dinamik program/eğitmen detayları + sitemap.ts + robots.ts
components/
  ui/           Button, Container, Section, SectionHeader, Accordion, FormField,
                Stat (count-up), Reveal, ImagePlaceholder
  layout/       Navbar, MobileNav, Footer, StickyMobileCTA
  sections/     Hero, Stats, ClubIntro, Programs, WhyPulse, Facility, Coaches,
                ClassPreview, Memberships, Testimonials, FinalCTA, Location,
                FaqSection, ScheduleBoard, GalleryGrid
  cards/        ProgramCard, CoachCard, MembershipCard, TestimonialCard, ScheduleItem
  forms/        TrialForm, ContactForm (simüle; backend entegrasyonuna hazır)
data/           site, programs, coaches, memberships, schedule, testimonials, faqs
lib/            utils (cn)
docs/           brand, design-system, sitemap, content, image-manifest, reference-analysis
```

## İçerik modeli

Tüm işletme içeriği `data/` altında tek kaynaktan beslenir. Program ve eğitmen detay
sayfaları `generateStaticParams` ile bu veriden statik üretilir — yeni bir program/eğitmen
eklemek yalnızca ilgili `data/` dosyasına kayıt eklemektir.

## Form entegrasyonu

`components/forms/TrialForm.tsx` ve `ContactForm.tsx` içindeki `submitTrial` / `submitContact`
fonksiyonları şu an gönderimi simüle eder. Gerçek projede `/api/...` route handler'a POST
etmek yeterlidir; UI, başarı/hata durumları hazırdır.

## Yerel SEO genişleme noktası

`docs/sitemap.md` içinde tanımlı desenle `/kadikoy-spor-salonu`, `/kadikoy-personal-training`
gibi yerel landing sayfaları aynı bileşen sistemiyle eklenebilir (öneri:
`app/(local)/[location]-[service]/page.tsx` + `data/local-pages.ts`).

## Görseller

Görseller henüz üretilmedi; tüm görsel alanları `ImagePlaceholder` bileşeniyle temsil ediliyor
(oran/yön/etiket korunur). Üretim spec'leri için `docs/image-manifest.md`.

## Önemli not

Bu sitedeki tüm işletme bilgileri, fiyatlar, eğitmenler ve üye görüşleri **kurgusaldır**.
Footer'da demo bildirimi yer alır; gerçek müşteriye uyarlanırken içerik `data/` dosyalarından
güncellenir.


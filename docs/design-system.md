# PULSE — Tasarım Sistemi

Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lucide · Framer Motion (ölçülü)

## 1. Renk token'ları (Tailwind theme)

```css
--color-carbon:    #0A0A0A   /* bg */
--color-graphite:  #151515   /* alt bg */
--color-charcoal:  #1D1D1D   /* yükseltilmiş yüzey */
--color-ink:       #F4F4F1   /* birincil metin */
--color-steel:     #A1A1A1   /* ikincil metin */
--color-line:      #292929   /* bordür */
--color-lime:      #D7FF3F   /* aksan */
--color-lime-dark: #C6ED32   /* aksan hover */
```

Font token'ları: `--font-display` (Bebas Neue), `--font-sans` (Inter).

## 2. Tipografi skalası

| Sınıf | Kullanım | Boyut (mobil → desktop) | Font |
|---|---|---|---|
| `display-hero` | Hero H1 | `clamp(3.5rem, 12vw, 9.5rem)` | Bebas, leading 0.9 |
| `display-1` | Büyük section H2 | `clamp(2.6rem, 6vw, 5rem)` | Bebas, leading 0.95 |
| `display-2` | İkincil display | `clamp(2rem, 4.5vw, 3.5rem)` | Bebas |
| `display-num` | İstatistik rakamı | `clamp(3rem, 8vw, 6.5rem)` | Bebas |
| `eyebrow` | Section üst etiketi | `0.75rem`, Inter 600, uppercase, `tracking 0.2em`, steel/lime |
| `h3` | Kart/alt başlık | `1.25–1.5rem`, Inter 600, sentence case |
| `body-lg` | Lead paragraf | `1.125rem`, Inter, steel |
| `body` | Gövde | `1rem`, Inter, steel, `leading 1.7` |
| `label` | Form/UI etiketi | `0.8125rem`, Inter 500 |
| `caption` | Yardımcı metin | `0.75rem`, steel |

Kural: Metin bloklarında satır ölçüsü ~60-68 karakteri geçmez.

## 3. Layout

- Container: `max-w-7xl` (1280px), yatay padding `px-5 md:px-8 lg:px-10`.
- Geniş kompozisyon (facility): `max-w-[1440px]`.
- Section ritmi: dikey `py-20 md:py-28 lg:py-32`. Hero hariç.
- Section alternasyonu: `carbon → graphite → carbon`. Aynı zemin üst üste gelmez.
- Hairline ayracı: `border-t border-line` — section'lar arası sık kullanılır.
- Grid: asimetrik kompozisyonlar `grid-cols-12` ile kurulur.

## 4. Radius & bordür

- **Radius yoktur (0) varsayılan olarak.** PULSE dili köşelidir; `rounded-full` yalnızca küçük etiket/chip'te izinli.
- Bordür: `1px solid line`. Hover'da `steel`'e dönebilir; lime border yalnızca aktif/seçili durumda.
- Glow, neon shadow, gradient blob: **yasak**.

## 5. Butonlar

| Varyant | Görünüm | Kullanım |
|---|---|---|
| `primary` | lime zemin, carbon metin, uppercase, Inter 600, tracking geniş | Ücretsiz Deneme ve tek birincil aksiyon |
| `secondary` | şeffaf, 1px line bordür, ink metin | Kulübü Keşfet, ikincil aksiyonlar |
| `ghost` | metin + ok, hover'da lime | "Detayları gör", "Tümünü incele" |
| `whatsapp` | koyu zemin, WhatsApp ikonu, line bordür | İletişim CTA |

Ölçüler: min yükseklik `52px`, padding `px-7 py-3.5`, mobilde tam genişlik olabilir.
Hover: `primary` → `lime-dark`; `secondary` → bordür `steel`; tümünde `transition 200ms`.
Focus: `focus-visible: outline 2px lime offset 2px`.

## 6. Formlar

- Input: charcoal zemin, 1px line bordür, `px-4 py-3.5`, ink metin, placeholder steel.
- Focus: bordür lime'ye döner; `:focus-visible` klavye halkası korunur.
- Label her zaman görünür (placeholder label değildir), `label` elementi bağlıdır.
- Hata: metin `#FF6B6B`, alan bordürü aynı renk.
- Select/date native davranış korunur; koyu tema için `color-scheme: dark`.

## 7. Kart & yüzey desenleri

- "Her şeyi karta koyma" yasağı: bilgi çoğunlukla **hairline çizgiler ve boşlukla** ayrılır.
- Yüzey gerektiğinde: charcoal zemin + line bordür, radius 0.
- Program kartı: tam görsel üstüne alttan karartma + içerik; hover'da görsel `scale-105` (500ms).
- Eğitmen kartı: 3:4 portre, isim Bebas, rol Inter küçük; hover'da lime ince alt çizgi.
- Üyelik: PERFORMANCE planı lime ince çerçeve + "EN ÇOK TERCİH EDİLEN" rozetiyle yükseltilir — SaaS kart üçlüsü estetiğinden kaçınılır.

## 8. Navigasyon

- İlk durum: hero üzerinde şeffaf; scroll >24px sonra `carbon/95` + `backdrop-blur` + alt hairline.
- Masaüstü: logo sol, linkler orta/sağ, CTA lime buton sağda.
- Mobil: tam ekran overlay menü (fade+slide), büyük Bebas linkler, altta iletişim kısayolları; 44px+ dokunma hedefleri.

## 9. Etkileşim

- Reveal: `whileInView` fade-up 24px, 600ms, `ease [0.22,1,0.36,1]`, stagger 80ms — yalnızca section girişlerinde.
- Sayaç: istatistiklerde bir kez çalışan count-up.
- Görsel hover: scale 1.05, 500ms. Parallax: yok. Custom cursor: yok.
- `prefers-reduced-motion`: tüm animasyonlar devre dışı.

## 10. Bileşen mimarisi

```
components/
  ui/        Button, Container, Section, SectionHeader, Accordion, FormField,
             Stat, Badge, Reveal, ImagePlaceholder
  layout/    Navbar, MobileNav, Footer, StickyMobileCTA
  sections/  Hero, Stats, ClubIntro, Programs, WhyPulse, Facility, Coaches,
             ClassPreview, Memberships, Testimonials, FinalCTA, Location, FAQ
  cards/     ProgramCard, CoachCard, MembershipCard, TestimonialCard, ScheduleItem
  forms/     TrialForm, ContactForm
data/        site.ts, programs.ts, coaches.ts, memberships.ts, schedule.ts,
             faqs.ts, testimonials.ts
lib/         utils.ts
```

İçerik bileşen içine gömülmez; `data/` dosyalarından beslenir.

## 11. Responsive kurallar

- Kırılımlar: `sm 640 / md 768 / lg 1024 / xl 1280`.
- Mobil öncelik: hero tipografisi `clamp` ile akışkan; programlar mobilde dikey liste + geniş görsel.
- Ders programı: masaüstünde gün sekmeleri + liste; mobilde gün seçici + dikey kart listesi.
- Fiyat bloğu mobilde dikey stack; CTA her planın altında.
- Dokunma hedefi ≥ 44px. Sticky mobil CTA yalnızca hero geçildikten sonra görünür, `/ucretsiz-deneme` sayfasında ve footer'da gizlenir.

## 12. Erişilebilirlik

- Kontrast: ink/carbon AAA; steel/carbon ≥ 4.5:1.
- Klavye: tüm etkileşimler odaklanabilir, görünür focus halkası.
- Semantik: tek `h1`/sayfa, mantıklı `h2→h3`, `nav/main/footer` landmark'ları.
- Form: bağlı label, hata mesajı `aria-describedby`.
- Görsel alt metni içerikseldir.


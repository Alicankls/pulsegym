# PULSE — Sitemap & Kullanıcı Yolculukları

## 1. Rotalar

| # | Sayfa | Route | Nav | Birincil amaç |
|---|---|---|---|---|
| 1 | Ana Sayfa | `/` | — (logo) | Dönüşüm hunisinin girişi, marka vitrini |
| 2 | Kulüp (Hakkında) | `/kulup` | Kulüp | Hikâye, felsefe, tesis metrikleri |
| 3 | Programlar | `/programlar` | Programlar | 6 programın genel bakışı |
| 4 | Program Detayı | `/programlar/[slug]` | — | Derin anlatım → deneme CTA |
| 5 | Eğitmenler | `/egitmenler` | Eğitmenler | Ekip vitrini |
| 6 | Eğitmen Detayı | `/egitmenler/[slug]` | — | Profil, felsefe, CTA |
| 7 | Üyelik | `/uyelik` | Üyelik | Fiyatlar, karşılaştırma, sorular |
| 8 | Ders Programı | `/ders-programi` | Dersler | Haftalık takvim, gün filtresi |
| 9 | Galeri | `/galeri` | — (footer) | Tesis/atmosfer kanıtı |
| 10 | İletişim | `/iletisim` | İletişim | Form, WhatsApp, harita, saatler |
| 11 | Ücretsiz Deneme | `/ucretsiz-deneme` | **CTA** | Ana dönüşüm sayfası |
| 12 | SSS | `/sss` | — (footer) | İtiraz giderme |
| 13 | Gizlilik Politikası | `/gizlilik-politikasi` | footer | Güven/yasal |
| 14 | KVKK | `/kvkk` | footer | Güven/yasal |
| 15 | 404 | `not-found` | — | Kaybolan kullanıcıyı huniye döndürme |

Slug'lar Türkçe karaktersiz: `/programlar/kuvvet-antrenmani`, `/egitmenler/mert-kaya` vb.

## 2. Gelecek: yerel SEO landing mimarisi

Aynı bileşen sistemiyle üretilecek (bu fazda oluşturulmaz, altyapı hazırdır):

- `/kadikoy-spor-salonu`
- `/kadikoy-personal-training`
- `/kadikoy-fitness`

Desen: `app/(local)/[location]-[service]/page.tsx` + `data/local-pages.ts`.
Her sayfa: lokal H1, tesis kanıtı, program bağlantıları, harita, deneme CTA.

## 3. Kullanıcı yolculukları

### Ana huni
`/ (hero)` → kulübü anlar → tesis kanıtı → programlar → farklılaştırıcılar →
eğitmenler → üyelik → sosyal kanıt → SSS → **/ucretsiz-deneme**

### Destek akışları (ölçülen dönüşümler)

1. `/` → Üyelik preview → `/uyelik` → plan seç → **/ucretsiz-deneme**
2. `/` → Programlar → `/programlar/[slug]` → ilgili eğitmen → **/ucretsiz-deneme**
3. `/egitmenler` → `/egitmenler/[slug]` → "Bu Eğitmenle Tanış" → **/ucretsiz-deneme**
4. `/ders-programi` → ders bul → **/ucretsiz-deneme**
5. `/iletisim` → WhatsApp tıklaması (mobilde birincil dönüşüm)
6. 404 → "Ana sayfaya dön" + "Ücretsiz Deneme" — ölü sokak yok.

### Kural
Her sayfa en az bir **/ucretsiz-deneme** çıkışı taşır. Hiçbir section ölü uç değildir.

## 4. Navigasyon hiyerarşisi

- Masaüstü nav: Logo · Kulüp · Programlar · Eğitmenler · Dersler · Üyelik · İletişim · **[Ücretsiz Deneme]**
- Footer: 4 kolon — Marka (logo, tagline, sosyal) · Keşfet (sayfalar) · Programlar (6 link) · İletişim (adres, tel, mail, saatler, WhatsApp). Alt bar: yasal linkler + "Bu site tanıtım amaçlı kurgusal bir demodur" notu.

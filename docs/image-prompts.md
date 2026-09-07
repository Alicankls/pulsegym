# PULSE — AI Görsel Üretim Prompt Kütüphanesi

> Bu dosya `docs/image-manifest.md` içindeki 27 görselin her biri için **tek başına kullanılabilir**,
> eksiksiz İngilizce prompt içerir (Midjourney, DALL·E 3, Stable Diffusion / SDXL, Firefly vb. ile uyumlu).
> Her prompt aynı "stil DNA'sını" tekrar eder — böylece görselleri farklı oturumlarda / farklı araçlarda
> üretseniz bile hepsi aynı tesise ait gibi görünür.

## Ortak Stil DNA'sı (her prompt'a gömülü)

```
Ultra-realistic professional architectural and lifestyle photograph of PULSE Athletic Club,
a premium contemporary commercial gym in Istanbul. Interior features dark graphite and matte
black materials, polished concrete floors, black steel structural beams, tall industrial
windows with soft natural daylight, warm-neutral color temperature (~4200K), a single subtle
lime-green (#D7FF3F) accent detail visible somewhere in the scene (a thin painted line, a
locker edge, a small equipment marking) — matte, never glowing or neon. Equipment is modern,
matte black, clean, well-maintained, no visible competitor logos or readable text. Shot like
editorial fitness/architecture photography, full-frame camera, 35–50mm lens, natural depth of
field, no HDR, no oversaturation, no artificial smoke, no lens flare gimmicks.
```

## Ortak Negatif Prompt (destekleyen araçlarda kullanın)

```
cyberpunk aesthetic, neon glow, glowing outlines, stock-photo forced smiles, overly posed
fitness models, competition bodybuilding stage physiques, staged template look, motivational
poster style, cluttered background, visible brand logos, anatomical errors, extra fingers,
distorted hands, warped limbs, blurry faces, oversaturated colors, harsh flash, plastic skin,
watermark, text overlay, low-resolution
```

## Kullanım notu

Aşağıdaki her madde: **dosya adı → kullanım yeri → oran/yön → tam prompt**. Prompt'u olduğu gibi
kopyalayıp aracınıza yapıştırabilirsiniz; sondaki `--ar` oranını aracınıza göre uyarlayın.

---

## 1. Hero & Kulüp Tanıtımı

### `hero-gym-wide.jpg` — Ana Sayfa Hero
**Oran:** 16:9 (21:9'a kırpılacak) · Yatay

```
Ultra-realistic professional architectural and lifestyle photograph of PULSE Athletic Club, a
premium contemporary commercial gym in Istanbul. Interior features dark graphite and matte
black materials, polished concrete floors, black steel structural beams, tall industrial
windows with soft natural daylight, warm-neutral color temperature (~4200K), a single subtle
lime-green (#D7FF3F) accent detail visible somewhere, matte, never glowing. Equipment modern,
matte black, clean. Editorial photography, full-frame camera, 35mm lens, natural depth of
field, no HDR, no smoke.

Wide low-angle shot of the main strength training floor at golden late-afternoon light. 3–4
people training naturally in the mid-ground and background (one loading a barbell, one racking
dumbbells, one walking through), genuine unposed effort, realistic skin texture, mixed gender,
athletic but natural body types, neutral-toned gym attire with no readable logos. Camera near
floor level looking down a corridor of squat racks toward tall windows on the left flooding the
space with directional daylight. Darker negative space on the right third of the frame for text
overlay. Cinematic but grounded, not staged. --ar 21:9
```

### `club-intro.jpg` — Ana Sayfa "Neden PULSE"
**Oran:** 4:5 · Dikey

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite and matte black materials, polished
concrete floor, black steel beams, tall windows with soft natural daylight, warm-neutral
~4200K temperature, one subtle matte lime-green (#D7FF3F) accent line visible on a wall or
rack. Editorial photography, 50mm lens, natural depth of field, no HDR.

Vertical shot down a row of squat racks receding into depth, one athletic person mid-set
(rack pull or deadlift) roughly two-thirds into the frame, motion frozen naturally, realistic
skin texture, genuine focused expression, neutral gym attire. Soft daylight from tall side
windows, dust-free air, dark ceiling with minimal exposed ductwork. 
---

## 2. Program Görselleri (kart + detay sayfası ortak)

### `program-strength.jpg` — Kuvvet Antrenmanı
**Oran:** 3:2 · Yatay

```
Ultra-realistic professional fitness photograph of PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite and matte black materials, polished concrete floor,
tall industrial windows with soft natural daylight, warm-neutral ~4200K temperature, one subtle
matte lime-green (#D7FF3F) accent detail visible in the background. Editorial photography,
35mm lens, natural depth of field, no HDR, no smoke.

Close-mid shot of a deadlift platform in the foreground with a loaded olympic barbell, black
rubber bumper plates, chalk dust faintly visible in the air catching window light. One athletic
person mid-lift or resetting between reps, realistic muscle definition without competition-stage
extremity, genuine strained but controlled expression, natural skin texture, plain fitted gym
clothing with no readable logos. Background shows a row of matte black squat racks slightly out
of focus. Mood: serious, focused, premium strength training environment. --ar 3:2
```

### `program-functional.jpg` — Fonksiyonel Antrenman
**Oran:** 3:2 · Yatay

```
Ultra-realistic professional fitness photograph of PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite and matte black materials, polished concrete floor
transitioning to a dark green synthetic turf strip, tall windows with soft natural daylight,
warm-neutral ~4200K temperature, subtle matte lime-green (#D7FF3F) accent visible on equipment
or wall marking. Editorial sports photography, 50mm lens, natural depth of field, slight motion
blur on moving limbs only, no HDR.

Athletic person captured mid-movement on a turf lane, pushing a weighted sled or performing a
kettlebell swing, genuine athletic effort, realistic body proportions, natural skin texture,
functional training rig with pull-up bars and suspension straps visible in the softly blurred
background. Daylight streaming from tall side windows. Mood: dynamic but controlled, functional
performance training, not chaotic. --ar 3:2
```

### `program-pt.jpg` — Personal Training
**Oran:** 3:2 · Yatay

```
Ultra-realistic professional fitness photograph of PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite and matte black materials, polished concrete floor,
tall windows with soft natural daylight, warm-neutral ~4200K temperature, subtle matte
lime-green (#D7FF3F) accent visible in the background. Editorial photography, 50mm lens,
shallow depth of field, no HDR.

A personal trainer standing close beside a client at a squat rack, gently correcting the
client's hand position or bar path with a natural coaching gesture, genuine attentive
expressions on both faces, realistic skin texture, mixed gender pairing, both in plain fitted
gym attire with no readable logos. Shot from shoulder height, background softly blurred showing
other equipment. Mood: attentive, professional one-on-one coaching, quiet confidence, not
staged or smiling at camera. --ar 3:2
```

### `program-group.jpg` — Grup Dersleri
**Oran:** 3:2 · Yatay

```
Ultra-realistic professional fitness photograph of PULSE Athletic Club, a premium contemporary
commercial gym studio in Istanbul. Dark graphite walls, matte black flooring, soft directional
studio lighting mixed with daylight from a side window, warm-neutral ~4200K temperature, subtle
matte lime-green (#D7FF3F) accent visible on a wall stripe. Editorial group-fitness photography,
35mm lens, natural depth of field, slight motion blur on limbs only, no HDR.

A group of 6–8 people mid-HIIT class in a mirrored studio, synchronized movement (e.g. squat
jumps or mountain climbers), genuine exertion and focus on their faces, realistic diverse body
types, mixed gender, natural gym attire with no readable logos, no direct eye contact with
camera. Instructor visible at the front slightly ahead of the group, demonstrating the move.
Mood: high energy, communal effort, authentic group class atmosphere. --ar 3:2
```

### `program-cardio.jpg` — Kardiyo Alanı
**Oran:** 3:2 · Yatay

```
Ultra-realistic professional architectural and fitness photograph of PULSE Athletic Club, a
premium contemporary commercial gym in Istanbul. Dark graphite and matte black materials,
polished concrete floor, tall industrial windows with soft natural daylight, warm-neutral
~4200K temperature, subtle matte lime-green (#D7FF3F) accent visible on equipment trim.
Editorial architectural photography, 35mm lens, deep depth of field, no HDR.

Wide perspective shot down a row of matte black treadmills and rowing machines facing large
windows with a soft cityscape or greenery visible outside, natural daylight flooding the space.
One or two people using the equipment in the mid-ground, genuine natural posture, realistic
skin texture, plain gym attire with no readable logos. Clean cable management, no clutter.
Mood: bright, spacious, premium cardio environment. --ar 3:2
```

### `program-recovery.jpg` — Recovery
**Oran:** 3:2 · Yatay

```
Ultra-realistic professional fitness photograph of PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite materials, matte black flooring with soft stretching
mats, warm soft indirect lighting (slightly dimmer and warmer than the rest of the gym),
warm-neutral ~4200K temperature, subtle matte lime-green (#D7FF3F) accent visible on a wall
detail. Editorial wellness/fitness photography, 50mm lens, shallow depth of field, no HDR.

A single person seated on a mat performing a controlled stretch or using a foam roller, calm
focused expression, realistic natural body, plain gym attire with no readable logos, soft
diffused lighting creating a quiet contrast to the high-energy training areas. Minimal
background clutter, a folded towel and small recovery tools (massage ball) visible nearby.

---

## 3. Tesis Görselleri (Facility Showcase + Galeri)

### `facility-strength.jpg` — Strength Zone (geniş açı)
**Oran:** 16:10 · Yatay

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite and matte black materials, polished
concrete floor, black steel beams, tall industrial windows with soft natural daylight,
warm-neutral ~4200K temperature, one subtle matte lime-green (#D7FF3F) accent line on a wall
or floor marking. Editorial architectural photography, wide-angle 24mm lens, deep depth of
field, no HDR, no fisheye distortion.

Wide symmetrical shot of the strength zone showing a full wall of matte black squat racks and
deadlift platforms in a row, olympic barbells racked neatly, rubber flooring with clean lane
markings, dumbbell rack visible along a side wall. One or two people training small in the
frame for scale, natural unposed poses. Daylight from tall windows on one side creating soft
directional shadows. Mood: spacious, orderly, premium strength training hall. --ar 16:10
```

### `facility-functional.jpg` — Fonksiyonel Alan
**Oran:** 4:5 · Dikey

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite materials, matte black steel functional
training rig, dark green synthetic turf strip on the floor, tall windows with soft natural
daylight, warm-neutral ~4200K temperature, subtle matte lime-green (#D7FF3F) accent visible on
rig padding or a floor line. Editorial architectural photography, 35mm lens, deep depth of
field, no HDR.

Vertical composition looking up slightly at a full-height functional training rig with
pull-up bars, suspension straps, and a battle rope coiled at its base, open turf floor space in
front for movement. No people, or a single small figure faraway for scale. Clean, uncluttered,
well-maintained equipment. Mood: purposeful, spacious, ready-to-train atmosphere. --ar 4:5
```

### `facility-cardio.jpg` — Kardiyo Bölümü
**Oran:** 16:10 · Yatay

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite and matte black materials, polished
concrete floor, tall industrial windows with abundant soft natural daylight, warm-neutral
~4200K temperature, subtle matte lime-green (#D7FF3F) accent on equipment trim. Editorial
architectural photography, 24mm wide-angle lens, deep depth of field, no HDR.

Wide shot of a full row of matte black treadmills, stationary bikes, and rowing machines facing
a wall of tall windows with a soft blurred cityscape or greenery outside. Bright, airy,
sunlit atmosphere contrasting with the darker strength areas. No people or one person small in
the background for scale. Clean cable management, spotless floor. Mood: bright, energizing,
premium cardio hall. --ar 16:10
```

### `facility-recovery.jpg` — Recovery Köşesi
**Oran:** 16:10 · Yatay

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite materials, soft matte flooring with
stretching mats, warm dim indirect lighting distinctly calmer than the main training floor,
warm-neutral ~4200K temperature, subtle matte lime-green (#D7FF3F) accent on a wall detail.
Editorial architectural/wellness photography, 35mm lens, shallow-to-medium depth of field,
no HDR.

Quiet corner with neatly arranged foam rollers, stretching mats, and a low bench, soft warm
lighting from a hidden fixture rather than harsh daylight, a single small potted plant or
minimal decor element. No people, or one person calmly stretching in the background. Mood:
calm, restorative, a deliberate contrast to the high-energy zones. --ar 16:10
```

### `facility-locker.jpg` — Soyunma Odası
**Oran:** 16:10 · Yatay

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite and matte black materials, warm-neutral
~4200K interior lighting (no harsh fluorescents), a subtle matte lime-green (#D7FF3F) accent
line along locker edges or bench trim. Editorial architectural/interior photography, 24mm
lens, deep depth of field, no HDR.

Clean modern locker room with a row of matte black metal lockers, integrated LED strip
lighting, a wooden bench, and a small mirror station. Spotless, no clutter, no people, no
readable text on lockers. Mood: premium, hygienic, hotel-like locker room standard. --ar 16:10
```


### `facility-exterior.jpg` — Dış Cephe (+Konum bölümü haritası)
**Oran:** 16:9 · Yatay

```
Ultra-realistic professional architectural exterior photograph of PULSE Athletic Club storefront
on a lively Istanbul avenue resembling Bağdat Caddesi, Kadıköy, at soft early-evening blue hour.
Dark graphite and matte black storefront facade, large glass windows revealing a warmly lit gym
interior with hints of equipment inside, a minimal illuminated sign reading "PULSE" in clean
bold sans-serif lettering with a small lime-green (#D7FF3F) accent dot or underline (no other
text). Warm interior light contrasting with the cool blue dusk sky outside. Pedestrians and
street life softly blurred in the foreground for realism. Editorial architectural photography,
35mm lens, natural exposure, no HDR, no lens flare. --ar 16:9
```

---

## 4. Eğitmen Portreleri (aynı oturum standardı — 4 görsel)

> Bu dört portre **aynı fotoğraf oturumunda çekilmiş gibi** görünmeli: aynı arka plan (strength
> duvarı), aynı ışık yönü (soldan 45°), aynı kadraj (bel üstü, 3:4), aynı lens/mesafe. Yalnızca
> kişi, poz detayı ve giysi rengi değişir. Her prompt'u sırayla üretin ve aynı seed/ayarları
> mümkünse koruyun.

**Ortak portre stüdyo tarifi (her promptta tekrarlanır):**
```
Ultra-realistic editorial gym portrait, shot against a blurred backdrop of matte black squat
racks and dark graphite walls at PULSE Athletic Club. Soft directional daylight from camera-left
at a 45° angle mimicking a tall window, warm-neutral ~4200K color temperature, subtle matte
lime-green (#D7FF3F) accent barely visible out of focus in the background. Waist-up framing,
85mm portrait lens, shallow depth of field (f/2.0), natural skin texture with visible pores and
realistic texture, no retouched plastic skin, confident and calm expression (not smiling for
camera, not aggressive), plain fitted dark athletic top with no readable logos, arms relaxed or
lightly crossed. Editorial fitness-brand portrait photography, not corporate headshot, not
stock photo.
```

### `coach-mert.jpg` — Mert Kaya (Baş Eğitmen)
**Oran:** 3:4 · Dikey

```
[Ortak portre stüdyo tarifini buraya ekleyin]

Subject: Turkish male, early-to-mid 30s, short dark hair, light stubble beard, athletic
build (strength-coach physique, not competition bodybuilder), confident grounded posture,
looking slightly off-camera with a calm authoritative expression. Wearing a plain charcoal
fitted training t-shirt. --ar 3:4
```

### `coach-selin.jpg` — Selin Arslan (Performans Eğitmeni)
**Oran:** 3:4 · Dikey

```
[Ortak portre stüdyo tarifini buraya ekleyin]

Subject: Turkish female, late 20s, dark hair tied back in a low ponytail, athletic toned build
(functional-training physique), warm but composed expression, looking slightly off-camera,
natural confident posture. Wearing a plain black fitted training tank top. --ar 3:4
```

### `coach-can.jpg` — Can Demir (Personal Trainer)
**Oran:** 3:4 · Dikey

```
[Ortak portre stüdyo tarifini buraya ekleyin]

Subject: Turkish male, mid-to-late 30s, short cropped hair, well-built muscular frame
(hypertrophy-coach physique, natural not extreme), friendly but composed expression, arms
lightly crossed, looking slightly off-camera. Wearing a plain heather-grey fitted training
t-shirt. --ar 3:4
```

### `coach-elif.jpg` — Elif Yılmaz (Grup Dersi Eğitmeni)
**Oran:** 3:4 · Dikey

```
[Ortak portre stüdyo tarifini buraya ekleyin]

Subject: Turkish female, mid-20s, dark hair in a high ponytail, lean athletic build (HIIT/group
fitness instructor physique), energetic yet composed expression, slight natural smile (closed,
not toothy), looking slightly off-camera. Wearing a plain black fitted training tank top with a
thin lime-green trim detail on the collar (the only person allowed this micro brand accent).
--ar 3:4
```

---

## 5. Kanıt & Detay Görselleri

### `group-hiit.jpg` — HIIT Dersi (Ana Sayfa Class Preview + Ders Programı)
**Oran:** 16:10 · Yatay

```
Ultra-realistic professional fitness photograph of PULSE Athletic Club, a premium contemporary
commercial gym studio in Istanbul. Dark graphite walls, matte black flooring, soft mixed
daylight and studio lighting, warm-neutral ~4200K temperature, subtle matte lime-green
(#D7FF3F) accent visible on a wall stripe. Editorial group-fitness photography, 35mm lens,
natural depth of field, slight authentic motion blur on limbs only, no HDR.

Wide shot of a HIIT class in full motion, 6–8 diverse participants performing burpees or squat
jumps in loose formation, genuine sweat and exertion, realistic body types, mixed gender, no
direct eye contact with camera, natural gym attire with no readable logos. Instructor visible
at the front energetically demonstrating the movement. High-energy but authentic, not overly
choreographed. --ar 16:10
```

### `pt-session.jpg` — PT Teknik Düzeltme Anı (Why PULSE + PT detay)
**Oran:** 16:10 · Yatay

```
Ultra-realistic professional fitness photograph of PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite and matte black materials, tall windows with soft
natural daylight, warm-neutral ~4200K temperature, subtle matte lime-green (#D7FF3F) accent
visible in the blurred background. Editorial photography, 50mm lens, shallow depth of field,
no HDR.

Close-up shot at a squat rack: a personal trainer's hand gently guiding a client's elbow or
hip position mid-set, genuine focused expressions, realistic skin texture, natural gym attire
with no readable logos. Emphasis on the coaching gesture and the barbell/rack in sharp focus,
faces softly visible but not the main subject. Mood: precise, attentive, professional coaching
moment. --ar 16:10
```

### `equipment-detail.jpg` — Plaka & Bar Detayı (Why PULSE doku)
**Oran:** 16:10 · Yatay

```
Ultra-realistic macro-style product/editorial photograph at PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite background, warm-neutral ~4200K
directional light grazing across the surface, subtle matte lime-green (#D7FF3F) accent visible
softly out of focus in the background. Macro lens, very shallow depth of field, no HDR.

Extreme close-up of a matte black olympic barbell sleeve with stacked black rubber bumper
plates, knurling texture visible in sharp focus, a faint dusting of chalk catching the light.
No people. Mood: tactile, premium equipment quality, editorial product-detail shot. --ar 16:10
```

### `facility-detail-01.jpg` — Malzeme & Işık Detayı (Galeri)
**Oran:** 4:5 · Dikey

```
Ultra-realistic architectural detail photograph at PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite concrete and matte black steel materials, soft
natural daylight raking across textured surfaces at a low angle, warm-neutral ~4200K
temperature, a subtle matte lime-green (#D7FF3F) accent line integrated into the architecture
(e.g. a painted floor line or steel edge). Editorial architectural photography, 50mm lens,
medium depth of field, no HDR.

Abstract-leaning detail composition of concrete texture, a black steel beam corner, and soft
directional window light creating long shadows. No people, no equipment necessarily — purely
architectural mood and material texture. --ar 4:5
```

### `facility-detail-02.jpg` — Dolap/Bench Detayı (Galeri)
**Oran:** 4:5 · Dikey

```
Ultra-realistic architectural detail photograph at PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite and matte black materials, warm-neutral ~4200K soft
interior lighting, a subtle matte lime-green (#D7FF3F) accent line along a bench edge or locker
seam. Editorial architectural/interior photography, 50mm lens, shallow depth of field, no HDR.

Close detail shot of a wooden gym bench next to a matte black locker corner, folded towel
resting on the bench, soft directional light creating gentle shadow gradients. No people,
no readable text. Mood: refined, tactile, premium finish quality. --ar 4:5
```

### `community-01.jpg` — Antrenman Sonrası Sohbet (Galeri/Topluluk)
**Oran:** 3:2 · Yatay

```
Ultra-realistic professional lifestyle photograph at PULSE Athletic Club, a premium contemporary
commercial gym in Istanbul. Dark graphite and matte black materials, tall windows with soft
natural daylight, warm-neutral ~4200K temperature, subtle matte lime-green (#D7FF3F) accent
visible in the background. Editorial lifestyle photography, 50mm lens, natural depth of field,
no HDR.

Two or three members standing near the entrance or lounge area after training, genuine relaxed
conversation, natural candid body language (not looking at camera), realistic skin texture,
mixed gender and age range within 20s–40s, casual athletic wear with towels around necks or
water bottles in hand. Mood: authentic camaraderie, understated, not a forced group photo.
--ar 3:2
```

### `community-02.jpg` — Partner Antrenmanı (Galeri/Topluluk)
**Oran:** 3:2 (kart) / 16:10 (galeri geniş) · Yatay

```
Ultra-realistic professional fitness lifestyle photograph at PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul. Dark graphite and matte black materials, tall windows
with soft natural daylight, warm-neutral ~4200K temperature, subtle matte lime-green (#D7FF3F)
accent visible in the background. Editorial photography, 50mm lens, natural depth of field,
no HDR.


---

## 6. Marka Anları (CTA zemini + OpenGraph)

### `cta-bg.jpg` — Final CTA Zemini
**Oran:** 21:9 · Ultra-geniş Yatay

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul, shot in very low-key dramatic lighting. Dark graphite
and matte black materials nearly silhouetted, a single strong directional light source (e.g.
one tall window or one overhead fixture) creating a bold pool of light against a mostly dark
frame, warm-neutral ~4200K temperature, one subtle matte lime-green (#D7FF3F) accent line
catching the light. Editorial cinematic architectural photography, 24mm lens, deep depth of
field, no HDR, no artificial smoke, no lens flare gimmicks.

Ultra-wide silhouette composition of the empty strength training floor at night, racks and
barbells rendered as dark shapes against the one lit area, creating strong negative space on
both left and right thirds suitable for text overlay. No people, or one small silhouetted
figure in the distance. Mood: powerful, quiet intensity, cinematic but restrained — not neon,
not glowing. --ar 21:9
```

### `og-image.jpg` — OpenGraph / Sosyal Paylaşım Görseli
**Oran:** 1200×630 (1.91:1) · Yatay

```
Ultra-realistic professional architectural photograph of PULSE Athletic Club, a premium
contemporary commercial gym in Istanbul, dark graphite and matte black materials, one strong
directional light source creating dramatic contrast, warm-neutral ~4200K temperature. Editorial
cinematic photography, 35mm lens, deep depth of field, no HDR, no smoke.

Wide moody shot of the strength training floor with racks visible as darker silhouettes,
generous dark negative space across the left half of the frame (reserved for a logo/wordmark
overlay added separately in post-production), a single subtle matte lime-green (#D7FF3F)
accent line visible on the right side of the composition. No readable text baked into the
image itself — text will be added afterward in the design tool. --ar 1.91:1
```

---

## 7. Üretim Sırası Önerisi

1. Önce **4 eğitmen portresini** art arda üretin (aynı stüdyo tarifini birebir koruyarak) —
   bunlar en çok tutarlılık gerektiren set.
2. Sonra **tesis görsellerini** (bölüm 3) üretin; bunlar hero ve program görsellerindeki
   mekân referansını oluşturur.
3. **Hero ve program görsellerini** (bölüm 1–2) tesis görsellerindeki ekipman/malzeme diline
   bakarak üretin — mümkünse aynı prompt aracında image-reference/style-reference olarak
   kullanın.
4. **Kanıt & detay görsellerini** (bölüm 5) en son üretin; bunlar en esnek olanlardır.
5. **CTA zemini ve OG görselini** (bölüm 6) en sona bırakın; text overlay için negatif alan
   payını diğer tüm görseller belirlendikten sonra netleştirin.

## 8. Dosyalama

Üretilen her görseli `docs/image-manifest.md` içindeki dosya adıyla birebir
`public/images/` klasörüne yerleştirin (örn. `public/images/coach-mert.jpg`). Next.js
tarafında `components/ui/ImagePlaceholder.tsx` kullanılan her yerde, aynı `label` ile
eşleşen gerçek görseli `next/image` bileşenine bağlamak yeterlidir.






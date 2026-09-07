# Görselleri buraya yükleyin

`docs/image-prompts.md` içindeki prompt'larla ürettiğiniz görselleri, aşağıdaki **tam dosya
adlarıyla** bu klasöre (`public/images/`) kaydedin. Ad birebir eşleşmelidir (büyük/küçük harf
dahil), aksi halde site içinde otomatik olarak görünmezler.

```
hero-gym-wide.jpg
club-intro.jpg
program-strength.jpg
program-functional.jpg
program-pt.jpg
program-group.jpg
program-cardio.jpg
program-recovery.jpg
facility-strength.jpg
facility-functional.jpg
facility-cardio.jpg
facility-recovery.jpg
facility-locker.jpg
facility-exterior.jpg
coach-mert.jpg
coach-selin.jpg
coach-can.jpg
coach-elif.jpg
group-hiit.jpg
pt-session.jpg
equipment-detail.jpg
facility-detail-01.jpg
facility-detail-02.jpg
community-01.jpg
community-02.jpg
cta-bg.jpg
og-image.jpg
```

Detaylar için:
- `docs/image-manifest.md` — her görselin amacı, kullanıldığı sayfa/section, oran ve kadraj bilgisi
- `docs/image-prompts.md` — her görsel için hazır AI üretim prompt'u

Görselleri yükledikten sonra ilgili bileşenlerdeki `ImagePlaceholder` kullanımlarını
`next/image` ile değiştirmek gerekir (bkz. görev listesi aşağıda).

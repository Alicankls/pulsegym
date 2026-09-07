export type Program = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  benefits: string[];
  forWhom: string[];
  expect: string[];
  equipment: string[];
  coachSlugs: string[];
  faq: { q: string; a: string }[];
};

export const programs: Program[] = [
  {
    slug: "kuvvet-antrenmani",
    name: "Kuvvet Antrenmanı",
    short: "Serbest ağırlıktan makinelere, gerçek bir güç ortamı.",
    description:
      "PULSE'un güç bölümü; platformlar, rack'ler, serbest ağırlıklar ve plate-loaded makinelerle hem yeni başlayanlara hem deneyimli sporculara göre kuruldu. Amacın ilk barbell antrenmanın da olabilir, kişisel rekorun da — alan ve ekipman hazır.",
    image: "/images/program-strength.webp",
    alt: "PULSE güç bölümünde deadlift platformu ve rack alanı",
    benefits: [
      "Kas kütlesi ve genel kuvvet artışı",
      "Kemik yoğunluğu ve duruş gelişimi",
      "Günlük yaşamda işlevsel güç",
      "Ölçülebilir, takip edilen ilerleme",
    ],
    forWhom: [
      "Kuvvet antrenmanına temelden başlamak isteyenler",
      "Barbell hareketlerini tekniğiyle öğrenmek isteyenler",
      "Platosunu aşmak isteyen deneyimli sporcular",
    ],
    expect: [
      "İlk gün hareket değerlendirmesi ve teknik yönlendirme",
      "Programına göre serbest antrenman; eğitmenler sahada",
      "Platform ve rack kullanımında sıra düzeni, kalabalık kontrolü",
    ],
    equipment: [
      "3 squat rack + 2 deadlift platformu",
      "2,5–50 kg dambıl seti",
      "Plate-loaded makine hattı",
      "Selectorized makine grubu",
    ],
    coachSlugs: ["mert-kaya", "can-demir"],
    faq: [
      {
        q: "Hiç ağırlık çalışmadım, nereden başlarım?",
        a: "Başlangıç ölçümünde hareket geçmişin ve hedefin konuşulur; ilk programın makine ağırlıklı ve teknik odaklı kurulur. Serbest ağırlığa geçiş hazır olduğunda, eğitmen eşliğinde olur.",
      },
      {
        q: "Platform ve rack'ler kalabalıkta kullanılabiliyor mu?",
        a: "Yoğun saatlerde bile sıra düzeni eğitmenler tarafından yönetilir. 5 rack/platform hattı sayesinde bekleme süresi kısadır.",
      },
    ],
  },
  {
    slug: "fonksiyonel-antrenman",
    name: "Fonksiyonel Antrenman",
    short: "Mobilite, kondisyon ve gerçek hayata taşan güç.",
    description:
      "Turf şerit, rig ve açık zemin üzerinde kurulu fonksiyonel alan; hareket kalitesini, mobiliteyi ve atletik kondisyonu birlikte geliştirir. Amaç sadece ağırlık kaldırmak değil — daha iyi hareket eden bir vücut.",
    image: "/images/program-functional.webp",
    alt: "PULSE fonksiyonel antrenman alanında turf şeritte antrenman",
    benefits: [
      "Eklem hareket açıklığı ve mobilite",
      "Atletik kondisyon ve dayanıklılık",
      "Sakatlanma riskini azaltan hareket kalitesi",
      "Sportif performansa doğrudan taşan güç",
    ],
    forWhom: [
      "Masa başı çalışıp hareketliliğini geri kazanmak isteyenler",
      "Branşında performansını artırmak isteyen sporcular",
      "Tek düze antrenmandan sıkılanlar",
    ],
    expect: [
      "Isınma ve mobilite blokları her seansın parçasıdır",
      "Kettlebell, sled, rope ve vücut ağırlığı varyasyonları",
      "Seviyene göre ölçeklenen yoğunluk",
    ],
    equipment: [
      "20 m turf şerit + sled",
      "Fonksiyonel rig istasyonu",
      "Kettlebell ve med ball seti",
      "Battle rope, box, band grubu",
    ],
    coachSlugs: ["selin-arslan", "elif-yilmaz"],
    faq: [
      {
        q: "Fonksiyonel antrenman kuvvet çalışmasının yerine geçer mi?",
        a: "Birbirinin rakibi değil, tamamlayıcısıdır. Çoğu üyemiz haftada iki gün kuvvet, bir-iki gün fonksiyonel çalışır; programın buna göre dengelenir.",
      },
    ],
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    short: "Bire bir eğitmen eşliğinde, sana özel program.",
    description:
      "İlk seans bir antrenman değil, değerlendirmedir: hareket analizi, ölçüm, hedef konuşması. Sonrasında program tamamen sana göre yazılır ve her seansta tekniğin, yüklerin ve ilerlemen takip edilir.",
    image: "/images/program-pt.webp",
    alt: "PULSE eğitmeni üyeyle bire bir personal training seansında",
    benefits: [
      "Tamamen kişiselleştirilmiş program",
      "Her tekrarda teknik geri bildirim",
      "Düzenli ölçüm ve program güncellemesi",
      "Randevu disipliniyle süreklilik",
    ],
    forWhom: [
      "En hızlı ve güvenli ilerlemeyi isteyenler",
      "Belirli bir hedefe tarih koyanlar (düğün, yarış, sezon)",
      "Tekniğini baştan doğru kurmak isteyenler",
    ],
    expect: [
      "İlk buluşma: 45 dk değerlendirme + hedef planı",
      "Seanslar 60 dk; ısınma, ana blok, finiş ve notlar",
      "4 haftada bir ölçüm ve program revizyonu",
    ],
    equipment: [
      "Tesisin tamamı seans kapsamında kullanılır",
      "Öncelikli ekipman rezervasyonu",
      "Vücut analiz cihazı ölçümleri",
    ],
    coachSlugs: ["mert-kaya", "can-demir", "selin-arslan"],
    faq: [
      {
        q: "Personal Training üyeliğe dahil mi?",
        a: "UNLIMITED üyelikte ayda 2 seans dahildir. Diğer üyeliklerde seanslar ayrıca paket olarak alınır. İlk tanışma seansı ücretsiz deneme kapsamında planlanabilir.",
      },
    ],
  },
  {
    slug: "grup-dersleri",
    name: "Grup Dersleri",
    short: "HIIT'ten Mobility'ye, haftada 45+ canlı ders.",
    description:
      "Küçük gruplar, yüksek enerji, eğitmen gözetimi. HIIT, Core, Mobility, Conditioning ve Functional Strength dersleri; her seviyeye ölçeklenen yapısıyla hem yeni başlayana hem düzenli sporcuya hitap eder.",
    image: "/images/program-group.webp",
    alt: "PULSE stüdyosunda grup HIIT dersi",
    benefits: [
      "Grup enerjisiyle yüksek motivasyon",
      "Eğitmen gözetiminde güvenli yoğunluk",
      "Program derdi olmadan hazır antrenman",
      "Düzenli katılımla güçlü topluluk hissi",
    ],
    forWhom: [
      "Yalnız antrenman yapmakta zorlananlar",
      "Zamanı kısıtlı, verimli ders arayanlar",
      "Kondisyonunu eğlenceli şekilde artırmak isteyenler",
    ],
    expect: [
      "Dersler 45–50 dk; ısınma ve soğuma dahil",
      "Maksimum 14 kişilik kontenjan",
      "Rezervasyon üye panelinden veya resepsiyondan",
    ],
    equipment: [
      "Stüdyo: ses sistemi, mat ve step donanımı",
      "HIIT için sled, rope ve kardiyo istasyonları",
      "Mobility için band, roller ve blok seti",
    ],
    coachSlugs: ["elif-yilmaz", "selin-arslan"],
    faq: [
      {
        q: "Grup derslerine nasıl katılabilirim?",
        a: "PERFORMANCE ve UNLIMITED üyeliklerde tüm dersler sınırsızdır. Ders programından gününü seç, rezervasyonunu yap, 10 dakika önceden stüdyoda ol. İlk dersin ücretsiz denemeyle de olabilir.",
      },
    ],
  },
  {
    slug: "kardiyo",
    name: "Kardiyo Alanı",
    short: "Pencere önünde modern kardiyo hattı.",
    description:
      "Koşu bantları, bisikletler, kürek ve merdiven makinelerinden oluşan kardiyo bölümü; ısınma, yağ yakımı ve kondisyon hedefleri için günün her saati kullanıma açık. Tüm cihazlar ekranlı ve nabız takiplidir.",
    image: "/images/program-cardio.webp",
    alt: "PULSE kardiyo bölümünde koşu bandı ve kürek sırası",
    benefits: [
      "Kalp-damar dayanıklılığı",
      "Yağ yakımına destek",
      "Düşük darbeli kondisyon seçenekleri",
      "Antrenman öncesi/sonrası ideal ısınma alanı",
    ],
    forWhom: [
      "Kondisyonunu temelden kurmak isteyenler",
      "Kuvvet antrenmanını kardiyoyla dengeleyenler",
      "Eklem dostu kardiyo arayanlar",
    ],
    expect: [
      "Her cihazda kişisel ekran ve nabız takibi",
      "Yoğun saatlerde 30 dk kullanım önerisi",
      "Kürek ve merdiven makineleri için teknik kartları",
    ],
    equipment: [
      "8 koşu bandı",
      "6 bisiklet (dikey + yatay)",
      "4 kürek makinesi",
      "2 merdiven makinesi + eliptik hattı",
    ],
    coachSlugs: ["elif-yilmaz"],
    faq: [
      {
        q: "Kardiyo alanı START üyeliğine dahil mi?",
        a: "Evet. START üyeliği kardiyo alanını tam kapsar; ayrıca başlangıç ölçümünde sana uygun kardiyo düzeni önerilir.",
      },
    ],
  },
  {
    slug: "recovery",
    name: "Recovery",
    short: "Gelişim antrenmanda değil, toparlanmada olur.",
    description:
      "Ayrılmış recovery bölümü; esneme alanı, foam roller'lar, masaj tabancaları ve sessiz bir ortam sunar. Antrenman sonrası 15 dakikalık bir rutin, ertesi günkü performansını doğrudan etkiler.",
    image: "/images/program-recovery.webp",
    alt: "PULSE recovery alanında esneme ve mobilite çalışması",
    benefits: [
      "Kas ağrısında azalma",
      "Hareket açıklığında artış",
      "Sakatlanma riskinde düşüş",
      "Antrenman sıklığını koruyan toparlanma",
    ],
    forWhom: [
      "Haftada 3+ antrenman yapanlar",
      "Gerginlik ve hareket kısıtı yaşayanlar",
      "Antrenman sonrası rutin kurmak isteyenler",
    ],
    expect: [
      "Sessiz bölge: telefon ve konuşma minimumda",
      "Yönlendirmeli esneme panoları ve eğitmen desteği",
      "Haftalık Mobility dersleri bu alanda yapılır",
    ],
    equipment: [
      "Esneme ve mobilite matları",
      "Foam roller ve masaj topu seti",
      "Masaj tabancaları",
      "Bant ve blok donanımı",
    ],
    coachSlugs: ["selin-arslan"],
    faq: [
      {
        q: "Recovery alanı hangi üyeliklere dahil?",
        a: "PERFORMANCE ve UNLIMITED üyeliklerde dahildir. START üyeleri antrenman sonrası esneme bölümünü kullanabilir.",
      },
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}

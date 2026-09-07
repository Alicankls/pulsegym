export type Membership = {
  slug: string;
  name: string;
  price: string;
  period: string;
  popular: boolean;
  tagline: string;
  features: string[];
  note?: string;
};

export const memberships: Membership[] = [
  {
    slug: "start",
    name: "START",
    price: "₺1.790",
    period: "/ ay",
    popular: false,
    tagline: "Salonla tanışmak için doğru başlangıç.",
    features: [
      "Salon erişimi (tüm çalışma saatleri)",
      "Kardiyo alanı",
      "Soyunma odası ve duş kullanımı",
      "Başlangıç fitness değerlendirmesi",
    ],
  },
  {
    slug: "performance",
    name: "PERFORMANCE",
    price: "₺2.490",
    period: "/ ay",
    popular: true,
    tagline: "Düzenli ilerlemek isteyenlerin tercihi.",
    features: [
      "Salona tam erişim",
      "Sınırsız grup dersleri",
      "Aylık vücut analizi",
      "Kişiselleştirilmiş antrenman programı",
      "Recovery alanı kullanımı",
    ],
  },
  {
    slug: "unlimited",
    name: "UNLIMITED",
    price: "₺3.490",
    period: "/ ay",
    popular: false,
    tagline: "Eğitmeni yanında isteyenler için tam paket.",
    features: [
      "PERFORMANCE'taki her şey",
      "Ayda 2 Personal Training seansı",
      "Öncelikli ders rezervasyonu",
      "Premium dolap",
      "3 aylık performans değerlendirmesi",
    ],
  },
];

export const membershipQuestions = [
  {
    q: "Taahhüt var mı?",
    a: "Üyelikler aylık olarak yenilenir; uzun vadeli taahhüt zorunlu değildir. 12 aylık peşin ödemelerde avantajlı fiyat uygulanır.",
  },
  {
    q: "Üyeliğimi dondurabilir miyim?",
    a: "Evet. Yılda 30 güne kadar üyelik dondurma hakkın var; tatil, seyahat veya sağlık durumlarında resepsiyondan tek taleple işlenir.",
  },
  {
    q: "Planımı sonradan değiştirebilir miyim?",
    a: "Dilediğin zaman. Alt plandan üst plana geçiş anında olur; fark, kalan gün üzerinden hesaplanır.",
  },
  {
    q: "Kayıt ücreti var mı?",
    a: "Hayır. İlk ay üyelik bedeli dışında kayıt, kart veya dosya ücreti alınmaz.",
  },
];

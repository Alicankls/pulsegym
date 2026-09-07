export type Coach = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  quote: string;
  bio: string[];
  philosophy: string;
  expertise: string[];
  certifications: string[];
  image: string;
  alt: string;
};

export const coaches: Coach[] = [
  {
    slug: "mert-kaya",
    name: "Mert Kaya",
    role: "Baş Eğitmen",
    specialty: "Kuvvet & Kondisyon",
    quote: "Doğru teknikle kaldırılan orta ağırlık, kötü teknikle kaldırılan ağır kilodan her zaman kazanır.",
    bio: [
      "Mert, 2011'den beri kuvvet antrenmanının içinde. Üniversitede spor bilimleri okudu, ilk yıllarında amatör halterle ilgilendi; sonrasında odağını tamamen güç ve kondisyon koçluğuna çevirdi.",
      "PULSE'un kuruluşundan bu yana eğitmen ekibinin başında. Salonun programlama standartlarını o yazdı; yeni başlayan üyeyle yıllardır antrenman yapan üyeye aynı ciddiyetle yaklaşmasıyla tanınır.",
    ],
    philosophy:
      "Önce hareket kalitesi, sonra yük. Mert'in seanslarında acele yoktur; temel hareketler oturmadan programa ağırlık eklenmez. İlerleme küçük ama istikrarlı adımlarla ölçülür.",
    expertise: ["Barbell hareket tekniği", "Kuvvet programlaması", "Güç sporu temelleri", "Sezonluk kondisyon planlaması"],
    certifications: ["NSCA-CSCS", "Türkiye Halter Federasyonu Antrenör Lisansı"],
    image: "/images/coach-mert.webp",
    alt: "PULSE Baş Eğitmeni Mert Kaya, kuvvet bölümünde",
  },
  {
    slug: "selin-arslan",
    name: "Selin Arslan",
    role: "Performans Eğitmeni",
    specialty: "Fonksiyonel Antrenman & Mobilite",
    quote: "Vücudun sana ne söylediğini duymayı öğrenirsen, sakatlanma çoğu zaman sürpriz olmaz.",
    bio: [
      "Selin'in spor geçmişi voleyboldan geliyor; üniversite yıllarında yaşadığı diz sakatlığı onu rehabilitasyon ve hareket bilimine yönlendirdi. O süreçte öğrendikleri bugün derslerinin temelini oluşturuyor.",
      "PULSE'ta fonksiyonel antrenman ve mobilite programlarının sorumlusu. Masa başı çalışan üyelerle çalışmayı özellikle seviyor — 'oturarak geçen on yılı tersine çevirmek' onun deyimiyle en sevdiği proje.",
    ],
    philosophy:
      "Mobilite bir ısınma eki değil, antrenmanın kendisidir. Selin önce hareket açıklığını geri kazandırır, sonra o alanı güçle doldurur.",
    expertise: ["Hareket değerlendirmesi (FMS)", "Mobilite programlaması", "Fonksiyonel kuvvet", "Sakatlık sonrası spora dönüş"],
    certifications: ["FMS Level 2", "NASM-CES"],
    image: "/images/coach-selin.webp",
    alt: "PULSE Performans Eğitmeni Selin Arslan, fonksiyonel alanda",
  },
  {
    slug: "can-demir",
    name: "Can Demir",
    role: "Personal Trainer",
    specialty: "Kas Gelişimi & Vücut Dönüşümü",
    quote: "Dönüşüm bir tarihte bitmez; ama her hafta bir öncekinden fark edilir olmalı.",
    bio: [
      "Can, kendi dönüşüm hikâyesiyle başladı: 2016'da 104 kiloydu ve bir yıl içinde düzenli antrenman ve beslenmeyle 78 kiloya indi. Bu sürecin psikolojisini bilen biri olarak danışanlarına farklı yaklaşıyor.",
      "PULSE'ta bire bir seanslarının yanında vücut analizi ölçümlerini yürütüyor. Rakamlarla konuşur: çevre ölçüsü, yağ oranı, kuvvet takibi — hepsi kayıt altında, hepsi paylaşılır.",
    ],
    philosophy:
      "Sürdürülemeyen program kötü programdır. Can, danışanının yaşamına uyan, haftada gerçekçi kaç saat ayırabildiğine göre kurulan programlar yazar.",
    expertise: ["Hipertrofi programlaması", "Vücut kompozisyonu takibi", "Beslenme düzeni koçluğu", "Yeni başlayan dönüşüm programları"],
    certifications: ["ACE-CPT", "Precision Nutrition Level 1"],
    image: "/images/coach-can.webp",
    alt: "PULSE Personal Trainer Can Demir, antrenman salonunda",
  },
  {
    slug: "elif-yilmaz",
    name: "Elif Yılmaz",
    role: "Grup Dersi Eğitmeni",
    specialty: "HIIT & Kondisyon",
    quote: "Ders bittiğinde herkes aynı anda yere bakıyorsa, tempoyu doğru kurmuşum demektir.",
    bio: [
      "Elif, grup dersi eğitmenliğine 2018'de başladı ve o günden beri haftada 15'ten fazla canlı ders veriyor. Enerjisi kadar teknik titizliğiyle bilinir — derste tekniği bozulan üyeyi gözünden kaçırmaz.",
      "PULSE'un HIIT ve Conditioning derslerinin programlarını o hazırlıyor. 'Ders saatinde salonda olmak' onun için işin yarısı; diğer yarısı her dersin müziğini ve akışını önceden kurmak.",
    ],
    philosophy:
      "Yoğunluk herkese göre ayarlanır. Elif'in derslerinde aynı anda üç seviye çalışılır; kimse geride kalmaz, kimse beklemek zorunda kalmaz.",
    expertise: ["HIIT programlaması", "Grup dersi yönetimi", "Kardiyovasküler kondisyon", "Metabolik antrenman"],
    certifications: ["ACE-GFI", "Les Mills SPRINT Sertifikası"],
    image: "/images/coach-elif.webp",
    alt: "PULSE Grup Dersi Eğitmeni Elif Yılmaz, stüdyoda",
  },
];

export function getCoach(slug: string) {
  return coaches.find((c) => c.slug === slug);
}

export function getCoachesByProgram(coachSlugs: string[]) {
  return coaches.filter((c) => coachSlugs.includes(c.slug));
}

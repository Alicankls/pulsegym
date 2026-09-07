export type Testimonial = {
  name: string;
  meta: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Deniz A.",
    meta: "28 · Avukat · 2 yıldır üye",
    text: "İş çıkışı geldiğim saatlerde bile ekipman sırası beklediğim olmadı. Salonun düzeni ve temizliği konusunda bu kadar titiz bir yer daha görmedim; havlunu unutursan bile sorun olmuyor.",
  },
  {
    name: "Burak T.",
    meta: "34 · Yazılım geliştirici · 1 yıldır üye",
    text: "Yıllarca masa başında çalışınca omuzlarım kapanmıştı. Selin Hoca'nın mobilite dersleriyle üç ayda fark ettim: artık ağrıyla uyanmıyorum. Programım hâlâ her ay güncelleniyor.",
  },
  {
    name: "Zeynep K.",
    meta: "26 · Mimar · 8 aydır üye",
    text: "Elif Hoca'nın HIIT derslerine ilk girdiğimde zorlandım ama kimse seni geride bırakmıyor; herkes kendi seviyesinde çalışıyor. Şimdi salı-perşembe dersleri haftamın sabit parçası.",
  },
  {
    name: "Emre S.",
    meta: "41 · Yönetici · 3 yıldır üye",
    text: "Sabah 06:30'da salona geliyorum, o saatte bile eğitmen sahada oluyor. Mert Hoca squat tekniğimi baştan kurdu; dizimdeki eski rahatsızlık bir daha gündeme gelmedi.",
  },
  {
    name: "Merve D.",
    meta: "23 · Üniversite öğrencisi · 6 aydır üye",
    text: "Spor salonu geçmişim yoktu, açıkçası ilk gün çekinerek geldim. Başlangıç ölçümünde her şey anlatıldı, kimse bakmadı ya da yargılamadı. Şimdi haftada dört gün geliyorum.",
  },
  {
    name: "Kerem Y.",
    meta: "37 · Girişimci · 1,5 yıldır üye",
    text: "Can Hoca'yla ayda iki PT seansı yapıyorum; ölçümlerim kayıt altında, gelişimi rakamlarla görüyorum. Abartı vaat yok, düzenli takip var. Benim için değeri bu.",
  },
];

export type ClassSession = {
  time: string;
  name: string;
  coach: string;
  duration: string;
  intensity: "Orta" | "Yüksek" | "Düşük";
};

export type DaySchedule = {
  day: string;
  short: string;
  sessions: ClassSession[];
};

export const weekSchedule: DaySchedule[] = [
  {
    day: "Pazartesi",
    short: "Pzt",
    sessions: [
      { time: "07:00", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "10:00", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
      { time: "12:15", name: "Core", coach: "Can Demir", duration: "30 dk", intensity: "Orta" },
      { time: "17:30", name: "Functional Strength", coach: "Mert Kaya", duration: "50 dk", intensity: "Orta" },
      { time: "18:30", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "19:30", name: "Conditioning", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "20:30", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
    ],
  },
  {
    day: "Salı",
    short: "Sal",
    sessions: [
      { time: "07:00", name: "Conditioning", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "10:00", name: "Functional Strength", coach: "Selin Arslan", duration: "50 dk", intensity: "Orta" },
      { time: "12:15", name: "HIIT Express", coach: "Can Demir", duration: "30 dk", intensity: "Yüksek" },
      { time: "17:30", name: "Core", coach: "Elif Yılmaz", duration: "30 dk", intensity: "Orta" },
      { time: "18:30", name: "Functional Strength", coach: "Mert Kaya", duration: "50 dk", intensity: "Orta" },
      { time: "19:30", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "20:30", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
    ],
  },
  {
    day: "Çarşamba",
    short: "Çar",
    sessions: [
      { time: "07:00", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "10:00", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
      { time: "12:15", name: "Core", coach: "Can Demir", duration: "30 dk", intensity: "Orta" },
      { time: "17:30", name: "Conditioning", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "18:30", name: "Functional Strength", coach: "Mert Kaya", duration: "50 dk", intensity: "Orta" },
      { time: "19:30", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "20:30", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
    ],
  },
  {
    day: "Perşembe",
    short: "Per",
    sessions: [
      { time: "07:00", name: "Functional Strength", coach: "Mert Kaya", duration: "50 dk", intensity: "Orta" },
      { time: "10:00", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
      { time: "12:15", name: "HIIT Express", coach: "Elif Yılmaz", duration: "30 dk", intensity: "Yüksek" },
      { time: "17:30", name: "Core", coach: "Can Demir", duration: "30 dk", intensity: "Orta" },
      { time: "18:30", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "19:30", name: "Conditioning", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "20:30", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
    ],
  },
  {
    day: "Cuma",
    short: "Cum",
    sessions: [
      { time: "07:00", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "10:00", name: "Functional Strength", coach: "Selin Arslan", duration: "50 dk", intensity: "Orta" },
      { time: "12:15", name: "Core", coach: "Can Demir", duration: "30 dk", intensity: "Orta" },
      { time: "17:30", name: "Conditioning", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "18:30", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "19:30", name: "Functional Strength", coach: "Mert Kaya", duration: "50 dk", intensity: "Orta" },
      { time: "20:30", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
    ],
  },
  {
    day: "Cumartesi",
    short: "Cmt",
    sessions: [
      { time: "09:00", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "10:30", name: "Functional Strength", coach: "Mert Kaya", duration: "50 dk", intensity: "Orta" },
      { time: "12:00", name: "Core", coach: "Can Demir", duration: "30 dk", intensity: "Orta" },
      { time: "13:00", name: "Conditioning", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "17:00", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
    ],
  },
  {
    day: "Pazar",
    short: "Paz",
    sessions: [
      { time: "10:00", name: "Mobility", coach: "Selin Arslan", duration: "45 dk", intensity: "Düşük" },
      { time: "11:30", name: "Functional Strength", coach: "Selin Arslan", duration: "50 dk", intensity: "Orta" },
      { time: "13:00", name: "HIIT", coach: "Elif Yılmaz", duration: "45 dk", intensity: "Yüksek" },
      { time: "17:00", name: "Core", coach: "Can Demir", duration: "30 dk", intensity: "Orta" },
    ],
  },
];

export const classTypes = [
  { name: "HIIT", desc: "Yüksek yoğunluklu interval antrenmanı; kısa sürede maksimum kondisyon." },
  { name: "Core", desc: "Karın, bel ve pelvis bölgesi için odaklı merkez bölge çalışması." },
  { name: "Mobility", desc: "Eklem açıklığı ve hareket kalitesi için kontrollü mobilite akışı." },
  { name: "Conditioning", desc: "Kalp-damar kapasitesini zorlayan tüm vücut kondisyon dersi." },
  { name: "Functional Strength", desc: "Günlük hayata taşan fonksiyonel kuvvet çalışması." },
];

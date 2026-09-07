"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

type TrialPayload = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  date: string;
  message: string;
};

const interests = ["Fitness", "Personal Training", "Fonksiyonel Antrenman", "Grup Dersleri"];

/**
 * Şu an gönderimi simüle eder. Gerçek entegrasyon için `submitTrial`
 * içindeki fetch bloğunu API rotasına/route handler'a bağlamak yeterli.
 */
async function submitTrial(payload: TrialPayload): Promise<void> {
  // TODO: POST /api/trial — örn. await fetch("/api/trial", { method: "POST", body: JSON.stringify(payload) })
  await new Promise((r) => setTimeout(r, 1200));
  void payload;
}

const initial: TrialPayload = { name: "", phone: "", email: "", interest: "", date: "", message: "" };

/** Tarayıcının yerel saatine göre YYYY-AA-GG. `toISOString()` UTC verdiği için
 *  TR'de gece yarısı civarı bir gün geriye kayardı. */
function todayLocal() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

const noopSubscribe = () => () => {};

export function TrialForm() {
  const [form, setForm] = useState<TrialPayload>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const successRef = useRef<HTMLDivElement>(null);
  /** Sayfa build anında prerender edildiği için "bugün" render sırasında
   *  hesaplanamaz — HTML'e build tarihi gömülürdü. Sunucuda undefined döner
   *  (min niteliği basılmaz), istemcide hidrasyondan sonra gerçek tarihe geçer. */
  const today = useSyncExternalStore(noopSubscribe, todayLocal, () => undefined);

  // Form yerini onay paneline bıraktığında odak oraya taşınır; aksi hâlde
  // ekran okuyucu kullanıcısı gönderimin başarılı olduğunu fark etmez.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const set = (key: keyof TrialPayload) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await submitTrial(form);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center border border-lime bg-charcoal p-10 text-center focus:outline-none"
      >
        <CheckCircle2 size={44} aria-hidden className="text-lime" />
        <h2 className="mt-5 font-display text-4xl tracking-wide text-ink">Başvurun alındı.</h2>
        <p className="mt-3 max-w-sm leading-relaxed text-steel">
          Ekibimiz deneme antrenmanını planlamak için kısa süre içinde seninle iletişime geçecek.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.14em] text-steel/80">
          Genellikle aynı gün dönüş yapıyoruz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-busy={status === "loading"} className="border border-line bg-charcoal p-7 md:p-9">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Ad Soyad" name="name" required placeholder="Adın Soyadın" value={form.name} onChange={set("name")} />
        <FormField label="Telefon" name="phone" type="tel" required placeholder="05__ ___ __ __" value={form.phone} onChange={set("phone")} />
        <FormField label="E-posta" name="email" type="email" required placeholder="ornek@eposta.com" value={form.email} onChange={set("email")} />
        <FormField label="İlgilendiğiniz Alan" name="interest" type="select" required placeholder="Alan seçiniz" options={interests} value={form.interest} onChange={set("interest")} />
        <FormField label="Tercih Edilen Tarih" name="date" type="date" required min={today} value={form.date} onChange={set("date")} />
        <div className="sm:col-span-2">
          <FormField label="Mesaj (opsiyonel)" name="message" type="textarea" placeholder="Hedefin ya da sormak istediğin bir şey varsa kısaca yazabilirsin." value={form.message} onChange={set("message")} />
        </div>
      </div>
      <Button type="submit" disabled={status === "loading"} className="mt-8 w-full">
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 size={16} aria-hidden className="animate-spin" /> Gönderiliyor…
          </span>
        ) : (
          "Ücretsiz Denemeyi Planla"
        )}
      </Button>
      <p className="mt-4 text-center text-xs leading-relaxed text-steel/80">
        Formu göndererek bilgilerinin deneme planlaması için işlenmesini kabul etmiş olursun.
        Detaylar <a href="/kvkk" className="underline underline-offset-2 hover:text-ink">KVKK metninde</a>.
      </p>
    </form>
  );
}

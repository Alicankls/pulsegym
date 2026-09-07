"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const subjects = ["Üyelik", "Ücretsiz Deneme", "Personal Training", "Grup Dersleri", "Diğer"];

async function submitContact(payload: ContactPayload): Promise<void> {
  // TODO: POST /api/contact — gerçek backend entegrasyonu buraya bağlanır.
  await new Promise((r) => setTimeout(r, 1200));
  void payload;
}

const initial: ContactPayload = { name: "", phone: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  // Form yerini onay paneline bıraktığında odak oraya taşınır; aksi hâlde
  // ekran okuyucu kullanıcısı gönderimin başarılı olduğunu fark etmez.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const set = (key: keyof ContactPayload) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await submitContact(form);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex min-h-[380px] flex-col items-center justify-center border border-lime bg-charcoal p-10 text-center focus:outline-none"
      >
        <CheckCircle2 size={44} aria-hidden className="text-lime" />
        <h2 className="mt-5 font-display text-4xl tracking-wide text-ink">Mesajın bize ulaştı.</h2>
        <p className="mt-3 max-w-sm leading-relaxed text-steel">
          En geç bir iş günü içinde sana dönüş yapacağız. Acil bir konuysa WhatsApp hattımız daha hızlıdır.
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
        <FormField label="Konu" name="subject" type="select" required placeholder="Konu seçiniz" options={subjects} value={form.subject} onChange={set("subject")} />
        <div className="sm:col-span-2">
          <FormField label="Mesaj" name="message" type="textarea" required placeholder="Sana nasıl yardımcı olabiliriz?" value={form.message} onChange={set("message")} />
        </div>
      </div>
      <Button type="submit" disabled={status === "loading"} className="mt-8 w-full">
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 size={16} aria-hidden className="animate-spin" /> Gönderiliyor…
          </span>
        ) : (
          "Mesajı Gönder"
        )}
      </Button>
    </form>
  );
}

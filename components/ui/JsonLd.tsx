/**
 * JSON-LD yapısal veriyi sayfaya gömer.
 *
 * `<` karakteri kaçırılır: içerik metninde geçen bir `</script>` dizisinin
 * script bloğunu erken kapatmasını engeller.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

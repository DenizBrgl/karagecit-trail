const ContactSection = () => {
  const contacts = [
    {
      icon: "📞",
      label: "Bizi Arayın",
      value: "+90 (530) 865 59 95",
      href: "tel:+905308655995",
    },
    {
      icon: "✉️",
      label: "E-Posta",
      value: "karagecittrail@gmail.com",
      href: "mailto:karagecittrail@gmail.com",
    },
    {
      icon: "📍",
      label: "Konum",
      value: "Karageçit / Tarsus, Mersin",
      href: null,
    },
    {
      icon: "👤",
      label: "Organizatör",
      value: "Deniz Birgül",
      href: null,
    },
  ];

  return (
    <section className="bg-[#1a237e] py-16 px-4 relative overflow-hidden">
      {/* Diagonal desen */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Sol — Logo + Açıklama */}
        <div className="flex flex-col items-start">
          <img
            src="/logo_bg.png"
            alt="Karageçit Trail Logo"
            className="h-24 mb-6"
          />
          <p className="text-blue-200 leading-relaxed max-w-md text-sm md:text-base">
            Karageçit Trail; doğayla iç içe, dayanıklılığı ve ruh gücünü ön
            plana çıkaran bir patika koşusu deneyimidir. Bizimle iletişime
            geçmekten çekinmeyin.
          </p>

          {/* Sosyal Medya */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/karagecit_trail"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#fbbf24] text-white hover:text-[#1a237e] font-bold text-xs px-4 py-2 rounded-full transition-all duration-200"
            >
              📸 Instagram
            </a>
            <a
              href="https://wa.me/905302505995"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold text-xs px-4 py-2 rounded-full transition-all duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Sağ — İletişim Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl px-4 py-4 flex items-start gap-3 transition-colors"
            >
              <div className="text-xl mt-0.5">{c.icon}</div>
              <div className="min-w-0">
                <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-widest mb-0.5">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-white text-sm font-semibold hover:text-[#fbbf24] transition-colors break-all"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-white text-sm font-semibold">{c.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Kayıt Ol Butonu */}
          <div className="sm:col-span-2 mt-1">
            <a
              href="https://apphurra.com/etkinlik/karagecit-trail"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#fbbf24] hover:bg-yellow-400 text-[#1a237e] font-extrabold text-sm px-6 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🏃 Hemen Kayıt Ol
            </a>
          </div>
        </div>
      </div>

      {/* Alt çizgi */}
      <div className="relative max-w-5xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
        <p>© 2026 Karageçit Trail. Tüm hakları saklıdır.</p>
        <p>Akdeniz Running Spor Kulübü</p>
      </div>
    </section>
  );
};

export default ContactSection;
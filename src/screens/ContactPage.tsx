const ContactPage = () => {
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
    {
      icon: "💬",
      label: "WhatsApp",
      value: "WhatsApp üzerinden ulaşın",
      href: "https://wa.me/905302505995",
      isWhatsapp: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">

      {/* Hero */}
      <div className="bg-[#1a237e] py-14 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <p className="relative text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-2">
          Karageçit Trail 2026
        </p>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">
          İLETİŞİM
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-8">

        {/* Sol — İletişim Bilgileri */}
        <div>
          <p className="text-[#fbbf24] uppercase tracking-[0.3em] text-xs font-bold mb-2">
            Bize Ulaşın
          </p>
          <h2 className="text-2xl font-extrabold text-[#1a237e] mb-6">
            Sormak istediğin bir şey mi var?
          </h2>

          <div className="space-y-3">
            {contacts.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow px-5 py-4 flex items-center gap-4"
              >
                <div className="bg-[#fbbf24]/15 rounded-xl w-11 h-11 flex items-center justify-center text-xl flex-shrink-0">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.isWhatsapp ? "_blank" : undefined}
                      rel={c.isWhatsapp ? "noopener noreferrer" : undefined}
                      className={`font-semibold text-sm hover:underline transition-colors ${
                        c.isWhatsapp
                          ? "text-green-600 hover:text-green-700"
                          : "text-[#1a237e] hover:text-[#fbbf24]"
                      }`}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm text-gray-700">{c.value}</p>
                  )}
                </div>
                {c.isWhatsapp && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">
                    WA
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Sosyal Medya */}
          <div className="mt-6 bg-[#1a237e] rounded-2xl px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-widest mb-1">
                Sosyal Medya
              </p>
              <p className="text-white text-sm font-semibold">
                @karagecit_trail
              </p>
            </div>
            <a
              href="https://www.instagram.com/karagecittrail"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbbf24] text-[#1a237e] font-extrabold text-sm px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors"
            >
              Instagram →
            </a>
          </div>
        </div>

        {/* Sağ — Harita */}
        <div>
          <p className="text-[#fbbf24] uppercase tracking-[0.3em] text-xs font-bold mb-2">
            Neredeyiz?
          </p>
          <h2 className="text-2xl font-extrabold text-[#1a237e] mb-6">
            Yarış Fuar Merkezi
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=Karage%C3%A7it%20Tarsus&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Karageçit Konum"
            />
          </div>
          <a
            href="https://maps.google.com/?q=Karageçit+Tarsus"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#1a237e] hover:bg-gray-50 transition-colors shadow-sm"
          >
            📍 Google Maps'te Aç →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
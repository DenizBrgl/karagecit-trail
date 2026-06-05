const accommodations = [
  {
    name: "Karageçit Camping",
    badge: "📍 Yarış Alanı",
    badgeColor: "bg-green-500 text-white",
    image: "/bora1.jpg",
    location: "Yarış Alanı — Karageçit",
    phone: "0536 425 92 83",
    email: null,
    contact: null,
    features: ["⛺ Kamp & piknik alanı", "🏁 Yarışın başlangıç noktasında", "💰 500₺ – 600₺"],
    note: "Sadece kamp yapılabilir. Kolay erişim için ideal.",
  },
  {
    name: "Namrun Dağ Otel by Esamet Hanım",
    badge: null,
    badgeColor: null,
    image: null,
    location: "Çayırekinliği, Otel Sk. No:8, 33580 Çamlıyayla/Mersin",
    phone: "0531 468 83 00",
    email: null,
    contact: null,
    features: [],
    note: "",
  },
  {
    name: "Cadde Park Hotel",
    badge: null,
    badgeColor: null,
    image: null,
    location: "Cami Şerif, 33060 Akdeniz/Mersin",
    phone: "(0324) 237 83 53",
    email: null,
    contact: null,
    features: [],
    note: "Katılımcılara özel fiyat uygulanmaktadır.",
  },
  {
    name: "Navona Otel",
    badge: null,
    badgeColor: null,
    image: null,
    location: "Mersin",
    phone: "0553 143 75 55 / 0324 238 23 23",
    email: "navona@navonaotel.com.tr",
    contact: "Taner Kara",
    features: [],
    note: "",
  },
  {
    name: "Forum Suit Hotel",
    badge: null,
    badgeColor: null,
    image: null,
    location: "Güvenevler Mh. 1915 Sk. No:3 Yenişehir/Mersin",
    phone: "+90 324 233 33 44",
    email: "info@forumotel.com",
    contact: null,
    features: [],
    note: "",
  },
];

const AccommodationsPage = () => {
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
          KONAKLAMA
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      {/* Ulaşım Bandı */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 flex items-center gap-3">
          <span className="text-2xl flex-shrink-0">🚌</span>
          <p className="text-[#1a237e] text-sm font-semibold">
            Yarış alanına <strong>Mersin Merkez</strong> ve <strong>Tarsus</strong>'tan ücretsiz ulaşım sağlanacaktır.
          </p>
        </div>
      </div>

      {/* Tüm Kartlar — Eşit Grid */}
      <div className="max-w-4xl mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {accommodations.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full"
          >
            {/* Görsel — varsa */}
            {item.image ? (
              <div className="relative h-40 overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                {item.badge && (
                  <span className={`absolute top-3 left-3 ${item.badgeColor} text-xs font-extrabold px-3 py-1 rounded-full shadow`}>
                    {item.badge}
                  </span>
                )}
              </div>
            ) : (
              <div className="bg-[#1a237e] px-5 py-4 flex-shrink-0">
                <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-widest mb-0.5">
                  🏨 Konaklama
                </p>
                <h3 className="text-white font-extrabold text-base leading-tight">
                  {item.name}
                </h3>
              </div>
            )}

            {/* İçerik */}
            <div className="px-5 py-4 flex flex-col flex-1">
              {item.image && (
                <h3 className="font-extrabold text-[#1a237e] text-base mb-3">
                  {item.name}
                </h3>
              )}

              <p className="text-xs text-gray-500 mb-3 flex items-start gap-1">
                <span className="flex-shrink-0">📍</span>
                {item.location}
              </p>

              {item.features.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.features.map((f, j) => (
                    <span key={j} className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2 py-1 rounded-lg">
                      {f}
                    </span>
                  ))}
                </div>
              )}

              {item.contact && (
                <p className="text-xs text-gray-500 mb-2">👤 {item.contact}</p>
              )}

              <div className="flex-1" />

              <div className="flex flex-col gap-1.5 mt-3">
                {item.phone && (
                  <a
                    href={`tel:${item.phone.replace(/[\s()]/g, "")}`}
                    className="flex items-center gap-2 text-xs text-[#1a237e] font-semibold hover:text-[#fbbf24] transition-colors"
                  >
                    📞 {item.phone}
                  </a>
                )}
                {item.email && (
                  <a
                    href={`mailto:${item.email}`}
                    className="flex items-center gap-2 text-xs text-[#1a237e] font-semibold hover:text-[#fbbf24] transition-colors break-all"
                  >
                    ✉️ {item.email}
                  </a>
                )}
              </div>

              {item.note && (
                <p className="mt-3 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-xl">
                  💡 {item.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationsPage;
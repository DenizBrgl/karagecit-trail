const accommodations = [
  {
    name: "Zevzek Tepesi Bungalov & Kamp",
    badge: "⭐ Ana Sponsor",
    badgeColor: "bg-[#fbbf24] text-[#1a237e]",
    image: "/zevzek.png",
    location: "Çamlı Yayla",
    distance: "Yarış alanına 15 km — Servis ile yarış alanına ulaşım sağlanır",
    distanceNote: "50K parkuru buradan başlar!",
    phone: "",
    email: "",
    features: [
      "🏠 Bungalov evler",
      "⛺ Kamp alanı",
      "🍳 Kahvaltı salonu",
      "🍽️ Restaurant & yeme-içme",
      "🫓 Pide fırını",
      "🌲 Doğa içinde huzurlu konum",
    ],
    note: "",
    highlight: true,
  },
  {
    name: "Karageçit Camping",
    badge: "📍 Yarış Alanı",
    badgeColor: "bg-green-500 text-white",
    image: "/bora1.jpg",
    location: "Yarış Alanı — Karageçit",
    distance: null,
    distanceNote: null,
    phone: "0536 425 92 83",
    email: null,
    features: [
      "⛺ Kamp & piknik alanı",
      "🏁 Yarışın başlangıç noktasında",
      "💰 500₺ – 600₺",
    ],
    note: "Sadece kamp yapılabilir. Kolay erişim için ideal.",
    highlight: false,
  },
  {
    name: "Cadde Park Hotel",
    badge: null,
    image: null,
    location: "Cami Şerif, 33060 Akdeniz/Mersin",
    distance: null,
    distanceNote: null,
    phone: "(0324) 237 83 53",
    email: null,
    features: [],
    note: "Katılımcılara özel fiyat uygulanmaktadır.",
    highlight: false,
  },
  {
    name: "Navona Otel",
    badge: null,
    image: null,
    location: "Mersin",
    distance: null,
    distanceNote: null,
    phone: "0553 143 75 55 / 0324 238 23 23",
    email: "navona@navonaotel.com.tr",
    contact: "Taner Kara",
    features: [],
    note: "",
    highlight: false,
  },
  {
    name: "Forum Suit Hotel",
    badge: null,
    image: null,
    location: "Güvenevler Mh. 1915 Sk. No:3 Yenişehir/Mersin",
    distance: null,
    distanceNote: null,
    phone: "+90 324 233 33 44",
    email: "info@forumotel.com",
    features: [],
    note: "",
    highlight: false,
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

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-6">

        {/* Büyük kartlar — Zevzek Tepesi & Karageçit Camping */}
        {accommodations
          .filter((a) => a.image)
          .map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-md border ${
                item.highlight
                  ? "border-[#fbbf24]"
                  : "border-green-200"
              }`}
            >
              {/* Görsel */}
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img
                  src={item.image!}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                {item.badge && (
                  <span
                    className={`absolute top-4 left-4 ${item.badgeColor} text-xs font-extrabold px-3 py-1 rounded-full shadow`}
                  >
                    {item.badge}
                  </span>
                )}
                <h2 className="absolute bottom-4 left-4 text-white text-2xl font-extrabold drop-shadow-lg">
                  {item.name}
                </h2>
              </div>

              {/* İçerik */}
              <div className="bg-white px-6 py-5">
                {/* Konum & Servis */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    📍 {item.location}
                  </span>
                  {item.distance && (
                    <span className="flex items-center gap-1 text-sm text-[#1a237e] font-semibold">
                      🚌 {item.distance}
                    </span>
                  )}
                </div>

                {item.distanceNote && (
                  <div className="bg-[#fbbf24]/20 border border-[#fbbf24] text-[#1a237e] text-sm font-bold px-4 py-2 rounded-xl mb-4 inline-block">
                    🏁 {item.distanceNote}
                  </div>
                )}

                {/* Özellikler */}
                {item.features.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                    {item.features.map((f, j) => (
                      <span
                        key={j}
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                {/* İletişim */}
                <div className="flex flex-wrap gap-4 mt-2">
                  {item.phone && (
                    <a
                      href={`tel:${item.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-sm text-[#1a237e] font-semibold hover:text-[#fbbf24] transition-colors"
                    >
                      📞 {item.phone}
                    </a>
                  )}
                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="flex items-center gap-2 text-sm text-[#1a237e] font-semibold hover:text-[#fbbf24] transition-colors"
                    >
                      ✉️ {item.email}
                    </a>
                  )}
                </div>

                {item.note && (
                  <p className="mt-3 text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-2 rounded-xl">
                    💡 {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}

        {/* Küçük kartlar — Oteller */}
        <div>
          <p className="text-[#1a237e] uppercase tracking-widest text-sm font-bold mb-4 mt-8">
            🏨 Yakın Oteller
          </p>
           <p className="mt-3 text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-2 rounded-xl">
                     🚌 Yarış alanına Mersin Merkez ve Tarsus'tan ulaşım sağlanacak.
                  </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {accommodations
              .filter((a) => !a.image)
              .map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border-l-4 border-[#fbbf24] px-5 py-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-extrabold text-[#1a237e] text-base mb-2">
                    {item.name}
                  </h3>
                  {item.location && (
                    <p className="text-xs text-gray-500 mb-2">📍 {item.location}</p>
                  )}
                  {(item as any).contact && (
                    <p className="text-xs text-gray-600 mb-1">
                      👤 {(item as any).contact}
                    </p>
                  )}
                  {item.phone && (
                    <a
                      href={`tel:${item.phone.replace(/\s/g, "")}`}
                      className="block text-xs text-[#1a237e] font-semibold hover:text-[#fbbf24] transition-colors mb-1"
                    >
                      📞 {item.phone}
                    </a>
                  )}
                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="block text-xs text-[#1a237e] font-semibold hover:text-[#fbbf24] transition-colors mb-1"
                    >
                      ✉️ {item.email}
                    </a>
                  )}
                  {item.note && (
                    <p className="text-xs text-green-600 mt-2 font-medium">
                      💡 {item.note}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationsPage;
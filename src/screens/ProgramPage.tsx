const ProgramPage = () => {
  const saturday = [
    {
      etkinlik: "Kit Dağıtımı Başlangıç",
      saat: "14:00",
      yer: "Belirlenecek",
      icon: "🎽",
    },
    {
      etkinlik: "Shake Out Run DJ Etkinliği & Canlı Müzik ",
      saat: "18:00 – 19:30",
      yer: "Belirlecek",
      icon: "🎶",
    },
    {
      etkinlik: "Kit Dağıtımı Bitiş",
      saat: "18:00",
      yer: "Belirlenecek",
      icon: "✅",
    },
  ];

  const sunday = [
    {
      etkinlik: "Forum AVM Durağı E5 Karayolu — Otobüs Kalkışı (30K & 50K)",
      saat: "04:00",
      yer: "Mersin",
      icon: "🚌",
      highlight: false,
    },
    {
      etkinlik: "Forum AVM Durağı E5 Karayolu — Otobüs Kalkışı (8K & 15K)",
      saat: "06:00",
      yer: "Mersin",
      icon: "🚌",
      highlight: false,
    },
    {
      etkinlik: "Tarsus Şehir Stadyumu Kalkış",
      saat: "05:30",
      yer: "Tarsus",
      icon: "🚌",
      highlight: false,
    },
    {
      etkinlik: "Geç Kit Dağıtımı (30K & 50K)",
      saat: "05:00 – 05:45",
      yer: "Karageçit",
      icon: "🎽",
      highlight: false,
    },
    {
      etkinlik: "Geç Kit Dağıtımı (8K & 15K)",
      saat: "07:00 – 08:15",
      yer: "Karageçit",
      icon: "🎽",
      highlight: false,
    },
    {
      etkinlik: "30K & 50K Yarış Startı",
      saat: "06:00",
      yer: "Başlangıç Noktası",
      icon: "🏁",
      highlight: true,
    },
    {
      etkinlik: "Zumba — Isınma & 8K/15K Start Hazırlığı",
      saat: "08:30 – 08:45",
      yer: "Yarış Alanı",
      icon: "💃",
      highlight: false,
    },
    {
      etkinlik: "8K & 15K Yarış Startı",
      saat: "09:00",
      yer: "Başlangıç Noktası",
      icon: "🏁",
      highlight: true,
    },
  
    {
      etkinlik: "Paddle Board Keyfi",
      saat: "13:00",
      yer: "Kadıncık Barajı",
      icon: "🏄",
      highlight: false,
    },
    {
      etkinlik: "Ödül Töreni",
      saat: "14:30",
      yer: "Sahne Alanı",
      icon: "🏆",
      highlight: true,
    },
    {
      etkinlik: "Servislerin Ayrılışı (30K & 50K)",
      saat: "16.00",
      yer: "Karageçit",
      icon: "🚌",
      highlight: false,
    },
    {
      etkinlik: "Servislerin Ayrılışı (8K & 15K)",
      saat: "16.00",
      yer: "Karageçit",
      icon: "🚌",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero Başlık */}
      <div className="bg-[#1a237e] py-14 px-4 text-center relative overflow-hidden">
        {/* arka plan desen */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <p className="relative text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-2">
          Karageçit Trail 2026
        </p>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">
          ETKİNLİK PROGRAMI
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-14 space-y-14">

        {/* CUMARTESİ */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#fbbf24] text-[#1a237e] font-extrabold text-lg px-5 py-2 rounded-full shadow">
              06 Haziran 2026
            </div>
            <span className="text-[#1a237e] font-bold text-lg uppercase tracking-widest">
              Cumartesi
            </span>
          </div>

          <div className="space-y-3">
            {saturday.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800">{item.etkinlik}</p>
                  <p className="text-sm text-gray-500 mt-0.5">📍 {item.yer}</p>
                </div>
                <div className="bg-[#fbbf24] text-[#1a237e] font-extrabold text-sm px-3 py-1.5 rounded-xl whitespace-nowrap">
                  {item.saat}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAZAR */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-[#1a237e] text-white font-extrabold text-lg px-5 py-2 rounded-full shadow">
              07 Haziran 2026
            </div>
            <span className="text-[#1a237e] font-bold text-lg uppercase tracking-widest">
              Pazar
            </span>
          </div>

          <p className="text-gray-500 italic text-sm mb-6 pl-1">
            🏕️ Yarış alanında Karageçit Camping alanı bulunmaktadır.
          </p>

          <div className="space-y-3">
            {sunday.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 rounded-2xl px-5 py-4 shadow-sm border transition-shadow hover:shadow-md ${
                  item.highlight
                    ? "bg-[#1a237e] border-[#1a237e] text-white"
                    : "bg-white border-gray-100 text-gray-800"
                }`}
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold ${item.highlight ? "text-white" : "text-gray-800"}`}>
                    {item.etkinlik}
                  </p>
                  <p className={`text-sm mt-0.5 ${item.highlight ? "text-blue-200" : "text-gray-500"}`}>
                    📍 {item.yer}
                  </p>
                </div>
                <div
                  className={`font-extrabold text-sm px-3 py-1.5 rounded-xl whitespace-nowrap ${
                    item.highlight
                      ? "bg-[#fbbf24] text-[#1a237e]"
                      : "bg-[#fbbf24] text-[#1a237e]"
                  }`}
                >
                  {item.saat}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProgramPage;
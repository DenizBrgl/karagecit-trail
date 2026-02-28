import { useState } from "react";

const categories = [
  {
    key: "8k",
    label: "8K",
    sublabel: "Discovery Run",
    icon: "🟡",
    color: "border-yellow-400",
    activeColor: "bg-[#fbbf24] text-[#1a237e]",
    src: "https://apphurra.com/etkinlikkatilimcilar/liste/1360/tr/0",
  },
  {
    key: "15k",
    label: "15K",
    sublabel: "Wild Canyon Run",
    icon: "🟠",
    color: "border-orange-400",
    activeColor: "bg-orange-400 text-white",
    src: "https://apphurra.com/etkinlikkatilimcilar/liste/1361/tr/0",
  },
  {
    key: "30k",
    label: "30K",
    sublabel: "Mountain Legend",
    icon: "🔵",
    color: "border-blue-500",
    activeColor: "bg-blue-500 text-white",
    src: "https://apphurra.com/etkinlikkatilimcilar/liste/1362/tr/0",
  },
  {
    key: "50k",
    label: "50K",
    sublabel: "Ultra Challenge",
    icon: "🔴",
    color: "border-red-500",
    activeColor: "bg-red-500 text-white",
    src: "https://apphurra.com/etkinlikkatilimcilar/liste/1363/tr/0",
  },
];

const RunList = () => {
  const [active, setActive] = useState("8k");

  const current = categories.find((c) => c.key === active)!;

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
          KATILIMCI LİSTESİ
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-10">

        {/* Kategori Seçici */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`rounded-2xl px-4 py-4 border-2 font-extrabold text-center transition-all duration-200 hover:scale-105 shadow-sm ${
                active === cat.key
                  ? `${cat.activeColor} ${cat.color} scale-105 shadow-md`
                  : "bg-white text-[#1a237e] border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-2xl mb-1">{cat.icon}</div>
              <div className="text-lg leading-none">{cat.label}</div>
              <div className={`text-xs mt-1 font-medium ${active === cat.key ? "opacity-80" : "text-gray-400"}`}>
                {cat.sublabel}
              </div>
            </button>
          ))}
        </div>

        {/* Aktif Başlık */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-1 h-8 rounded-full ${current.color.replace("border-", "bg-")}`} />
          <div>
            <h2 className="text-xl font-extrabold text-[#1a237e] leading-none">
              {current.label} – {current.sublabel}
            </h2>
            <p className="text-sm text-gray-400 mt-0.5">Katılımcı Listesi</p>
          </div>
        </div>

        {/* iframe */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <iframe
            key={active}
            src={current.src}
            width="100%"
            height="650"
            className="w-full"
            title={`${current.label} Katılımcılar`}
          />
        </div>

        {/* Alt Kayıt Butonu */}
        <div className="flex justify-center mt-10">
          <a
            href="https://apphurra.com/etkinlik/karagecit-trail"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fbbf24] hover:bg-yellow-500 text-[#1a237e] font-extrabold text-sm px-10 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
          >
            🏃 Hemen Kayıt Ol
          </a>
        </div>
      </div>
    </div>
  );
};

export default RunList;
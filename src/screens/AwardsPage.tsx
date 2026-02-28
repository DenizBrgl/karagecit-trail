import {
  FaMedal,
  FaTshirt,
  FaGift,
  FaTrophy,
  FaUserFriends,
} from "react-icons/fa";

const awards = [
  {
    icon: <FaTshirt className="text-3xl text-[#fbbf24]" />,
    title: "Katılım Tişörtü",
    desc: "Kaydını tamamlayan her katılımcıya hatıra tişört, yarış kiti çantası ve çeşitli hediyeler verilir.",
    bg: "from-yellow-50 to-white",
    border: "border-[#fbbf24]",
  },
  {
    icon: <FaMedal className="text-3xl text-[#1a237e]" />,
    title: "Madalya",
    desc: "Yarışı başarıyla tamamlayan her sporcumuza özel tasarım madalya verilir.",
    bg: "from-blue-50 to-white",
    border: "border-[#1a237e]",
  },
  {
    icon: <FaGift className="text-3xl text-pink-500" />,
    title: "Sponsor Ödülleri",
    desc: "Para ödülü yoktur ancak sponsorlar sahneye çıkanlara çeşitli hediyeler sunar.",
    bg: "from-pink-50 to-white",
    border: "border-pink-300",
  },
  {
    icon: <FaUserFriends className="text-3xl text-purple-500" />,
    title: "Kürsü Kuralları",
    desc: "Genel klasmanda kürsüye çıkanlar yaş kategorisinde tekrar kürsüye çıkamaz.",
    bg: "from-purple-50 to-white",
    border: "border-purple-300",
  },
  {
    icon: <FaTrophy className="text-3xl text-green-500" />,
    title: "Genel Klasman Kupaları",
    desc: "8K, 15K, 30K, 50K parkurlarında kadın ve erkek ilk 3'e kupa verilir.",
    bg: "from-green-50 to-white",
    border: "border-green-300",
  },
  {
    icon: <FaTrophy className="text-3xl text-blue-400" />,
    title: "Yaş Kategorileri",
    desc: "-29 / 30-39 / 40-49 / 50-59 / 60+ yaş gruplarında kürsü ödülleri mevcuttur.",
    bg: "from-sky-50 to-white",
    border: "border-sky-300",
  },
];

const podium = [
  { place: "2", label: "2. Sıra", color: "bg-gray-300 text-gray-700", h: "h-24", delay: "delay-100" },
  { place: "1", label: "1. Sıra", color: "bg-[#fbbf24] text-[#1a237e]", h: "h-32", delay: "delay-0" },
  { place: "3", label: "3. Sıra", color: "bg-orange-300 text-white", h: "h-16", delay: "delay-200" },
];

const AwardsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">

      {/* Hero */}
      <div
        className="w-full h-80 md:h-96 flex items-center justify-center text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/resim3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1a237e]/75" />
        {/* diagonal pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-3">
            Karageçit Trail 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Durma, Harekete Geç!
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Birlikte koşarak bu güzel doğanın tadını çıkarmaya ne dersin?
          </p>
        </div>
      </div>

      {/* Podyum Görseli */}
      <div className="max-w-sm mx-auto px-4 mt-14 mb-2">
        <p className="text-center text-[#1a237e] uppercase tracking-widest text-sm font-bold mb-6">
          Kürsü
        </p>
        <div className="flex items-end justify-center gap-3">
          {podium.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{p.place === "1" ? "🥇" : p.place === "2" ? "🥈" : "🥉"}</span>
              <div
                className={`${p.h} w-20 ${p.color} rounded-t-xl flex items-center justify-center font-extrabold text-lg shadow-md`}
              >
                {p.place}
              </div>
              <span className="text-xs text-gray-500 font-semibold">{p.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-3 italic">
          8K · 15K · 30K · 50K — Kadın & Erkek
        </p>
      </div>

      {/* Ödül Kartları */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="text-center mb-10">
          <p className="text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-1">
            Ne Kazanıyorsun?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e]">
            ÖDÜLLER
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#fbbf24] rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {awards.map((award, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${award.bg} border-l-4 ${award.border} rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="bg-white rounded-xl p-3 shadow-sm flex-shrink-0">
                {award.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-[#1a237e] text-base md:text-lg mb-1">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kayıt Butonu */}
      <div className="flex justify-center mt-14">
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
  );
};

export default AwardsPage;
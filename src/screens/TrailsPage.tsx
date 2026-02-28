import { Link } from "react-router-dom";

const trails = [
  {
    key: "kids",
    label: "Çocuk Koşusu(Fotoğraf Temsilidir)",
    distance: "400",
    elevation: "~20 m",
    difficulty: 1,
    difficultyLabel: "Çok Kolay",
    difficultyColor: "bg-green-400",
    terrain: "Düz zemin",
    time: "—",
    age: "6–14 Yaş",
    color: "border-yellow-400",
    headerBg: "bg-yellow-400",
    headerText: "text-[#1a237e]",
    icon: "🧒",
    image: "/bora2.jpg",
    to: "/TrailDetailKidsRun",
    tag: "Çocuklar için",
    tagColor: "bg-yellow-400 text-[#1a237e]",
  },
  {
    key: "8k",
    label: "Discovery Run",
    distance: "8K",
    elevation: "407 m",
    difficulty: 2,
    difficultyLabel: "Orta",
    difficultyColor: "bg-green-500",
    terrain: "%70 Patika",
    time: "2 Saat",
    age: "15+",
    color: "border-green-400",
    headerBg: "bg-green-500",
    headerText: "text-white",
    icon: "🟢",
    image: "/resim13.jpg",
    to: "/TrailDetail8K",
    tag: "8K",
    tagColor: "bg-green-500 text-white",
  },
  {
    key: "15k",
    label: "Wild Canyon Run",
    distance: "15K",
    elevation: "750 m",
    difficulty: 3,
    difficultyLabel: "Zor",
    difficultyColor: "bg-orange-400",
    terrain: "%60 Patika",
    time: "4 Saat",
    age: "18+",
    color: "border-orange-400",
    headerBg: "bg-orange-400",
    headerText: "text-white",
    icon: "🟠",
    image: "/bora3.jpg",
    to: "/TrailDetail15K",
    tag: "15K",
    tagColor: "bg-orange-400 text-white",
  },
  {
    key: "30k",
    label: "Mountain Legend",
    distance: "30K",
    elevation: "1435 m",
    difficulty: 4,
    difficultyLabel: "Çok Zor",
    difficultyColor: "bg-blue-500",
    terrain: "%80 Patika",
    time: "7 Saat",
    age: "18+",
    color: "border-blue-500",
    headerBg: "bg-blue-600",
    headerText: "text-white",
    icon: "🔵",
    image: "/bora4.jpg",
    to: "/TrailDetail30K",
    tag: "30K",
    tagColor: "bg-blue-600 text-white",
  },
  {
    key: "50k",
    label: "Ultra Challenge",
    distance: "50K",
    elevation: "1735 m",
    difficulty: 5,
    difficultyLabel: "Elit",
    difficultyColor: "bg-red-500",
    terrain: "%85 Patika",
    time: "10 Saat",
    age: "18+",
    color: "border-red-500",
    headerBg: "bg-red-600",
    headerText: "text-white",
    icon: "🔴",
    image: "/bora13.JPG",
    to: "/TrailDetail50K",
    tag: "50K",
    tagColor: "bg-red-600 text-white",
  },
];

const TrailsPage = () => {
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
          PARKURLAR
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
        <p className="relative text-blue-200 text-sm mt-4 max-w-xl mx-auto">
          Seviyene uygun parkuru seç, detayları incele ve yarışa hazırlan!
        </p>
      </div>

      {/* Parkur Kartları */}
      <div className="max-w-5xl mx-auto px-4 mt-12 space-y-6">
        {trails.map((trail) => (
          <Link
            key={trail.key}
            to={trail.to}
            className={`block bg-white rounded-2xl shadow-sm border-l-4 ${trail.color} hover:shadow-lg transition-all duration-300 overflow-hidden group`}
          >
            <div className="flex flex-col md:flex-row">

              {/* Görsel */}
              <div className="relative md:w-56 h-44 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={trail.image}
                  alt={trail.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className={`absolute top-3 left-3 text-xs font-extrabold px-3 py-1 rounded-full ${trail.tagColor}`}>
                  {trail.tag}
                </span>
              </div>

              {/* İçerik */}
              <div className="flex-1 px-6 py-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{trail.icon}</span>
                    <div>
                      <h2 className="font-extrabold text-[#1a237e] text-xl leading-none">
                        {trail.distance}
                      </h2>
                      <p className="text-gray-500 text-sm">{trail.label}</p>
                    </div>
                  </div>

                  {/* Zorluk göstergesi */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className={`w-5 h-2 rounded-full ${
                            n <= trail.difficulty ? trail.difficultyColor : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-500">
                      {trail.difficultyLabel}
                    </span>
                  </div>
                </div>

                {/* İstatistikler */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { icon: "📏", label: "Mesafe", value: trail.distance },
                    { icon: "⛰️", label: "Yükseklik", value: trail.elevation },
                    { icon: "⏱️", label: "Süre Limiti", value: trail.time },
                    { icon: "🎂", label: "Yaş", value: trail.age },
                  ].map((stat, j) => (
                    <div key={j} className="bg-gray-50 rounded-xl px-3 py-2 text-center">
                      <p className="text-xs text-gray-400 font-medium">{stat.icon} {stat.label}</p>
                      <p className="text-sm font-extrabold text-[#1a237e] mt-0.5">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ok */}
              <div className="hidden md:flex items-center pr-5">
                <div className="w-9 h-9 rounded-full bg-[#fbbf24] text-[#1a237e] flex items-center justify-center font-extrabold text-lg group-hover:scale-110 transition-transform">
                  →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Kayıt CTA */}
      <div className="flex justify-center mt-14">
        <a
          href="https://apphurra.com/etkinlik/karagecit-trail"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fbbf24] hover:bg-yellow-400 text-[#1a237e] font-extrabold text-sm px-10 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
        >
          🏃 Hemen Kayıt Ol
        </a>
      </div>
    </div>
  );
};

export default TrailsPage;
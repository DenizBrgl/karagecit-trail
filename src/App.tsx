import { Routes, Route, HashRouter, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import RaceTrail from "./screens/RaceTrail";
import TrailDetail8K from "./screens/TrailDetail8K";
import ContactPage from "./screens/ContactPage";
import AboutPage from "./screens/AboutPage";
import Results2024 from "./screens/Results2024";
import Results2025 from "./screens/Results2025";
import RunList from "./screens/RunList";
import RulesPage from "./screens/RulesPage";
import ProgramPage from "./screens/ProgramPage";
import AwardsPage from "./screens/AwardsPage";
import { useState, useEffect } from "react";
import SupportersPage from "./screens/SupportersPage";
import AccommodationsPage from "./screens/AccommodationsPage";
import Gallery from "./screens/Gallery";
import ContactSection from "./screens/ContactSection";
import Results from "./screens/Results";
import TrailDetail50K from "./screens/TrailDetail50K";
import TrailDetail30K from "./screens/TrailDetail30K";
import TrailDetail15K from "./screens/TrailDetail15K";
import GallerySection from "./screens/GallerySection";
import TrailDetailKidsRun from "./screens/TrailDetailKidsRun";
import TrailsPage from "./screens/TrailsPage";

const slides = [
  {
    img: "/bora3.jpg",
    title: "Sınırlarını Zorla",
    subtitle: "Her adımda özgürlük!",
    tag: "8K · 15K · 30K · 50K",
  },
  {
    img: "/bora6.jpg",
    title: "Doğanın Kalbinde",
    subtitle: "Muhteşem Bir Rota!",
    tag: "Karageçit / Tarsus",
  },
  {
    img: "/bora4.jpg",
    title: "Kendini Serin Sulara Bırak",
    subtitle: "Adım adım zirveye!",
    tag: "07 Haziran 2026",
  },
  {
    img: "/bora2.jpg",
    title: "Karageçit Seni Bekliyor",
    subtitle: "Patikaların ruhunu hisset!",
    tag: "Mersin · Türkiye",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  return (
    <>
      <main className="bg-white text-gray-900">
        {/* Hero Slider */}
        <div className="relative h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={`slide-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

          <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-32 pointer-events-none">
            <span className="bg-[#fbbf24]/90 text-[#1a237e] text-xs font-extrabold px-5 py-1.5 rounded-full uppercase tracking-widest shadow">
              07 Haziran 2026 · Karageçit Trail
            </span>
          </div>

          <div
            className={`absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-4 transition-opacity duration-500 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-xs md:text-sm tracking-[0.4em] mb-4 uppercase text-[#fbbf24] font-bold drop-shadow">
              {slides[current].tag}
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-lg leading-tight max-w-4xl">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-2xl mt-4 drop-shadow-md text-white/90 font-medium">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <a
                href="https://apphurra.com/etkinlik/karagecit-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fbbf24] hover:bg-yellow-400 text-[#1a237e] font-extrabold text-sm px-8 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
              >
                🏃 Hemen Kayıt Ol
              </a>
              <Link
                to="/TrailsPage"
                className="bg-white/15 hover:bg-white/25 backdrop-blur text-white font-bold text-sm px-8 py-3 rounded-full uppercase tracking-widest transition-all duration-300 border border-white/30"
              >
                Parkurları Keşfet →
              </Link>
            </div>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-[#fbbf24] w-2 h-8"
                    : "bg-white/40 hover:bg-white/70 w-2 h-2"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent py-6 px-6">
            <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-6">
                {["8K", "15K", "30K", "50K"].map((d) => (
                  <div key={d} className="text-center">
                    <p className="text-[#fbbf24] font-extrabold text-lg leading-none">{d}</p>
                    <p className="text-white/60 text-xs">Parkur</p>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-xs hidden md:block">
                Sınırlarını Aş · Doğayı Hisset
              </p>
            </div>
          </div>
        </div>
      </main>

      <Countdown />

      {/* Yarış Alanı Kartı */}
      <div className="bg-white px-4 pb-10">
        <a
          href="https://share.google/lVTWmBS4dHhxmaxqY"
          target="_blank"
          rel="noopener noreferrer"
          className="group max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 bg-[#1a237e] rounded-2xl px-6 py-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden"
        >
          {/* Diagonal desen */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* İkon */}
          <div className="relative bg-[#fbbf24] rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-3xl">📍</span>
          </div>

          {/* Bilgi */}
          <div className="relative flex-1 text-center sm:text-left">
            <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-widest mb-0.5">
              Yarış Alanı
            </p>
            <h3 className="text-white font-extrabold text-lg leading-tight">
              Karageçit Camping
            </h3>
            <p className="text-blue-200 text-sm mt-0.5">
              Karageçit / Tarsus, Mersin — 07 Haziran 2026
            </p>
          </div>

          {/* Haritaya git butonu */}
          <div className="relative bg-white/10 group-hover:bg-[#fbbf24] text-white group-hover:text-[#1a237e] font-extrabold text-xs px-5 py-2.5 rounded-full uppercase tracking-widest transition-all duration-300 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            🗺️ Haritada Gör
          </div>
        </a>
      </div>

      <RaceTrail />
      <GallerySection />
      <SupportersPage />
      <ContactSection />
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TrailsPage" element={<TrailsPage />} />
        <Route path="/TrailDetailKidsRun" element={<TrailDetailKidsRun />} />
        <Route path="/TrailDetail8K" element={<TrailDetail8K />} />
        <Route path="/TrailDetail15K" element={<TrailDetail15K />} />
        <Route path="/TrailDetail30K" element={<TrailDetail30K />} />
        <Route path="/TrailDetail50K" element={<TrailDetail50K />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Results2024" element={<Results2024 />} />
        <Route path="/Results2025" element={<Results2025 />} />
        <Route path="/RunList" element={<RunList />} />
        <Route path="/RulesPage" element={<RulesPage />} />
        <Route path="/ProgramPage" element={<ProgramPage />} />
        <Route path="/AwardsPage" element={<AwardsPage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/AccommodationsPage" element={<AccommodationsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
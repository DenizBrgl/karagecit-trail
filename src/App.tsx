import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import RaceTrail from "./screens/RaceTrail";
import TrailDetail8K from "./screens/TrailDetail8K";
import TrailDetail17K from "./screens/TrailDetail17K";
import TrailDetail33K from "./screens/TrailDetail33K";
import ContactPage from "./screens/ContactPage";
import AboutPage from "./screens/AboutPage";
import Results2024 from "./screens/Results2024";
import Results2025 from "./screens/Results2025";
import RunList from "./screens/RunList";
import RulesPage from "./screens/RulesPage";
import ProgramPage from "./screens/ProgramPage";
import AwardsPage from "./screens/AwardsPage";
import React, { useState, useEffect } from "react";
import SupportersPage from "./screens/SupportersPage";
import AccommodationsPage from "./screens/AccommodationsPage";

const slides = [
  {
    img: "/resim.jpg",
    title: "Doğanın Kalbinde",
    subtitle: "Muhteşem Bir Rota!",
  },

  {
    img: "/resim2.jpg",
    title: "Koşuya Hazır mısın?",
    subtitle: "Adım adım zirveye!",
  },
  {
    img: "/resim8.JPG",
    title: "Sınırlarını Zorla",
    subtitle: "Her adımda özgürlük!",
  },
  {
    img: "/resim3.jpg",
    title: "Karageçit Seni Bekliyor",
    subtitle: "Patikaların ruhunu hisset!",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-white text-gray-900 pt-0">
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

          {/* Yazı Katmanı */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40 transition-opacity duration-1000 z-20">
            <p className="text-sm md:text-base tracking-widest mb-2 uppercase drop-shadow-lg">
              Sınırlarını Aş, Doğayı Hisset!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-xl md:text-2xl mt-4 drop-shadow-md">
              {slides[current].subtitle}
            </p>
          </div>

          {/* Nokta Navigasyonu */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-white" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </main>
      <Countdown />
      <RaceTrail />
      <SupportersPage />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TrailDetail8K" element={<TrailDetail8K />} />
        <Route path="/TrailDetail17K" element={<TrailDetail17K />} />
        <Route path="/TrailDetail33K" element={<TrailDetail33K />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Results2024" element={<Results2024 />} />
        <Route path="/Results2025" element={<Results2025 />} />
        <Route path="/RunList" element={<RunList />} />
        <Route path="/RulesPage" element={<RulesPage />} />
        <Route path="/ProgramPage" element={<ProgramPage />} />
        <Route path="/AwardsPage" element={<AwardsPage />} />
        <Route path="/AccommodationsPage" element={<AccommodationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

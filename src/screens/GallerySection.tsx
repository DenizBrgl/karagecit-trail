import { useNavigate } from "react-router-dom";
import { useState } from "react";

const images = [
  { src: "/bora17.jpg", alt: "Karageçit Trail 1" },
  { src: "/bora11.jpg", alt: "Karageçit Trail 2" },
  { src: "/bora12.jpg", alt: "Karageçit Trail 3" },
  { src: "/bora13.JPG", alt: "Karageçit Trail 4" },
  { src: "/bora14.jpg", alt: "Karageçit Trail 5" },
  { src: "/bora15.jpg", alt: "Karageçit Trail 6" },
  { src: "/bora10.jpg", alt: "Karageçit Trail 7" },
  { src: "/bora8.jpg", alt: "Karageçit Trail 8" },
];

const GallerySection = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Ana sayfada sadece ilk 8 görseli göster
  const previewImages = images.slice(0, 8);

  return (
    <section className="bg-gray-950 py-16 px-4">
      {/* Başlık */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold mb-2">
          Fotoğraflar
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Galeri
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 bg-orange-500 rounded-full" />
      </div>

      {/* 4'lü Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
        {previewImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => navigate("/Gallery")}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredIndex === index ? "scale-110" : "scale-100"
              }`}
            />
            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-white text-3xl">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tümünü Gör Butonu */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/Gallery")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-10 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Tüm Fotoğrafları Gör
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
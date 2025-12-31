import { Link } from "react-router-dom";

type ResultYearCard = {
  year: number;
  image: string;
  to: string;
};

const cards: ResultYearCard[] = [
  {
    year: 2026,
    image: "bora1.jpg",
    to: "#", // henüz yoksa
  },
  {
    year: 2025,
    image: "bora2.jpg",
    to: "/Results2025",
  },
  {
    year: 2024,
    image: "resim13.jpg",
    to: "/2024sonuc.pdf",
    
  },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl text-center md:text-5xl font-semibold text-red-600 mb-10">
            Sonuçlar
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {cards.map((c) =>
  c.year === 2024 ? (
    <a
      key={c.year}
      href="/2024sonuc.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-md shadow-sm"
    >
      <img
  src={c.image}
  alt={`${c.year} Sonuçları`}
  className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
  loading="lazy"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 transition-colors duration-300" />

<div className="absolute inset-0 flex items-center justify-center">
  <div className="flex items-center gap-3 bg-red-600/90 backdrop-blur text-white font-bold px-8 py-3 rounded-md shadow-lg group-hover:scale-105 transition-transform">
    <span className="text-2xl tracking-wide">{c.year}</span>
  </div>
</div>

    </a>
  ) : (
    <Link
      key={c.year}
      to={c.to}
      className="group relative overflow-hidden rounded-md shadow-sm"
    >
<img
  src={c.image}
  alt={`${c.year} Sonuçları`}
  className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
  loading="lazy"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 transition-colors duration-300" />

<div className="absolute inset-0 flex items-center justify-center">
  <div className="flex items-center gap-3 bg-red-600/90 backdrop-blur text-white font-bold px-8 py-3 rounded-md shadow-lg group-hover:scale-105 transition-transform">
    <span className="text-2xl tracking-wide">{c.year}</span>
  </div>
</div>

    </Link>
  )
)}

          </div>

          <p className="mt-12 text-gray-500">
            Yıla tıklayarak o yıla ait yarış sonuçlarını inceleyebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;

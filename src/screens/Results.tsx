import { Link } from "react-router-dom";

type ResultYearCard = {
  year: number;
  image: string;
  to: string;
  desc: string;
  isExternal: boolean;
  isPdf: boolean;
};

const cards: ResultYearCard[] = [
  {
    year: 2026,
    image: "bora1.jpg",
    to: "#",
    desc: "Sonuçlar yakında açıklanacak",
    isExternal: false,
    isPdf: false,
  },
  {
    year: 2025,
    image: "bora2.jpg",
    to: "/Results2025",
    desc: "Yarış sonuçlarını görüntüle",
    isExternal: false,
    isPdf: false,
  },
  {
    year: 2024,
    image: "resim13.jpg",
    to: "/2024sonuc.pdf",
    desc: "PDF olarak görüntüle",
    isExternal: true,
    isPdf: true,
  },
];

const Results = () => {
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
          Karageçit Trail
        </p>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">
          SONUÇLAR
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
        <p className="relative text-blue-200 text-sm mt-4">
          Yıla tıklayarak o yıla ait yarış sonuçlarını inceleyebilirsiniz.
        </p>
      </div>

      {/* Kartlar */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => {
            const isComingSoon = c.to === "#";

            const content = (
              <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                {/* Görsel */}
                <img
                  src={c.image}
                  alt={`${c.year} Sonuçları`}
                  className="w-full h-64 md:h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Rozetler */}
                {isComingSoon && (
                  <div className="absolute top-4 right-4 bg-gray-800/80 text-gray-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Yakında
                  </div>
                )}
                {c.isPdf && (
                  <div className="absolute top-4 right-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    📄 PDF
                  </div>
                )}

                {/* Yıl & açıklama */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-widest mb-1">
                        Karageçit Trail
                      </p>
                      <h2 className="text-white text-4xl font-extrabold leading-none">
                        {c.year}
                      </h2>
                    </div>
                    {!isComingSoon && (
                      <div className="bg-[#fbbf24] text-[#1a237e] rounded-full w-10 h-10 flex items-center justify-center font-extrabold text-lg shadow-md group-hover:scale-110 transition-transform">
                        →
                      </div>
                    )}
                  </div>
                  {!isComingSoon && (
                    <p className="text-blue-200 text-xs mt-2">{c.desc}</p>
                  )}
                </div>
              </div>
            );

            if (isComingSoon) {
              return <div key={c.year}>{content}</div>;
            }

            return c.isExternal ? (
              <a
                key={c.year}
                href={c.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link key={c.year} to={c.to}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
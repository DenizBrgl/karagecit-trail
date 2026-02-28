const sponsors = [
  {
    name: "Tarsus Belediyesi",
    image: "/tarsus.svg",
    url: "https://www.tarsus.bel.tr",
  },
  {
    name: "Heardline",
    image: "/heardline1.png",
    url: "#",
  },
  {
    name: "Mersin Üniversitesi",
    image: "/meu.png",
    url: "https://www.mersin.edu.tr/",
  },
  {
    name: "Erkan Design",
    image: "/erkan.png",
    url: "#",
  },
  {
    name: "Green River",
    image: "/greenriver.png",
    url: "#",
  },
  {
    name: "Reparo Yoga",
    image: "/Reparo-Yoga.jpg",
    url: "https://reparoyoga.com",
  },
  {
    name: "Cezy Yenilebilir Enerji",
    image: "/cezy.png",
    url: "#",
  },
  {
    name: "Türkiye Atletizm Federasyonu",
    image: "/atl.png",
    url: "#",
  },
];

const SupportersPage = () => {
  return (
    <section className="bg-white py-16 px-4">
      {/* Başlık */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-[#fbbf24] uppercase tracking-[0.35em] text-xs font-bold mb-2">
          Birlikte Daha Güçlüyüz
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e]">
          DESTEKÇİLERİMİZ
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      {/* Sponsor Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sponsors.map((sponsor, i) => (
          <a
            key={i}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            title={sponsor.name}
            className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center hover:border-[#fbbf24] hover:shadow-md hover:bg-white transition-all duration-300"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-24 h-24 object-contain transition-all duration-300"
            />
            <p className="mt-3 text-xs font-semibold text-gray-400 group-hover:text-[#1a237e] text-center transition-colors duration-300">
              {sponsor.name}
            </p>
          </a>
        ))}
      </div>

      {/* Sponsor Ol CTA */}
      <div className="max-w-5xl mx-auto mt-12 bg-[#1a237e] rounded-2xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative text-center md:text-left">
          <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-widest mb-1">
            Destekçi Ol
          </p>
          <h3 className="text-white text-xl font-extrabold">
            Siz de aramıza katılın!
          </h3>
          <p className="text-blue-200 text-sm mt-1">
            Karageçit Trail'e sponsor olmak için bizimle iletişime geçin.
          </p>
        </div>
        <a
          href="mailto:karagecittrail@gmail.com"
          className="relative bg-[#fbbf24] hover:bg-yellow-400 text-[#1a237e] font-extrabold text-sm px-8 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
        >
          ✉️ İletişime Geç
        </a>
      </div>
    </section>
  );
};

export default SupportersPage;
import { Link } from "react-router-dom";

type GalleryYearCard = {
  year: number;
  image: string; // public klasöründen: "/gallery/2024.jpg" gibi
  to: string; // örn: "/gallery/2024"
};

const cards: GalleryYearCard[] = [
  {
    year: 2026,
    image: "bora1.jpg",
    to: "#",
  },
  {
    year: 2025,
    image: "bora2.jpg",
    to: "https://drive.google.com/drive/folders/1xKm03qS4rADKACwo5nwiOFOcvZGfTrFU?sort=13&direction=a&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnaY2PlZ1XUbfG8KF5k3xMPsU1El400P_49AqsBTiLfGywc0t-3AlbudbyaU0_aem_RAnYldOoETldG5rRQF0z7A",
  },
  {
    year: 2024,
    image: "resim13.jpg",
    to: "https://drive.google.com/drive/u/0/folders/1OrX6cpnh71edkZ54KkIWE339PIBieXAu",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* üst boşluk: navbar sabit olduğu için */}
      <div className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-red-600 mb-10">
            Fotoğraflar
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cards.map((c) => (
              <Link
                key={c.year}
                to={c.to}
                className="group relative overflow-hidden rounded-md shadow-sm"
              >
                {/* Görsel */}
                <img
                  src={c.image}
                  alt={`${c.year} Fotoğraflar`}
                  className="w-full h-[260px] md:h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hafif koyu katman (okunurluk için) */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors" />

                {/* Yıl butonu (görseldeki gibi altta ortada) */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-3 bg-red-600 text-white font-bold px-7 py-2 rounded-md shadow-md">
                    <span className="text-xl tracking-wide">{c.year}</span>
                    <span className="text-2xl leading-none">›</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* İstersen altta kısa açıklama */}
          <p className="mt-12 text-gray-500">
            Yıla tıklayarak o yıla ait fotoğraf albümüne ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

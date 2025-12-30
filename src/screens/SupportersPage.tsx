const sponsors = [
  {
    name: "Tarsus  Belediyesi",
    image: "/tarsus.svg",
    url: "https://www.decathlon.com.tr",
  },
  {
    name: "Heardline",
    image: "/heardline1.png",
    url: "https://www.heardline.com",
  },
  {
    name: "Mersin Üniversitesi",
    image: "/meu.png",
    url: "https://www.mersin.edu.tr/",
  },
  {
    name: "Erkan Design",
    image: "/erkan.jpg",
    url: "https://www.redbull.com",
  },
  {
    name: "Midyeci Selman",
    image: "/midyeci.png",
    url: "https://www.redbull.com",
  },
  {
    name: "Reparo Yoga",
    image: "/Reparo-Yoga.jpg",
    url: "https://www.macfit.com.tr",
  },
  {
    name: "Triton Yazılım Teknolojileri San. ve Tic. Ltd Şti",
    image: "/tr.png",
    url: "https://www.redbull.com",
  },
  {
    name: "Cezy Yenilebilir Enerji",
    image: "/cezy.png",
    url: "https://www.decathlon.com.tr",
  },
  {
    name: "Tnc Fitness House",
    image: "/tnc.jpg",
    url: "https://www.garmin.com",
  },
  {
    name: "Türkiye Atletizm Federasyonu",
    image: "/atl.png",
    url: "https://www.macfit.com.tr",
  },
  {
    name: "Sarıgül Mühendislik",
    image: "/image.png",
    url: "https://www.sarigulmuhendislik.com/",
  },
  {
    name: "Makro Sağlıklı Yaşam Merkezi",
    image: "/makro.png",
    url: "https://www.makrosaglik.com/",
  },
  {
    name: "Asf Logistics",
    image: "/asf.png",
    url: "https://www.heardline.com/",
  },

  {
    name: "Gümsan Global Gümrük Müşavirliği",
    image: "/gumsan.png",
    url: "https://www.gumsan.com/",
  },
];

const SupportersPage = () => {
  return (
    <div className="min-h-screen pt-8 bg-gray-100 px-4 md:px-20 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1a237e]">
        DESTEKÇİLERİMİZ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1a237e]">
              {sponsor.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SupportersPage;

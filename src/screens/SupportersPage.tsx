import React from "react";

const sponsors = [
  {
    name: "Ford",
    image: "/ford.png",
    url: "https://www.redbull.com",
  },
  {
    name: "Tarsus  Belediyesi",
    image: "/tarsus.svg",
    url: "https://www.decathlon.com.tr",
  },
  {
    name: "Mersin BüyükŞehir Belediyesi",
    image: "/mersin.png",
    url: "https://www.garmin.com",
  },
  {
    name: "Mersin Üniversitesi",
    image: "/meu.png",
    url: "https://www.macfit.com.tr",
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
    name: "Sapan Gold",
    image: "/Sapan-GOLD.png",
    url: "https://www.decathlon.com.tr",
  },
  {
    name: "Akdeniz Belediyesi",
    image: "/akdeniz.png",
    url: "https://www.garmin.com",
  },
  {
    name: "Türkiye Atletizm Federasyonu",
    image: "/atl.png",
    url: "https://www.macfit.com.tr",
  },
];

const SupportersPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 px-4 md:px-20 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a237e]">
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

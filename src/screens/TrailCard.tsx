import React from "react";

const TrailCard = ({
  title,
  distance,
  elevation,
  backgroundImg,
  itraImg,
  utmbImg,
  extraImg, // 👈 yeni logo için prop
}) => {
  return (
    <div className="relative w-full sm:w-[280px] h-[440px] rounded-xl overflow-hidden shadow-xl">
      {/* Arka plan resmi */}
      <img
        src={backgroundImg}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hafif karartma */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Üst bilgi */}
      <div className="absolute top-3 left-3 bg-[#fbbf24] text-black font-bold px-3 py-1 rounded z-10">
        {distance} | {elevation}
      </div>

      {/* Orta başlık */}
      <div className="absolute bottom-24 left-0 right-0 text-center text-white font-extrabold text-2xl drop-shadow-md z-10">
        {title}
      </div>

      {/* Alt rozetler */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 items-center z-10">
        <img src={utmbImg} alt="UTMB" className="w-16 h-auto" />
        <img src={itraImg} alt="ITRA" className="w-20 h-auto" />
        {extraImg && <img src={extraImg} alt="Extra" className="w-12 h-auto" />}
      </div>
    </div>
  );
};

export default TrailCard;

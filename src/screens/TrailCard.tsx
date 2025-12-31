type TrailCardProps = {
  title: string;
  distance: string;
  elevation: string;
  backgroundImg: string;
  itraImg: string;
  utmbImg: string;
  extraImg?: string;
  detailPath: string; // 👈 yeni
};

import { useNavigate } from "react-router-dom";

const TrailCard = ({
  title,
  distance,
  elevation,
  backgroundImg,
  itraImg,
  utmbImg,
  extraImg,
  detailPath,
}: TrailCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full sm:w-[280px] h-[440px] rounded-xl overflow-hidden shadow-xl">
      {/* Arkaplan */}
      <img
        src={backgroundImg}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Daha güçlü karartma */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Mesafe bilgisi */}
      <div className="absolute top-3 left-3 bg-[#fbbf24] text-black font-bold px-3 py-1 rounded z-10">
        {distance} | {elevation}
      </div>

      {/* Başlık */}
<div className="absolute bottom-40 left-0 right-0 text-center text-white font-bold text-base leading-tight drop-shadow-md z-10 px-3">
        {title}
      </div>

      {/* Logolar */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 items-center z-10">
        <img src={utmbImg} alt="UTMB" className="w-16 h-auto" />
        <img src={itraImg} alt="ITRA" className="w-20 h-auto" />
        {extraImg && <img src={extraImg} alt="Extra" className="w-12 h-auto" />}
      </div>

      {/* Detaylar butonu */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center z-10">
  <button
    onClick={() => navigate(detailPath)}
    className="px-4 py-1.5 text-sm rounded-md bg-[#e14512] hover:bg-[#c93c0f] transition font-semibold text-white"
  >
    Detaylar
  </button>
</div>

    </div>
  );
};

export default TrailCard;

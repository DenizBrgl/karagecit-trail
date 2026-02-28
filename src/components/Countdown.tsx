import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2026-06-07T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    { label: "Gün", value: timeLeft.days },
    { label: "Saat", value: timeLeft.hours },
    { label: "Dakika", value: timeLeft.minutes },
    { label: "Saniye", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full bg-white py-12 px-4">
      {/* Üst başlık */}
      <div className="text-center mb-8">
        <p className="text-[#fbbf24] uppercase tracking-[0.35em] text-xs font-bold mb-1">
          Yarışa Ne Kadar Kaldı?
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a237e]">
          07 Haziran 2026
        </h2>
        <div className="mt-2 mx-auto w-12 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      {/* Sayaç kutuları */}
      <div className="flex flex-wrap gap-4 justify-center">
        {timeBoxes.map((box, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              {/* Arka gölge katmanı */}
              <div className="absolute inset-0 bg-[#1a237e] rounded-2xl translate-y-1.5 translate-x-1.5 opacity-20" />
              {/* Ana kutu */}
              <div className="relative w-full h-full bg-[#1a237e] rounded-2xl flex flex-col items-center justify-center shadow-lg border-b-4 border-[#fbbf24]">
                <span className="text-2xl sm:text-4xl font-extrabold text-white tabular-nums leading-none">
                  {box.value.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
            <span className="mt-2 text-xs font-bold text-[#1a237e] uppercase tracking-widest">
              {box.label}
            </span>

            {/* İki kutu arası iki nokta */}
            {i < timeBoxes.length - 1 && (
              <div className="hidden sm:flex flex-col gap-2 absolute mt-0" />
            )}
          </div>
        ))}
      </div>

      {/* İki nokta ayracı — masaüstü */}
      <div className="hidden sm:flex justify-center gap-0 mt-0 pointer-events-none select-none absolute">
      </div>

      {/* Alt bilgi */}
      <p className="text-center text-gray-400 text-xs mt-6 font-medium">
        🏁 Karageçit / Tarsus, Mersin
      </p>
    </div>
  );
};

export default Countdown;
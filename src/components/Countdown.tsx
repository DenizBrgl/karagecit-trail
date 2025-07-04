import { useEffect, useState } from "react";
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-08-31T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    { label: "Gün", value: timeLeft.days || 0 },
    { label: "Saat", value: timeLeft.hours || 0 },
    { label: "Dakika", value: timeLeft.minutes || 0 },
    { label: "Saniye", value: timeLeft.seconds || 0 },
  ];

  return (
    <div className="w-full flex justify-center bg-white py-10 px-4">
      <div className="flex flex-wrap gap-6 justify-center">
        {timeBoxes.map((box, index) => (
          <div
            key={index}
            className="w-20 h-20 sm:w-28 sm:h-28 bg-[#fbbf24] rounded-xl shadow-xl flex flex-col justify-center items-center"
          >
            <span className="text-2xl sm:text-4xl font-extrabold text-white">
              {box.value.toString().padStart(2, "0")}
            </span>
            <span className="text-xs sm:text-sm text-white mt-1">
              {box.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

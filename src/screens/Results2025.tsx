import { useEffect } from "react";

const Results2025 = () => {
  useEffect(() => {
    window.location.href =
      "https://passtiming.org/g-live/g-live.html?f=../results/gecici_canli_sonuclar/karagecit_2025.clax";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-lg text-gray-700">Sonuçlara yönlendiriliyorsunuz...</p>
    </div>
  );
};

export default Results2025;

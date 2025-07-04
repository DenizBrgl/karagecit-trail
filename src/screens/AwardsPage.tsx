import {
  FaMedal,
  FaTshirt,
  FaGift,
  FaTrophy,
  FaUserFriends,
} from "react-icons/fa";

const AwardsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="w-full h-96 flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/resim3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-500 to-yellow-400 opacity-80"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Durma Harekete Geç
          </h1>
          <p className="text-lg md:text-xl">
            Birlikte koşarak bu güzel doğanın tadını çıkarmaya ne dersin?
          </p>
        </div>
      </div>

      {/* Ödüller */}
      <div className="w-full max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e] mb-12">
          ÖDÜLLER
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4">
            <FaTshirt className="text-4xl text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Katılım Tişörtü</h3>
              <p>Kaydını tamamlayan her katılımcıya hatıra tişört verilir.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4">
            <FaMedal className="text-4xl text-yellow-500 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Madalya</h3>
              <p>Yarışı başarıyla tamamlayan her sporcumuza madalya verilir.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4">
            <FaGift className="text-4xl text-pink-500 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Sponsor Ödülleri</h3>
              <p>
                Para ödülü yoktur ancak sponsorlar sahneye çıkanlara çeşitli
                hediyeler sunar.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4">
            <FaUserFriends className="text-4xl text-purple-600 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Kürsü Kuralları</h3>
              <p>
                Genel klasmanda kürsüye çıkanlar yaş kategorisinde tekrar
                kürsüye çıkamaz.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4">
            <FaTrophy className="text-4xl text-green-600 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Genel Klasman Kupaları</h3>
              <p>
                8K, 17K, 33K parkurlarında kadın ve erkek ilk 3'e kupa verilir.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4">
            <FaTrophy className="text-4xl text-blue-500 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Yaş Kategorileri</h3>
              <p>40-, 40-50, 50+ yaş gruplarında kürsü ödülleri mevcuttur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;

const AboutPage = () => {
  return (
    <div className="pt-24 bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 flex items-center justify-center text-white"
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

      {/* Biz Kimiz Section */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-6 relative inline-block">
          <span className="border-l-4 border-[#fbbf24] pl-4">Biz Kimiz</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Enerjimizi ismimizin getirdiği yerden, Akdeniz’den alarak koşan ve
          kendine meydan okumayı seven bir grup gönüllüyüz. Sahilde veya doğada
          buluşarak, sosyal etkileşimin gücüyle koşuyoruz. Koşmamızın nedeni ise
          kendimize ruhsal ve fiziksel anlamda iyi bakmak istememizdir. Birlikte
          olduğumuzda, beraberliğin gücünün farkındayız ve uzun yollarda bu
          bilinçle ilerliyoruz. Günlük hayatın stresiyle başa çıkarken, adım
          adım ilerlemek bize huzur veriyor. Koşmayı öğrenmek istiyorsanız, tek
          yapmanız gereken bir adım atmak. Sen yeter ki koşmayı iste, biz
          buradayız.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

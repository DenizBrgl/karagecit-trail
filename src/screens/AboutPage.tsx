const stats = [
  { value: "2026", label: "Etkinlik Yılı", icon: "📅" },
  { value: "4", label: "Farklı Parkur", icon: "🗺️" },
  { value: "50K", label: "En Uzun Mesafe", icon: "🏔️" },
  { value: "❤️", label: "Gönüllü Ekip", icon: "🤝" },
];

const values = [
  {
    icon: "🌿",
    title: "Doğa",
    desc: "Akdeniz'in eşsiz coğrafyasında, doğayla iç içe bir deneyim sunuyoruz.",
  },
  {
    icon: "🤝",
    title: "Beraberlik",
    desc: "Koşmak bireysel bir eylem olsa da, birlikte ilerlemenin gücüne inanıyoruz.",
  },
  {
    icon: "💪",
    title: "Meydan Okuma",
    desc: "Kendine sınır koymayan, her adımda yeniden doğan bir ruh taşıyoruz.",
  },
  {
    icon: "🧘",
    title: "Huzur",
    desc: "Günlük hayatın stresinden arınmak için en iyi ilaç: adım adım ilerlemek.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">

      {/* Hero */}
      <div
        className="relative w-full h-80 md:h-96 flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/resim3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1a237e]/75" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-3">
            Karageçit Trail 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Durma, Harekete Geç!
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Birlikte koşarak bu güzel doğanın tadını çıkarmaya ne dersin?
          </p>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="bg-[#1a237e] py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="text-2xl font-extrabold text-[#fbbf24]">{s.value}</div>
              <div className="text-xs text-blue-200 uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Biz Kimiz */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="text-center mb-10">
          <p className="text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-1">
            Hakkımızda
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e]">
            Biz Kimiz?
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#fbbf24] rounded-full" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 text-center">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Enerjimizi ismimizin getirdiği yerden, <strong>Akdeniz'den</strong> alarak koşan ve
            kendine meydan okumayı seven bir grup gönüllüyüz. Sahilde veya doğada
            buluşarak, sosyal etkileşimin gücüyle koşuyoruz. Koşmamızın nedeni ise
            kendimize ruhsal ve fiziksel anlamda iyi bakmak istememizdir.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Birlikte olduğumuzda, beraberliğin gücünün farkındayız ve uzun yollarda bu
            bilinçle ilerliyoruz. Günlük hayatın stresiyle başa çıkarken, adım
            adım ilerlemek bize huzur veriyor. Bunu istiyorsanız, tek yapmanız
            gereken bir adım atmak. <strong>Sen yeter ki koşmayı iste, biz buradayız.</strong>
          </p>
          <div className="inline-flex items-center gap-3 bg-[#1a237e] text-white px-6 py-3 rounded-full">
            <span className="text-[#fbbf24] font-extrabold text-lg">🏃</span>
            <span className="font-extrabold tracking-wide text-sm uppercase">
              Akdeniz Running Spor Kulübü
            </span>
          </div>
        </div>
      </div>

      {/* Değerlerimiz */}
      <div className="max-w-4xl mx-auto px-4 mt-14">
        <div className="text-center mb-8">
          <p className="text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-1">
            Neye İnanıyoruz?
          </p>
          <h2 className="text-3xl font-extrabold text-[#1a237e]">
            Değerlerimiz
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-[#fbbf24] rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="bg-[#fbbf24]/10 rounded-xl p-3 text-2xl flex-shrink-0">
                {v.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-[#1a237e] text-base mb-1">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-14">
        <a
          href="https://apphurra.com/etkinlik/karagecit-trail"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fbbf24] hover:bg-yellow-500 text-[#1a237e] font-extrabold text-sm px-10 py-3 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
        >
          🏃 Hemen Kayıt Ol
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
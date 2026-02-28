const rules = [
  {
    number: "01",
    icon: "🏁",
    title: "Yarışma Kuralları",
    content:
      "Yarışma başlangıç saatleri organizasyon tarafından ilan edilir. Katılımcılar başlangıç saatinden en az 30 dakika önce yarış alanında hazır olmalıdır.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Kayıt ve Katılım",
    content:
      "Kayıt işlemleri sadece Apphura web sitesi üzerinden yapılabilir. Kayıt ücretinin ödenmesi ve gerekli bilgilerin eksiksiz doldurulması zorunludur.",
  },
  {
    number: "03",
    icon: "🎂",
    title: "Yaş Sınırı",
    isList: true,
    items: [
      {
        label: "8K – Discovery Run:",
        text: "18 yaş altı katılımcılar kabul edilir ancak yarıştan önce velileri tarafından imzalanmış feragatname sunulması zorunludur.",
      },
      {
        label: "15K / 30K / 50K:",
        text: "18 yaş altı katılım kesinlikle kabul edilmez.",
        warning: true,
      },
    ],
  },
  {
    number: "04",
    icon: "🎒",
    title: "Zorunlu Ekipmanlar",
    content:
      "Katılımcıların organizasyon tarafından belirlenen zorunlu ekipmanları eksiksiz taşıması gerekmektedir. Ekipman kontrolü yarış öncesi ya da sırasında yapılabilir.",
  },
  {
    number: "05",
    icon: "🚫",
    title: "Diskalifiye Sebepleri",
    content:
      "Kestirme yapmak, doğaya çöp atmak, diğer katılımcılara zarar vermek veya zorunlu ekipmanı taşımamak diskalifiye nedenidir.",
  },
  {
    number: "06",
    icon: "🏥",
    title: "Sağlık ve Güvenlik",
    content:
      "Katılımcılar yarışa katılım için fiziksel olarak uygun olduklarını beyan eder. Sağlık görevlilerinin uyarılarına uymak zorunludur.",
  },
  {
    number: "07",
    icon: "🤝",
    title: "Etik Kurallar",
    content:
      "Tüm katılımcılar birbirine, gönüllülere ve doğaya karşı saygılı davranmakla yükümlüdür. Fair-play anlayışı esastır.",
  },
  {
    number: "08",
    icon: "✍️",
    title: "İtirazlar",
    content:
      "Yarışla ilgili her türlü itiraz, yarış bitimini takiben en geç 30 dakika içinde yapılmalıdır. İtirazlar yazılı ve imzalı olmalıdır.",
  },
  {
    number: "09",
    icon: "✉️",
    title: "İletişim",
    content: null,
    isContact: true,
    email: "karagecittrail@gmail.com",
  },
];

const RulesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero */}
      <div className="bg-[#1a237e] py-14 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <p className="relative text-[#fbbf24] uppercase tracking-[0.35em] text-sm font-bold mb-2">
          Karageçit Trail 2026
        </p>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">
          GENEL KURALLAR
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      {/* Kurallar */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-4">
        {rules.map((rule, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex items-start gap-4 px-6 py-5">
              {/* Numara + İkon */}
              <div className="flex flex-col items-center gap-1 min-w-[48px]">
                <span className="text-2xl">{rule.icon}</span>
                <span className="text-xs font-extrabold text-[#fbbf24] tracking-widest">
                  {rule.number}
                </span>
              </div>

              {/* Dikey çizgi */}
              <div className="w-px bg-[#fbbf24] self-stretch mx-1 rounded-full" />

              {/* İçerik */}
              <div className="flex-1">
                <h2 className="text-base md:text-lg font-extrabold text-[#1a237e] mb-2">
                  {rule.title}
                </h2>

                {/* Normal metin */}
                {rule.content && (
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {rule.content}
                  </p>
                )}

                {/* Liste */}
                {rule.isList && rule.items && (
                  <ul className="space-y-2 mt-1">
                    {rule.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span
                          className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                            item.warning ? "bg-red-500" : "bg-[#fbbf24]"
                          }`}
                        />
                        <p
                          className={`text-sm md:text-base leading-relaxed ${
                            item.warning ? "text-red-600 font-semibold" : "text-gray-600"
                          }`}
                        >
                          <strong>{item.label}</strong> {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {/* İletişim */}
                {rule.isContact && (
                  <p className="text-gray-600 text-sm md:text-base">
                    Tüm soru ve talepler için:{" "}
                    <a
                      href={`mailto:${rule.email}`}
                      className="text-[#1a237e] font-bold underline hover:text-[#fbbf24] transition-colors"
                    >
                      {rule.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alt Kayıt Butonu */}
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

export default RulesPage;
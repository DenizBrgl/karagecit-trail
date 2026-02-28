const TrailDetailKidsRun = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/bora1.jpg"
          alt="Kids Run"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <span className="text-4xl mb-2">🧒</span>
          <p className="uppercase tracking-widest text-sm text-yellow-400 font-semibold mb-1">
            Karageçit Trail
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Kids Run
          </h1>
          <p className="text-lg md:text-xl mt-2 text-yellow-300 font-semibold">
            Çocuklar için mini macera!
          </p>
        </div>
      </div>

      {/* Bilgi Kartları */}
      <div className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "📏", label: "Mesafe", value: "400 m" },
          { icon: "🎂", label: "Yaş Grubu", value: "6 – 14 Yaş" },
          { icon: "⛰️", label: "Yükseklik Farkı", value: "~20 m" },
          { icon: "🏅", label: "Katılım", value: "Herkese Açık" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-yellow-400 rounded-2xl p-5 flex flex-col items-center text-center shadow-md"
          >
            <span className="text-3xl mb-2">{item.icon}</span>
            <p className="text-xs uppercase tracking-widest text-gray-700 font-semibold">
              {item.label}
            </p>
            <p className="text-xl font-extrabold text-gray-900 mt-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Açıklama */}
      <div className="max-w-3xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Parkur Hakkında
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Kids Run, 6-14 yaş arası çocuklar için özel olarak tasarlanmış eğlenceli ve
          güvenli bir doğa koşusudur. Yaklaşık <strong>400 metre </strong> uzunluğundaki
          bu parkur, çocukların doğayla buluşmasını ve sporu sevmesini hedefler.
          Düz ve hafif eğimli zeminden oluşan rota, her yaş ve fiziksel seviyedeki
          çocuğun rahatlıkla tamamlayabileceği şekilde planlanmıştır.
          Yiyecek ve içecek ikramlarımız olacaktır.
        </p>
        <p className="text-gray-700 leading-relaxed text-base mt-4">
          Tüm katılımcılar finişte özel <strong>Kids Run madalyası</strong> ve
          sürpriz hediyeler alacak. Ebeveynler güzergah boyunca çocuklarına eşlik
          edebilir. Etkinlik, yarışmadan çok katılım ve eğlence odaklıdır — her
          çocuk kazanandır!
        </p>
      </div>

      {/* Kurallar */}
      <div className="max-w-3xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Katılım Koşulları
        </h2>
        <ul className="space-y-3">
          {[
            "6-14 yaş arası tüm çocuklar katılabilir.",
            "Ebeveyn veya vasi izni zorunludur.",
            "Spor ayakkabısı ve rahat kıyafet önerilir.",
            "Kayıt işlemi ebeveyn tarafından yapılmalıdır.",
            "Tüm katılımcılara finişte madalya verilecektir.",
            "Ebeveynler parkur boyunca eşlik edebilir.",
          ].map((rule, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 font-bold text-lg mt-0.5">✓</span>
              <span className="text-gray-700">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Güzergah Detayı */}
      <div className="max-w-3xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Güzergah
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-yellow-600" />
              <div className="w-0.5 h-12 bg-gray-300" />
              <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-orange-700" />
            </div>
            <div className="flex flex-col justify-between h-16">
              <div>
                <p className="font-bold text-gray-800 text-sm">Başlangıç</p>
                <p className="text-gray-500 text-xs">Merkez Alan – Etkinlik Sahası</p>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Bitiş</p>
                <p className="text-gray-500 text-xs">Merkez Alan – Finiş Bandı</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Rota düz zemin üzerinde, etkinlik alanı çevresinde tasarlanmıştır.
            Tüm güzergah boyunca görevliler ve yönlendirme levhaları bulunacaktır.
          </p>
        </div>
      </div>

      {/* Kayıt Butonu */}
      <div className="flex justify-center mt-12">
        <a
          href="https://apphurra.com/etkinlik/karagecit-trail"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold text-lg px-12 py-4 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
        >
          🧒 Hemen Kayıt Ol
        </a>
      </div>
    </div>
  );
};

export default TrailDetailKidsRun;
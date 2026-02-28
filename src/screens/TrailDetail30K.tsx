const TrailDetail30K = () => {
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
        <h1 className="relative text-3xl md:text-5xl font-extrabold text-white">
          30K MOUNTAIN LEGEND TRAIL
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      {/* Bilgi Kartları */}
      <div className="max-w-4xl mx-auto px-4 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "📏", label: "Mesafe", value: "30 km" },
          { icon: "⛰️", label: "Yükseklik", value: "1435 m" },
          { icon: "🛤️", label: "Zemin", value: "%60 Patika" },
          { icon: "⏱️", label: "Süre Limiti", value: "6.5 Saat" },
        ].map((item, i) => (
          <div key={i} className="bg-[#fbbf24] rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
            <span className="text-3xl mb-1">{item.icon}</span>
            <p className="text-xs uppercase tracking-widest text-[#1a237e]/70 font-semibold">{item.label}</p>
            <p className="text-xl font-extrabold text-[#1a237e] mt-0.5">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-10 space-y-8">

        {/* Harita */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1a237e] px-5 py-3 flex items-center gap-2">
            <span className="text-[#fbbf24] text-lg">🗺️</span>
            <h2 className="text-white font-extrabold text-sm uppercase tracking-widest">Parkur Haritası</h2>
          </div>
          <div className="p-4">
            <iframe
              src="https://tracedetrail.fr/en/iframe/8305"
              title="30K Route"
              width="100%"
              height="500"
              allowFullScreen
              className="rounded-xl w-full"
            />
            <div className="flex gap-3 mt-4">
              {[
                { label: "KML", href: "/files/30K.kml" },
                { label: "GPX", href: "/files/30K.gpx" },
                { label: "KMZ", href: "/files/30K.kmz" },
              ].map((f) => (
                <button
  onClick={async () => {
    const res = await fetch(f.href);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = f.href.split('/').pop() || f.label;
    a.click();
    URL.revokeObjectURL(url);
  }}
  className="flex-1 text-center bg-[#1a237e] hover:bg-[#0f1757] text-white font-extrabold text-sm py-2.5 rounded-xl transition-colors cursor-pointer"
>
  ⬇️ {f.label}
</button>
              ))}
            </div>
          </div>
        </div>

        {/* Bölümler */}
        {[
          {
            icon: "🏃",
            title: "Parkur Bilgisi",
            content: (
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Yaklaşık uzunluğu <strong>30 km</strong> ve <strong>1150 m yükseklik kazanımı</strong> olan 30K Mountain Legend Trail parkuru %60 patika, %40 single track'ten oluşmaktadır. Yarış genelinin iniş ve çıkış patikaları ve 1450 metrenin üzerinde geçmesinden dolayı hissedilen zorluk seviyesi <strong>yüksek</strong> olacaktır.</p>
                <p>07 Haziran Pazar sabahı saat <strong>06:00</strong>'da baraj köprüsünden start alacak, ilk CP noktasından bir tırmanışla devam edecektir.</p>
              </div>
            ),
          },
          {
            icon: "📍",
            title: "Parkur ve CP Noktası",
            content: (
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>30K Mountain Legend Trail Parkuru, doğanın eşsiz güzellikleri eşliğinde zorlu ve heyecan dolu bir macera sunuyor. Yarış, <strong>200 metrelik</strong> bir patika tırmanışıyla başlıyor ve ardından barajın serin sularına doğru devam eden etkileyici bir rota sunuyor.</p>
                <p>Bin yıllık ormanların içinden geçerken, iniş ve çıkışlarla dolu bu parkur hem fiziksel hem de zihinsel sınırlarınızı zorlayacak. Doğayla iç içe, serin ve gölgeli yollarda unutulmaz bir deneyim sizi bekliyor!</p>
                <p>Parkurun tamamlanması için toplam süre <strong>6.5 saattir</strong>. Parkurda <strong>4 adet CP noktası</strong> bulunmaktadır.</p>
              </div>
            ),
          },
          {
            icon: "🎒",
            title: "Zorunlu Ekipmanlar",
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Koşu ayakkabısı",
                  "Göğüs numarası (görünür şekilde)",
                  "Kimlik",
                  "Cep telefonu",
                  "Acil durum battaniyesi",
                  "Yağmurluk veya rüzgarlık",
                  "Baf ya da şapka",
                  "Düdük",
                  "En az 1 L kapasiteli su kabı",
                  "Bardak",
                  "Sırt çantası veya bel çantası",
                  "Yiyecek",
                  "Zamanlama çipi",
                  "Sağlık raporu veya sporcu lisansı (son 6 ay)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#fbbf24] font-extrabold mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            ),
          },
          {
            icon: "🏥",
            title: "Güvenlik ve Sağlık",
            content: (
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Organizasyon, olumsuz hava koşulları durumunda katılımcıların güvenliğini riske atmamak adına etkinlikte durdurma, kısaltma veya iptal gibi değişiklikler yapma hakkına sahiptir.</p>
                <p>Koşu boyunca belirlenen kilit noktalarda sağlık personeli ve/veya ambulans hazır bulunacaktır.</p>
              </div>
            ),
          },
          {
            icon: "🏆",
            title: "Ödüller",
            content: (
              <div className="space-y-3 text-sm text-gray-600">
                <p>Koşuyu başarıyla bitiren katılımcılara <strong>bitirme madalyası</strong> verilecektir. Aşağıdaki kategorilerde plaket ödülleri verilecektir:</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {["Erkek Genel Klasman", "Kadın Genel Klasman", "Yaş: -29", "Yaş: 30-39", "Yaş: 40-49", "Yaş: 50-59, 60+"].map((cat, i) => (
                    <div key={i} className="bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded-xl px-3 py-2 text-xs font-semibold text-[#1a237e]">
                      🥇 {cat}
                    </div>
                  ))}
                </div>
                <p className="mt-2">Ödül töreni <strong>07 Haziran 2026 Pazar</strong> saat <strong>13:30</strong>'da Karageçit festival alanında yapılacaktır.</p>
              </div>
            ),
          },
          {
            icon: "📸",
            title: "Görsel Materyallerin Kullanımı",
            content: (
              <p className="text-sm text-gray-600 leading-relaxed">
                Etkinliğe kayıt yaptıran katılımcılar, etkinlik süresince çekilen fotoğraf ve videolarının organizasyon tarafından tanıtım amaçlı kullanılmasına onay vermiş sayılır.
              </p>
            ),
          },
          {
            icon: "📝",
            title: "Feragatname",
            content: (
              <p className="text-sm text-gray-600 leading-relaxed">
                30K Mountain Legend Trail koşusuna kayıt olan katılımcılar, koşu kurallarını ve yapılabilecek değişiklikleri kabul etmiş sayılır. Organizasyon, katılımcıların neden olduğu ya da maruz kaldıkları zararlardan sorumlu tutulamaz.
              </p>
            ),
          },
        ].map((section, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <span className="text-xl">{section.icon}</span>
              <h2 className="font-extrabold text-[#1a237e] text-base uppercase tracking-wide">
                {section.title}
              </h2>
            </div>
            <div className="px-5 py-4">{section.content}</div>
          </div>
        ))}

        {/* Kayıt Butonu */}
        <div className="flex justify-center pt-4">
          <a
            href="https://apphurra.com/etkinlik/karagecit-trail"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fbbf24] hover:bg-yellow-400 text-[#1a237e] font-extrabold text-sm px-12 py-4 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
          >
            🏃 Hemen Kayıt Ol
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrailDetail30K;
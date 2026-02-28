const TrailDetail8K = () => {
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
          8K KADINCIK DISCOVERY RUN
        </h1>
        <div className="relative mt-4 mx-auto w-20 h-1 bg-[#fbbf24] rounded-full" />
      </div>

      {/* Bilgi Kartları */}
      <div className="max-w-4xl mx-auto px-4 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "📏", label: "Mesafe", value: "8 km" },
          { icon: "⛰️", label: "Yükseklik", value: "407 m" },
          { icon: "🛤️", label: "Zemin", value: "%70 Patika" },
          { icon: "⏱️", label: "Süre Limiti", value: "2 Saat" },
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
              src="https://tracedetrail.fr/en/iframe/6866"
              title="8K Route"
              width="100%"
              height="500"
              allowFullScreen
              className="rounded-xl w-full"
            />
            <div className="flex gap-3 mt-4">
              {[
                { label: "KML", href: "/files/8K.kml" },
                { label: "GPX", href: "/files/8K.gpx" },
                { label: "KMZ", href: "/files/8K.kmz" },
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
                <p>Yaklaşık uzunluğu <strong>8 km</strong> ve <strong>407 yükseklik kazanımı</strong> olan Kadıncık Discovery Run parkuru %70 patika, %20 single track ve %10 asfalt yoldan oluşmaktadır. Mesafe olarak kısa ancak yarış genelinin 400 metrenin üzerinde geçmesinden dolayı hissedilen zorluk seviyesi orta olacaktır.</p>
                <p>07 Haziran Pazar sabahı saat <strong>09:00</strong>'da baraj köprüsünden start alacak, ilk CP noktasından geri dönüş olacak şekilde aynı yerde finish yapacaktır.</p>
              </div>
            ),
          },
          {
            icon: "📍",
            title: "Parkur ve CP Noktası",
            content: (
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>Yarış yaklaşık <strong>800m</strong> bir patika yokuşu ile başlar ve barajın serin sularına doğru devam eder. Parkurun tamamlanması için yarışmacılara tanınacak olan toplam süre <strong>2 saattir</strong>. Parkurda <strong>1 adet CP noktası</strong> bulunmaktadır.</p>
                <p>Ara noktalarda bulunacak yiyecek ve içecekler sadece katılımcıların kullanımı içindir. Çöpler yine buralarda bulunacak çöp bidonlarına atılmalıdır.</p>
              </div>
            ),
          },
          {
            icon: "🎒",
            title: "Zorunlu Ekipmanlar",
            content: (
              <ul className="space-y-2">
                {[
                  "Yarış boyunca görünür şekilde takılı olması gereken göğüs numarası",
                  "Organizasyon tarafından sağlanacak zamanlama çipi",
                  "Kayıt sırasında belirtilen ekipmanların gösterilmesi zorunludur",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#fbbf24] font-extrabold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            icon: "🌟",
            title: "Önerilen Ekipmanlar",
            content: (
              <ul className="space-y-2">
                {[
                  "Minimum 500 ml sıvı kapasitesine sahip su şişesi, matara veya su torbası (Pet şişe kabul edilmemektedir)",
                  "Güneş kremi, güneş gözlüğü",
                  "Yarışa uygun koşu ayakkabısı",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-400 font-extrabold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
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
                8K Kadıncık Discovery Run koşusuna kayıt olan katılımcılar, koşu kurallarını ve yapılabilecek değişiklikleri kabul etmiş sayılır. Organizasyon, katılımcıların neden olduğu ya da maruz kaldıkları zararlardan sorumlu tutulamaz.
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

export default TrailDetail8K;
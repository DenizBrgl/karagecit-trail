const TrailDetail50K = () => {
  return (
    <div className="pt-24 px-4 mt-10 md:px-20 py-10 text-gray-800 bg-white flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a237e] text-center">
        50K ULTRA CHALLENGE TRAIL
      </h1>

      <div className="w-full max-w-4xl text-center mb-6">
        <iframe
          src="https://tracedetrail.fr/en/iframe/8232" // 50K iframe
          title="50K Route"
          width="100%"
          height="600"
          allowFullScreen
          className="border"
        ></iframe>
      </div>

      <div className="flex justify-between gap-4 mb-4">
        <a
          href="/files/50K.kml"
          download
          className="bg-[#fbbf24] px-4 py-2 rounded text-white font-semibold text-center"
        >
          KML
        </a>
        <a
          href="/files/50K.gpx"
          download
          className="bg-[#fbbf24] px-4 py-2 rounded text-white font-semibold text-center"
        >
          GPX
        </a>
        <a
          href="/files/50K.kmz"
          download
          className="bg-[#fbbf24] px-4 py-2 rounded text-white font-semibold text-center"
        >
          KMZ
        </a>
      </div>

      <div className="w-full max-w-4xl text-left">
        <h2 className="text-xl font-bold mt-8 mb-2 text-[#1a237e]">
          PARKUR BİLGİSİ
        </h2>
        <p className="mb-4">
          Yaklaşık uzunluğu 50 km ve yüksek irtifa kazanımı bulunan 50K ULTRA
          CHALLENGE TRAIL parkuru, ileri seviye dayanıklılık gerektiren zorlu
          bir rotadır. Parkurun büyük bölümü patika ve teknik single
          tracklerden oluşmaktadır.
        </p>

        <p className="mb-4">
          Yarış 07 Haziran Pazar sabahı saat 06.00’da baraj köprüsünden start
          alacak ve uzun tırmanışlar ile teknik inişleri içeren bir parkur
          sunacaktır.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2 text-[#1a237e]">
          PARKUR VE CP NOKTALARI
        </h2>
        <p className="mb-4">
          50K parkuru, orman yolları, dağ sırtları ve vadiler boyunca ilerleyen
          epik bir deneyim sunar. Uzun mesafe boyunca sporcuların fiziksel ve
          zihinsel dayanıklılığı maksimum seviyede test edilecektir.
        </p>

        <p className="mb-4">
          Parkurun tamamlanması için tanınan süre 10 saattir. Parkur boyunca
          6 adet CP noktası bulunmaktadır. Ara noktalardaki ikramlar yalnızca
          yarışmacılar içindir.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2 text-[#1a237e]">
          GEREKLİ EKİPMANLAR
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Trail koşu ayakkabısı</li>
          <li>Göğüs numarası</li>
          <li>Kimlik</li>
          <li>Cep telefonu</li>
          <li>Acil durum battaniyesi</li>
          <li>Yağmurluk veya rüzgarlık</li>
          <li>Düdük</li>
          <li>En az 1.5 L su taşıma kapasitesi</li>
          <li>Sırt çantası</li>
          <li>Yiyecek</li>
          <li>Zamanlama çipi</li>
          <li>Sağlık raporu veya geçerli sporcu lisansı</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-2 text-[#1a237e]">
          GÜVENLİK VE SAĞLIK
        </h2>
        <p className="mb-4">
          Organizasyon, hava koşullarına bağlı olarak parkurda değişiklik
          yapma hakkını saklı tutar. Sağlık ekipleri parkur boyunca hazır
          bulunacaktır.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2 text-[#1a237e]">
          ÖDÜLLER
        </h2>
        <p className="mb-4">
          Parkuru tamamlayan tüm sporculara bitirme madalyası verilecektir.
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Erkek Genel Klasman</li>
          <li>Kadın Genel Klasman</li>
          <li>Yaş Kategorileri</li>
        </ul>

        <p className="mb-4">
          Ödül töreni 07 Haziran 2026 Pazar günü saat 15.00’te Karageçit
          festival alanında yapılacaktır.
        </p>
      </div>
    </div>
  );
};

export default TrailDetail50K;

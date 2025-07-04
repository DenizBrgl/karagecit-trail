import React from "react";

const RulesPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 px-4 md:px-20 py-12 text-gray-800">
      <h1 className="text-3xl mt-10 md:text-4xl font-bold text-center text-[#1a237e] mb-10">
        Genel Kurallar
      </h1>

      <div className="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            1. Yarışma Kuralları
          </h2>
          <p>
            Yarışma başlangıç saatleri organizasyon tarafından ilan edilir.
            Katılımcılar başlangıç saatinden en az 30 dakika önce yarış alanında
            hazır olmalıdır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            2. Kayıt ve Katılım
          </h2>
          <p>
            Kayıt işlemleri sadece Apphura web sitesi üzerinden yapılabilir.
            Kayıt ücretinin ödenmesi ve gerekli bilgilerin eksiksiz doldurulması
            zorunludur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            3. Yaş Sınırı
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>8K – Discovery Run:</strong> 18 yaş altı katılımcılar
              kabul edilir ancak yarıştan önce velileri tarafından imzalanmış{" "}
              <strong>feragatname</strong> sunulması zorunludur.
            </li>
            <li>
              <strong>17K – Wild Canyon Run</strong> ve{" "}
              <strong>33K – Mountain Legend Trail:</strong> Bu parkurlarda{" "}
              <strong>18 yaş altı katılım kabul edilmez</strong>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            4. Zorunlu Ekipmanlar
          </h2>
          <p>
            Katılımcıların organizasyon tarafından belirlenen zorunlu
            ekipmanları eksiksiz taşıması gerekmektedir. Ekipman kontrolü yarış
            öncesi ya da sırasında yapılabilir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            5. Diskalifiye Sebepleri
          </h2>
          <p>
            Kestirme yapmak, doğaya çöp atmak, diğer katılımcılara zarar vermek
            veya zorunlu ekipmanı taşımamak diskalifiye nedenidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            6. Sağlık ve Güvenlik
          </h2>
          <p>
            Katılımcılar yarışa katılım için fiziksel olarak uygun olduklarını
            beyan eder. Sağlık görevlilerinin uyarılarına uymak zorunludur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            7. Etik Kurallar
          </h2>
          <p>
            Tüm katılımcılar birbirine, gönüllülere ve doğaya karşı saygılı
            davranmakla yükümlüdür. Fair-play anlayışı esastır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            8. İtirazlar
          </h2>
          <p>
            Yarışla ilgili her türlü itiraz, yarış bitimini takiben en geç 30
            dakika içinde yapılmalıdır. İtirazlar yazılı ve imzalı olmalıdır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#fbbf24] mb-2">
            9. İletişim
          </h2>
          <p>
            Tüm soru ve talepler için: <strong>karagecittrail@gmail.com</strong>{" "}
            adresine e-posta gönderebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RulesPage;

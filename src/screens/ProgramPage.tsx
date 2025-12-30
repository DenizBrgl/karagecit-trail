const ProgramPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 px-4 md:px-20 py-12 text-gray-800 flex justify-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl mt-10 md:text-4xl font-bold text-center text-[#1a237e] mb-12">
          ETKİNLİK PROGRAMI
        </h1>

        {/* 30 Ağustos Cumartesi */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4 text-center">
            21 HAZİRAN 2026 CUMARTESİ
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-left bg-white">
              <thead className="bg-[#fbbf24] text-white">
                <tr>
                  <th className="px-4 py-2">Etkinlik</th>
                  <th className="px-4 py-2">Saat</th>
                  <th className="px-4 py-2">Yer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Kit Dağıtımı Başlangıç</td>
                  <td className="px-4 py-2">17:00</td>
                  <td className="px-4 py-2">
                    Draft Mersin Pub(Sahilde Gs Meydanı Karşısı)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Dj Etkinliği</td>
                  <td className="px-4 py-2">18.00-19.30</td>
                  <td className="px-4 py-2">
                    Draft Mersin Pub(Sahilde Gs Meydanı Karşısı)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Kit Dağıtımı Bitiş</td>
                  <td className="px-4 py-2">20:00</td>
                  <td className="px-4 py-2">
                    Draft Mersin Pub(Sahilde Gs Meydanı Karşısı)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 21 Haziran Pazar */}
        <div>
          <h2 className="text-2xl font-bold text-[#1a237e] mb-4 text-center">
            21 Haziran 2026 PAZAR
          </h2>

          <p className="text-center text-md text-gray-700 mb-6 italic">
            Yarış alanında Karageçit Camping alanı bulunmaktadır.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-left bg-white">
              <thead className="bg-[#1a237e] text-white">
                <tr>
                  <th className="px-4 py-2">Etkinlik</th>
                  <th className="px-4 py-2">Saat</th>
                  <th className="px-4 py-2">Yer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Sayapark Aşağısı Vipol Karşısı - Forum Durağı Karşısı - Eski Devlet Hastanesi (33K için Otobüs Kalkışı)",
                    "05:00",
                    "Mersin",
                  ],
                  [
                    "Sayapark Aşağısı Vipol Karşısı - Forum Durağı Karşısı - Eski Devlet Hastanesi (8K & 17K için Otobüs Kalkışı)",
                    "06:00",
                    "Mersin",
                  ],
                  ["Tarsus Şehir Stadyumu", "05.30", "Tarsus"],
                  [
                    "33K Geç Kit Dağıtımı (Geç Kit Dağıtımı Olmayacaktır)",
                    "-",
                    "Karageçit",
                  ],
                  ["8K & 17K Geç Kit Dağıtımı", "07:00 – 08:00", "Karageçit"],

                  ["🏁 33K Yarış Startı", "07:00", "Başlangıç Noktası"],
                  [
                    "Zumba – Isınma & 8K-17K Start Hazırlığı",
                    "08:00 – 08:15",
                    "Yarış Alanı",
                  ],
                  ["🏁 8K & 17K Yarış Startı", "08:15", "Başlangıç Noktası"],
                  ["Yarış Bitişi", "12:30", "Finish Noktası"],
                  ["Paddle Board Keyfi", "13:00", "Kadıncık Barajı"],
                  ["Ödül Töreni", "14:00", "Sahne Alanı"],
                  ["Servislerin Ayrılışı (33K)", "15:30", "Karageçit"],
                  ["Servislerin Ayrılışı (8K & 17K)", "15:30", "Karageçit"],
                ].map(([etkinlik, saat, yer], i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{etkinlik}</td>
                    <td className="px-4 py-2">{saat}</td>
                    <td className="px-4 py-2">{yer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;

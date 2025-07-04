import React from "react";

const accommodations = [
  {
    name: "Karageçit Camping",
    location: "Yarış Alanı",
    phone: "0536 425 92 83",
    note: "Yarışın başladığı yer kamp-piknik yapabilirsiniz(500₺-600₺)",
  },
  {
    name: "Cadde Park Hotel",
    phone: "(0324) 237 83 53",
    address: "Cami Şerif, 33060 Akdeniz/Mersin",
    note: "Size özel fiyatımız vardır.",
  },
  {
    name: "Navona Otel",
    contact: "Taner Kara",
    phone: "0553 143 75 55 / 0324 238 23 23",
    email: "navona@navonaotel.com.tr",
  },
  {
    name: "Forum Suit Hotel",
    address: "Güvenevler Mh. 1915 Sk. No:3 Yenişehir/Mersin",
    phone: "+90 324 233 33 44",
    fax: "+90 324 233 33 44",
    email: "info@forumotel.com",
  },
];

const AccommodationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl mt-20 font-bold text-center mb-8 text-[#1a237e]">
          Konaklama Bilgileri
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {accommodations.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#fbbf24]"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              {item.location && (
                <p className="text-gray-600 mb-1">
                  <strong>Konum:</strong> {item.location}
                </p>
              )}
              {item.address && (
                <p className="text-gray-600 mb-1">
                  <strong>Adres:</strong> {item.address}
                </p>
              )}
              {item.phone && (
                <p className="text-gray-600 mb-1">
                  <strong>Telefon:</strong> {item.phone}
                </p>
              )}
              {item.fax && (
                <p className="text-gray-600 mb-1">
                  <strong>Fax:</strong> {item.fax}
                </p>
              )}
              {item.email && (
                <p className="text-gray-600 mb-1">
                  <strong>Email:</strong> {item.email}
                </p>
              )}
              {item.contact && (
                <p className="text-gray-600 mb-1">
                  <strong>Yetkili:</strong> {item.contact}
                </p>
              )}
              {item.note && (
                <p className="text-sm text-green-600 mt-2">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationsPage;

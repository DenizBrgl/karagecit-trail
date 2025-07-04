import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen  pt-24 bg-gray-100 text-gray-800 px-4 md:px-20 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-10 text-[#1a237e]">
        İLETİŞİM
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-[#fbbf24]">
              BİZİ ARAYIN
            </h2>
            <p className="text-lg mt-1">+90 (530) 865 59 95</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#fbbf24]">E-POSTA</h2>
            <p className="text-lg mt-1">karagecittrail@gmail.com</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#fbbf24]">KONUM</h2>
            <p className="text-lg mt-1">Karageçit / Tarsus, Mersin</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#fbbf24]">
              Organizatör
            </h2>
            <p className="text-lg mt-1">Deniz Birgül</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#fbbf24]">WHATSAPP</h2>
            <a
              href="https://wa.me/905302505995"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              WhatsApp üzerinden ulaşın
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-[#1a237e]">
          YARIŞ FUAR MERKEZİ
        </h2>
        <iframe
          src="https://maps.google.com/maps?q=Karage%C3%A7it%20Tarsus&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Karageçit Konum"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

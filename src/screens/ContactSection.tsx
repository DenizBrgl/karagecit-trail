const ContactSection = () => {
  return (
    <section className="w-full bg-white/90 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* SOL TARAF – LOGO + KISA METİN */}
        <div className="flex flex-col items-start">
          <img
            src="/logo_bg.png"
            alt="Karageçit Trail Logo"
            className="h-28 mb-6"
          />

          <p className="text-gray-600 leading-relaxed max-w-md">
            Karageçit Trail; doğayla iç içe, dayanıklılığı ve ruh gücünü ön
            plana çıkaran bir patika koşusu deneyimidir. Bizimle iletişime
            geçmekten çekinmeyin.
          </p>
        </div>

        {/* SAĞ TARAF – İLETİŞİM BİLGİLERİ */}
        <div className="space-y-6 text-gray-800">
          <div>
            <p className="text-sm uppercase tracking-wide text-[#fbbf24] font-semibold">
              Bizi Arayın
            </p>
            <p className="text-lg font-medium">+90 (530) 865 59 95</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-[#fbbf24] font-semibold">
              E-Posta
            </p>
            <p className="text-lg">karagecittrail@gmail.com</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-[#fbbf24] font-semibold">
              Konum
            </p>
            <p className="text-lg">Karageçit / Tarsus, Mersin</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-[#fbbf24] font-semibold">
              Organizatör
            </p>
            <p className="text-lg">Deniz Birgül</p>
          </div>

          <div>
            <a
              href="https://wa.me/905308655995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#25D366] font-semibold hover:underline"
            >
              WhatsApp üzerinden ulaşın →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

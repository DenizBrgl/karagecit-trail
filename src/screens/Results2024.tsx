const Results2024 = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 px-4 md:px-20 py-12 text-center">
      <h1 className="text-3xl mt-10 md:text-4xl font-bold text-[#1a237e] mb-6">
        2024 Yarış Sonuçları
      </h1>

      <p className="text-lg mb-8 text-gray-700">
        Akdeniz Trail Festival 2024 sonuçlarına aşağıdaki bağlantıdan
        ulaşabilirsiniz.
      </p>

      <a
        href="/2024sonuc.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#1a237e] text-white px-6 py-3 rounded hover:bg-[#0d1b4c] transition"
      >
        Sonuçları Görüntüle (PDF)
      </a>
    </div>
  );
};

export default Results2024;

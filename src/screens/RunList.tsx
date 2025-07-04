const RunList = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 px-4 md:px-20 py-12">
      <h1 className="text-3xl mt-20 md:text-4xl font-bold text-[#1a237e] mb-10 text-center">
        Karageçit Trail 2025 Katılımcı Listesi
      </h1>

      <div className="space-y-16">
        {/* 8K Katılımcılar */}
        <div>
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 text-center">
            8K - Discovery Run Katılımcı Listesi
          </h2>
          <iframe
            src="https://apphurra.com/etkinlikkatilimcilar/liste/1096/tr/0"
            width="100%"
            height="600"
            className="border border-gray-300 rounded"
            title="8K Katılımcılar"
          ></iframe>
        </div>

        {/* 17K Katılımcılar */}
        <div>
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 text-center">
            17K - Wild Canyon Run Katılımcı Listesi
          </h2>
          <iframe
            src="https://apphurra.com/etkinlikkatilimcilar/liste/1097/tr/0"
            width="100%"
            height="600"
            className="border border-gray-300 rounded"
            title="17K Katılımcılar"
          ></iframe>
        </div>

        {/* 33K Katılımcılar */}
        <div>
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 text-center">
            33K - Mountain Legend Trail Katılımcı Listesi
          </h2>
          <iframe
            src="https://apphurra.com/etkinlikkatilimcilar/liste/1098/tr/0"
            width="100%"
            height="600"
            className="border border-gray-300 rounded"
            title="33K Katılımcılar"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RunList;

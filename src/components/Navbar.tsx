import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll(); // ilk render'da da hesaplasın
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const location = useLocation();
  const isHome = location.pathname === "/";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  const [forceYellow, setForceYellow] = useState(false);
  useEffect(() => {
    if (location.pathname !== "/") {
      setForceYellow(true);
    }
  }, [location.pathname]);

  return (
    // <header
    //   className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${
    //     isHome ? (scrolled ? "bg-[#fbbf24]" : "bg-transparent") : "bg-[#fbbf24]"
    //   }`}
    // >
         <header
      className={`fixed top-0 left-0 w-full z-50  transition-colors duration-300 ${
        isHome ? ("bg-transparent") : "bg-[#fbbf24]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/logo_bg.png"
              alt="Karageçit Trail Logo"
              className={`w-auto cursor-pointer transition-all duration-300 ${
                forceYellow ? "h-20" : "h-24"
              }`}
            />
          </Link>
        </div>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center rounded-full bg-[#fbbf24] px-6 py-2 font-semibold text-white text-sm md:text-base space-x-5 ml-4 shadow-md">
          <Link
            to="/"
            className="bg-gray-600 text-white px-4 py-1 rounded-md font-bold"
          >
            Anasayfa
          </Link>

          <Link to="/AboutPage" className="block px-4 py-1 hover:bg-gray-100">
            Hakkımızda
          </Link>

          <div className="relative group">
            <button className="hover:underline">Bilgi Noktası ▾</button>
            <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow rounded z-50 min-w-[10rem] mt-0 top-full">
              <Link
                to="/RulesPage"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                Genel Kurallar
              </Link>
              <Link
                to="/ProgramPage"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                Program
              </Link>
              <Link
                to="/AwardsPage"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                Ödüller
              </Link>
              <Link
                to="/AccommodationsPage"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                Konaklama
              </Link>
              <Link to="/RunList" className="block px-4 py-1 hover:bg-gray-100">
                Katılımcı Listesi
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:underline">Parkurlar ▾</button>
            <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow rounded z-50 min-w-[10rem] mt-0 top-full">
              <Link
                to="/TrailDetail8K"
                className="block px-4 py-1 hover:bg-gray-300"
              >
                8K Discovery Run
              </Link>
              <Link
                to="/TrailDetail17K"
                className="block px-4 py-1 hover:bg-gray-300"
              >
                15K Wild Canyon Run
              </Link>
              <Link
                to="/TrailDetail38K"
                className="block px-4 py-1 hover:bg-gray-300"
              >
                38K Mountain Legend
              </Link>
                <Link
                to="/TrailDetail50K"
                className="block px-4 py-1 hover:bg-gray-300"
              >
                50K Ultra Challenge
              </Link>
            </div>
          </div>
          <Link to="/Gallery" className="block px-4 py-1 hover:bg-gray-300">
            Galeri
          </Link>

        <div className="relative group">
  <Link to="/Results" className="hover:underline">
    Sonuçlar
  </Link>
</div>


          <Link to="/ContactPage" className="block px-4 py-1 hover:bg-gray-300">
            İletişim
          </Link>

          <a
            href="https://apphurra.com/etkinlik/karagecit-trail"
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-800"
          >
            Kayıt Ol
          </a>
        </div>

        {/* Hamburger Butonu (mobil) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#fbbf24] text-black text-2xl rounded-md px-3 py-1 shadow-md focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="bg-[#fbbf24] w-full flex flex-col items-start px-6 py-4 space-y-3 text-white font-semibold text-base md:hidden">
          <Link
            to="/"
            className="bg-gray-500 text-white px-4 py-1 rounded-md font-bold w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Anasayfa
          </Link>
          <Link to="/AboutPage" onClick={() => setMenuOpen(false)}>
            Hakkımızda
          </Link>

          <Link to="/ContactPage" onClick={() => setMenuOpen(false)}>
            İletişim
          </Link>

          <button
            onClick={() => toggleSubmenu("info")}
            className="w-full text-left"
          >
            Bilgi Noktası ▾
          </button>
          {openSubmenu === "info" && (
            <div className="pl-4 flex flex-col text-sm text-white space-y-1 w-full">
              <Link
                to="/RulesPage"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Genel Kurallar
              </Link>
              <Link
                to="/AwardsPage"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Ödüller
              </Link>
              <Link
                to="/ProgramPage"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Program
              </Link>
              <Link
                to="/AccommodationsPage"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Konaklama
              </Link>
              <Link
                to="/RunList"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Katılımcı Listesi
              </Link>
            </div>
          )}

          <button
            onClick={() => toggleSubmenu("tracks")}
            className="w-full text-left"
          >
            Parkurlar ▾
          </button>
          {openSubmenu === "tracks" && (
            <div className="pl-4 flex flex-col text-sm text-white space-y-1 w-full">
              <Link
                to="/TrailDetail8K"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                8K DISCOVERY RUN
              </Link>
              <Link
                to="/TrailDetail17K"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                15K WILD CANYON
              </Link>
              <Link
                to="/TrailDetail38K"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                38K MOUNTAIN LEGEND
              </Link>
                <Link
                to="/TrailDetail50K"
                className="block px-4 py-1 hover:bg-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                50K ULTRA CHALLENGE
              </Link>
            </div>
          )}

          <a href="https://drive.google.com/drive/folders/1PHkNfhQnJfdKLmNJKf9zh0rsG0AHA5s9">
            Galeri
          </a>
   <Link to="/Results" onClick={() => setMenuOpen(false)}>
  Sonuçlar
</Link>


          <Link to="/ContactPage" onClick={() => setMenuOpen(false)}>
            İletişim
          </Link>
          <a
            href="https://apphurra.com/etkinlik/karagecit-trail"
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-800 w-full text-center"
          >
            Kayıt Ol
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

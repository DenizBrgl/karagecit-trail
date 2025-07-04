import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (key) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/logo_bg.png"
              alt="Karageçit Trail Logo"
              className="h-24 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center bg-[#fbbf24] rounded-full px-6 py-2 shadow-md font-semibold text-white text-sm md:text-base space-x-5 ml-4">
          <Link
            to="/"
            className="bg-black text-white px-4 py-1 rounded-md font-bold"
          >
            Anasayfa
          </Link>

          <a href="/AboutPage" className="block px-4 py-1 hover:bg-gray-100">
            Hakkımızda
          </a>

          <div className="relative group">
            <button className="hover:underline">Bilgi Noktası ▾</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 shadow rounded z-50 min-w-[10rem]">
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
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 shadow rounded z-50 min-w-[15rem]">
              <Link
                to="/TrailDetail8K"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                8K DISCOVERY RUN
              </Link>
              <Link
                to="/TrailDetail17K"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                17K WILD CANYON
              </Link>
              <Link
                to="/TrailDetail33K"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                33K MOUNTAIN LEGEND
              </Link>
            </div>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1PHkNfhQnJfdKLmNJKf9zh0rsG0AHA5s9"
            className="hover:underline"
          >
            Galeri
          </a>

          <div className="relative group">
            <button className="hover:underline">Sonuçlar ▾</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 shadow rounded z-50 min-w-[15rem]">
              <Link
                to="/Results2024"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                2024
              </Link>
              <Link
                to="/Results2025"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                2025
              </Link>
            </div>
          </div>

          <Link to="/ContactPage" className="block px-4 py-1 hover:bg-gray-100">
            İletişim
          </Link>

          <a
            href="https://apphurra.com/etkinlik/karagecit-trail"
            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
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
            className="bg-black text-white px-4 py-1 rounded-md font-bold w-full text-center"
          >
            Anasayfa
          </Link>

          <Link to="/ContactPage">İletişim</Link>

          <button
            onClick={() => toggleSubmenu("info")}
            className="w-full text-left"
          >
            Bilgi Noktası ▾
          </button>
          {openSubmenu === "info" && (
            <div className="pl-4 flex flex-col text-sm text-white space-y-1 w-full">
              <Link to="/RulesPage">Genel Kurallar</Link>
              <Link to="/AwardsPage">Ödüller</Link>
              <Link to="/ProgramPage">Program</Link>
              <Link to="/AccommodationsPage">Konaklama</Link>
              <Link to="/RunList">Katılımcı Listesi</Link>
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
              <Link to="/TrailDetail8K">8K DISCOVERY RUN</Link>
              <Link to="/TrailDetail17K">17K WILD CANYON</Link>
              <Link to="/TrailDetail33K">33K MOUNTAIN LEGEND</Link>
            </div>
          )}

          <a href="https://drive.google.com/drive/folders/1PHkNfhQnJfdKLmNJKf9zh0rsG0AHA5s9">
            Galeri
          </a>
          <button
            onClick={() => toggleSubmenu("tracks")}
            className="w-full text-left"
          >
            Sonuçlar ▾
          </button>
          {openSubmenu === "tracks" && (
            <div className="pl-4 flex flex-col text-sm text-white space-y-1 w-full">
              <Link to="/Results2024">2024</Link>
              <Link to="/Results2025">2025</Link>
            </div>
          )}

          <Link to="/ContactPage">İletişim</Link>
          <a
            href="https://apphurra.com/etkinlik/karagecit-trail"
            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 w-full text-center"
          >
            Kayıt Ol
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

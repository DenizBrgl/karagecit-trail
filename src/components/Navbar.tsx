import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent shadow-none" : "bg-[#fbbf24] shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/logo_bg.png"
            alt="Karageçit Trail Logo"
            className={`w-auto cursor-pointer transition-all duration-300 ${
              isTransparent ? "h-24" : "h-16"
            }`}
          />
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold">
          <NavLink to="/" label="Anasayfa" isTransparent={isTransparent} isActive={location.pathname === "/"} />
          <NavLink to="/AboutPage" label="Hakkımızda" isTransparent={isTransparent} isActive={location.pathname === "/AboutPage"} />

          <DropdownMenu label="Bilgi Noktası" isTransparent={isTransparent}>
            <DropItem to="/RulesPage" label="📋 Genel Kurallar" />
            <DropItem to="/ProgramPage" label="🗓️ Program" />
            <DropItem to="/AwardsPage" label="🏆 Ödüller" />
            <DropItem to="/AccommodationsPage" label="🏨 Konaklama" />
            <DropItem to="/RunList" label="👥 Katılımcı Listesi" />
          </DropdownMenu>

          <DropdownMenu label="Parkurlar" isTransparent={isTransparent}>
            <DropItem to="/TrailDetailKidsRun" label="🧒 Çocuk Koşusu" highlight />
            <DropItem to="/TrailDetail8K" label="🟡 8K Discovery Run" />
            <DropItem to="/TrailDetail15K" label="🟠 15K Wild Canyon Run" />
            <DropItem to="/TrailDetail30K" label="🔵 30K Mountain Legend" />
            <DropItem to="/TrailDetail50K" label="🔴 50K Ultra Challenge" />
          </DropdownMenu>

          <NavLink to="/Gallery" label="Galeri" isTransparent={isTransparent} isActive={location.pathname === "/Gallery"} />
          <NavLink to="/Results" label="Sonuçlar" isTransparent={isTransparent} isActive={location.pathname === "/Results"} />
          <NavLink to="/ContactPage" label="İletişim" isTransparent={isTransparent} isActive={location.pathname === "/ContactPage"} />

          <a
            href="https://apphurra.com/etkinlik/karagecit-trail"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#1a237e] hover:bg-[#0f1757] text-white font-extrabold px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow"
          >
            🏃 Kayıt Ol
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors ${
            isTransparent ? "bg-white/20 hover:bg-white/30" : "bg-[#1a237e]/20 hover:bg-[#1a237e]/30"
          }`}
        >
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""} ${isTransparent ? "bg-white" : "bg-[#1a237e]"}`} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""} ${isTransparent ? "bg-white" : "bg-[#1a237e]"}`} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""} ${isTransparent ? "bg-white" : "bg-[#1a237e]"}`} />
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1a237e] px-4 py-5 space-y-1">
          <MobileLink to="/" label="🏠 Anasayfa" onClick={() => setMenuOpen(false)} />
          <MobileLink to="/AboutPage" label="👋 Hakkımızda" onClick={() => setMenuOpen(false)} />
          <MobileLink to="/ContactPage" label="📞 İletişim" onClick={() => setMenuOpen(false)} />

          {/* Bilgi Noktası */}
          <div>
            <button
              onClick={() => toggleSubmenu("info")}
              className="w-full flex items-center justify-between text-white font-semibold text-sm px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <span>📌 Bilgi Noktası</span>
              <span className={`transition-transform duration-200 ${openSubmenu === "info" ? "rotate-180" : ""}`}>▾</span>
            </button>
            {openSubmenu === "info" && (
              <div className="mt-1 ml-3 space-y-1 border-l-2 border-[#fbbf24]/40 pl-3">
                <MobileLink to="/RulesPage" label="📋 Genel Kurallar" onClick={() => setMenuOpen(false)} sub />
                <MobileLink to="/AwardsPage" label="🏆 Ödüller" onClick={() => setMenuOpen(false)} sub />
                <MobileLink to="/ProgramPage" label="🗓️ Program" onClick={() => setMenuOpen(false)} sub />
                <MobileLink to="/AccommodationsPage" label="🏨 Konaklama" onClick={() => setMenuOpen(false)} sub />
                <MobileLink to="/RunList" label="👥 Katılımcı Listesi" onClick={() => setMenuOpen(false)} sub />
              </div>
            )}
          </div>

          {/* Parkurlar */}
          <div>
            <button
              onClick={() => toggleSubmenu("tracks")}
              className="w-full flex items-center justify-between text-white font-semibold text-sm px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <span>🗺️ Parkurlar</span>
              <span className={`transition-transform duration-200 ${openSubmenu === "tracks" ? "rotate-180" : ""}`}>▾</span>
            </button>
            {openSubmenu === "tracks" && (
              <div className="mt-1 ml-3 space-y-1 border-l-2 border-[#fbbf24]/40 pl-3">
                <MobileLink to="/TrailDetailKidsRun" label="🧒 Çocuk Koşusu" onClick={() => setMenuOpen(false)} sub highlight />
                <MobileLink to="/TrailDetail8K" label="🟡 8K Discovery Run" onClick={() => setMenuOpen(false)} sub />
                <MobileLink to="/TrailDetail15K" label="🟠 15K Wild Canyon" onClick={() => setMenuOpen(false)} sub />
                <MobileLink to="/TrailDetail30K" label="🔵 30K Mountain Legend" onClick={() => setMenuOpen(false)} sub />
                <MobileLink to="/TrailDetail50K" label="🔴 50K Ultra Challenge" onClick={() => setMenuOpen(false)} sub />
              </div>
            )}
          </div>

          <MobileLink to="/Gallery" label="📸 Galeri" onClick={() => setMenuOpen(false)} />
          <MobileLink to="/Results" label="🏅 Sonuçlar" onClick={() => setMenuOpen(false)} />

          <div className="pt-2">
            <a
              href="https://apphurra.com/etkinlik/karagecit-trail"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#fbbf24] text-[#1a237e] font-extrabold text-sm px-4 py-3 rounded-xl uppercase tracking-widest hover:bg-yellow-400 transition-colors"
            >
              🏃 Hemen Kayıt Ol
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ── Yardımcı Bileşenler ── */

const NavLink = ({
  to, label, isTransparent, isActive,
}: {
  to: string; label: string; isTransparent: boolean; isActive: boolean;
}) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-[#1a237e] text-white"
        : isTransparent
        ? "text-white hover:bg-white/20"
        : "text-[#1a237e] hover:bg-[#1a237e]/10"
    }`}
  >
    {label}
  </Link>
);

const DropdownMenu = ({
  label, children, isTransparent,
}: {
  label: string; children: React.ReactNode; isTransparent: boolean;
}) => (
  <div className="relative group">
    <button
      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
        isTransparent
          ? "text-white hover:bg-white/20"
          : "text-[#1a237e] hover:bg-[#1a237e]/10"
      }`}
    >
      {label}
      <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▾</span>
    </button>
    <div className="absolute hidden group-hover:block top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[13rem] z-50">
      {children}
    </div>
  </div>
);

const DropItem = ({
  to, label, highlight,
}: {
  to: string; label: string; highlight?: boolean;
}) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
      highlight
        ? "text-yellow-600 font-bold hover:bg-yellow-50"
        : "text-gray-700 hover:bg-gray-50 hover:text-[#1a237e]"
    }`}
  >
    {label}
  </Link>
);

const MobileLink = ({
  to, label, onClick, sub, highlight,
}: {
  to: string; label: string; onClick: () => void; sub?: boolean; highlight?: boolean;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
      highlight
        ? "bg-[#fbbf24]/20 text-[#fbbf24] hover:bg-[#fbbf24]/30"
        : sub
        ? "text-white/80 hover:bg-white/10 hover:text-white"
        : "text-white hover:bg-white/10"
    }`}
  >
    {label}
  </Link>
);

export default Navbar;
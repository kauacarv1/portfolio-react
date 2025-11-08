import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FiMoon, FiSun, FiMenu } from "react-icons/fi"

export default function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation()
  const [dark, setDark] = React.useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"
  }, [menuOpen])

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Kauã<span className="text-blue-500">.Oliveira</span></Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className={location.pathname === "/" ? "underline" : ""}>Home</Link>
          <Link to="/projects" className={location.pathname.startsWith("/projects") ? "underline" : ""}>Projetos</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "underline" : ""}>Contato</Link>

          <button aria-label="toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-md hover:scale-105 transition-transform">
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <span className="text-2xl font-bold">&times;</span>
          ) : (
            <FiMenu size={22} />
          )}
        </button>
      </div>
    </nav>
  )
}

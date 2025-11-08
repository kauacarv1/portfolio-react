import React from "react"
import { Link } from "react-router-dom"

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-[rgba(10,10,10,0.9)] backdrop-blur-md transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-30 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Fechar menu"
      >
        &times;
      </button>
      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className="text-2xl text-white font-semibold my-4 transition-transform hover:scale-110"
      >
        Home
      </Link>
      <Link
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className="text-2xl text-white font-semibold my-4 transition-transform hover:scale-110"
      >
        Projetos
      </Link>
      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className="text-2xl text-white font-semibold my-4 transition-transform hover:scale-110"
      >
        Contato
      </Link>
    </div>
  )
}

import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer(){
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur mt-12">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
      <span className="text-sm sm:text-center">© {new Date().getFullYear()} Kauã.
      </span>
      <div className="flex items-center gap-4">
        <a href="https://github.com/kauacarv1" aria-label="github"><FaGithub /></a>
        <a href="https://linkedin.com" aria-label="linkedin"><FaLinkedin /></a>
        <a href="mailto:kauacarvalholiveira@gmail.com" aria-label="email"><FaEnvelope /></a>
      </div>
      </div>
    </footer>
  )
}

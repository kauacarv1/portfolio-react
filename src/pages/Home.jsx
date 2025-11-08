import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
  return (
    <section className="max-w-4xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-bold">Olá, meu nome é Kauã</h1>
      <p className="text-lg">Software Engineering student at <a className="text-blue-500 inline-block hover:scale-105 transition-transform" href="https://www.fiap.com.br/">FIAP</a>.</p>
      <p className="tex-lg">Sou apaixonado por tecnologia e pelo impacto que ela pode gerar. Estudo Engenharia de Software e tenho interesse em desenvolvimento full-stack, algoritmos e análise de dados. Gosto de criar soluções práticas, eficientes e bem estruturadas, sempre buscando aprender e evoluir como desenvolvedor.</p>
      <div className="flex justify-center gap-4">
        <Link to="/projects" className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-md border hover:scale-105 transition-transform">Ver projetos</Link>
        <Link to="/contact" className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-md border hover:scale-105 transition-transform">Contato</Link>
      </div>
      <br />
      <section>
    <h1 className="text-4xl font-bold">Skills</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-semibold mb-4 text-blue-500">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">React</span>
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">HTML5</span>
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">CSS</span>
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">TailwindCSS</span>
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">JavaScript</span>
        </div>
      </div>

      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-semibold mb-4 text-blue-500">Backend</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">Python</span>
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">SQL</span>
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">JavaScript</span>
          <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">C++</span>
        </div>
      </div>

      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2 flex justify-center">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Outros</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">Git</span>
            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">Github</span>
            <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">PowerBI</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    </section>

  )
}

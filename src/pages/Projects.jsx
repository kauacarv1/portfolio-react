import React from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects"

export default function Projects(){
  const [q, setQ] = React.useState("")
  const filtered = projects.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.tags.join(" ").toLowerCase().includes(q.toLowerCase()))
  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Projetos</h2>
        <input aria-label="buscar projetos" value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Buscar projetos..." className="border rounded-md px-3 py-2 focus:outline-none dark:bg-blue-500/10 dark:text-blue-500"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-8">Nenhum projeto localizado</div>
        ) : filtered.map(p => (
          <article key={p.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <img src={p.img} alt={`imagem do ${p.title}`} className="w-full h-40 object-cover rounded"/>
            <div className="mt-3">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-sm">{p.desc}</p>
              <div className="mt-3 flex gap-2">
                {p.tags.map(t => <span key={t} className="text-xs bg-blue-500/10 text-blue-500 px-2 py-1 border rounded hover:scale-105 transition-transform">{t}</span>)}
              </div>
              <div className="mt-3">
                <Link to={`/projects/${p.id}`} className="text-sm underline text-blue-500">Ver detalhes</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

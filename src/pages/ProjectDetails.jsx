import React from "react"
import { useParams, Link } from "react-router-dom"
import projects from "../data/projects"

export default function ProjectDetails(){
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  if(!project) return <div>Projeto não encontrado</div>
  return (
    <section className="max-w-3xl mx-auto space-y-4">
  <Link to="/projects" className="text-sm underline text-blue-500">Voltar</Link>
  <h2 className="text-2xl font-semibold">{project.title}</h2>
  <img src={project.img} alt={`imagem do ${project.title}`} className="w-full h-64 object-cover rounded"/>
  <p>{project.desc}</p>
  <div className="flex gap-2 ">
    {project.tags.map(t => <span key={t} className="px-2 py-1 border rounded text-sm bg-blue-500/10 text-blue-500 ">{t}</span>)}
  </div>
  {project.github && (
    <a 
      href={project.github} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 bg-blue-500/10 text-blue-500 rounded hover:scale-105 transition-transform"
    >
      Ver no GitHub
    </a>
  )}
</section>

  )
}

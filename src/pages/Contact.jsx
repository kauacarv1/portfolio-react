import React from "react"

export default function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" })

  function onSubmit(e) {
    e.preventDefault()
    alert(
      `Mensagem enviada com sucesso!\n\n` +
      `Nome: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Mensagem:\n${form.message}`
    )
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section className="max-w-4xl mx-auto text-center space-y-6">
      <p className="text-blue-500">contate-me</p>
      <h1 className="mt-0 text-4xl font-bold">Como posso te ajudar?</h1>
      <p>Fale comigo sobre projetos de software, colaboração ou oportunidades profissionais.</p>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-left">Contato</h2>
        <form 
          onSubmit={onSubmit} 
          className="space-y-4 p-6 rounded bg-blue-500/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span>Nome</span>
              <input 
                required 
                value={form.name} 
                onChange={e => setForm({ ...form, name: e.target.value })} 
                className="border rounded px-3 py-2 bg-white dark:bg-blue-500/10 dark:text-white"
              />
            </label>
            <label className="flex flex-col">
              <span>Email</span>
              <input 
                required 
                type="email" 
                value={form.email} 
                onChange={e => setForm({ ...form, email: e.target.value })} 
                className="border rounded px-3 py-2 bg-white dark:bg-blue-500/10 dark:text-white"
              />
            </label>
          </div>
          <label className="flex flex-col">
            <span>Mensagem</span>
            <textarea 
              required 
              value={form.message} 
              onChange={e => setForm({ ...form, message: e.target.value })} 
              className="border rounded px-3 py-2 bg-white dark:bg-blue-500/10 dark:text-white" 
              rows="5"
            />
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" required className="w-4 h-4" />
            <span className="text-sm">Concordo que meus dados serão coletados e armazenados.</span>
          </label>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="px-6 py-2 rounded border bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </section>
  )
}

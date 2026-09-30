import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './CadastroNews.css'

const endpoint = 'http://localhost:3000/cadastroNews'

export default function CadastroNews() {
  const [formData, setFormData] = useState({ nome: '', email: '' })
  const [inscritos, setInscritos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw new Error('Não foi possível carregar os inscritos.')
        return response.json()
      })
      .then(setInscritos)
      .catch(() => setLoadError('Não foi possível carregar a lista. Verifique se o JSON Server está ativo.'))
      .finally(() => setIsLoading(false))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Não foi possível concluir a inscrição.')

      const inscrito = await response.json()
      setInscritos((previousInscritos) => [inscrito, ...previousInscritos])
      setFormData({ nome: '', email: '' })
      setLoadError('')
      toast.success('Inscrição realizada com sucesso.')
    } catch {
      toast.error('Não foi possível realizar a inscrição. Verifique se o JSON Server está ativo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="newsletter-container">
      <h1 className="newsletter-title">Cadastro da newsletter</h1>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="newsletter-field">
          <label htmlFor="newsletter-nome">Nome</label>
          <input
            id="newsletter-nome"
            name="nome"
            type="text"
            autoComplete="name"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="newsletter-field">
          <label htmlFor="newsletter-email">E-mail</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="newsletter-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Inscrever-se'}
        </button>
      </form>

      <section className="newsletter-list" aria-labelledby="inscritos-title">
        <div className="newsletter-list-heading">
          <h2 id="inscritos-title">Inscritos</h2>
          <span>{inscritos.length}</span>
        </div>
        {isLoading ? (
          <p className="newsletter-message">Carregando inscritos...</p>
        ) : loadError ? (
          <p className="newsletter-message" role="alert">{loadError}</p>
        ) : inscritos.length === 0 ? (
          <p className="newsletter-message">Ainda não há inscrições.</p>
        ) : (
          <ul className="newsletter-entries">
            {inscritos.map((inscrito) => (
              <li className="newsletter-entry" key={inscrito.id}>
                <strong>{inscrito.nome}</strong>
                <span>{inscrito.email}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <ToastContainer />
    </main>
  )
}
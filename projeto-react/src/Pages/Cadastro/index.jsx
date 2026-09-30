import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Cadastro.css'

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((previousData) => ({ ...previousData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (Object.values(formData).some((value) => !value.trim())) {
            toast.error('Todos os campos são obrigatórios.')
            return
        }

        setIsSubmitting(true)
        try {
            const response = await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error('Não foi possível concluir o cadastro.')

            setFormData({ nome: '', telefone: '', email: '' })
            toast.success('Usuário cadastrado com sucesso.')
        } catch {
            toast.error('Não foi possível cadastrar. Verifique se o JSON Server está ativo.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="cadastro-container">
            <h1 className="cadastro-title">Cadastro de usuários</h1>
            <form className="form-card" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text" name="nome" value={formData.nome} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="telefone">Telefone</label>
                    <input id="telefone" type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button className="form-button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Cadastrando...' : 'Cadastrar usuário'}
                </button>
            </form>
            <ToastContainer />
        </main>
    )
}
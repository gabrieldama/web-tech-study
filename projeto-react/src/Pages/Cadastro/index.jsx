import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Cadastro.css'

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!nome.trim() || !telefone.trim() || !email.trim()) {
            toast.error('Todos os campos são obrigatórios.')
            return
        }

        fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, telefone, email }),
            })
            .then((response) => {
                if (!response.ok) throw new Error('Falha no cadastro')
                return response.json()
            })
            .then(() => {
                setNome('')
                setTelefone('')
                setEmail('')
                toast.success('Usuário cadastrado com sucesso.')
            })
            .catch(() => {
                toast.error('Não foi possível cadastrar. Verifique se o JSON Server está ativo.')
            })
    }

    return (
        <main className="cadastro-container">
            <h1 className="cadastro-title">Cadastro de usuários</h1>
            <form className="form-card" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)} required />
                </div>
                <div className="form-control">
                    <label htmlFor="telefone">Telefone</label>
                    <input id="telefone" type="tel" value={telefone} onChange={(event) => setTelefone(event.target.value)} required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <button className="form-button" type="submit">Cadastrar usuário</button>
            </form>
            <ToastContainer />
        </main>
    )
}
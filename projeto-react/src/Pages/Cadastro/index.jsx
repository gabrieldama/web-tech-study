import React, { useState } from 'react'

function index() {
// Estado para armazenar os dados do formulário
const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
});

// Função para atualizar o estado ao digitar no formulário
const handleChange = (e) => {
    //Obter o elemento de entrada atual
    const {name, value} = e.target;
    // Extrair o valor e o nome do campo de entrada
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
    }))
}

// Função para enviar o formulário
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Olá....")
}

  return (
    <main className='container'>
        <h1>Cadastro de usuários</h1>
        <form onSubmit={handleSubmit}>
            <article className='form-control'>
                <label htmlFor='nome'>Nome</label>
                <input 
                type="text" 
                name='nome' 
                value={formData.nome}
                onChange={handleChange}/>
            </article>

            <article className='form-control'>
                <label htmlFor='telefone'>Telefone</label>
                <input 
                type="text" 
                name='telefone' 
                value={formData.telefone} />
            </article>

            <article className='form-control'>
                <label htmlFor='email'>Email</label>
                <input 
                type="text" 
                name='email' 
                value={formData.email}/>
            </article>

            <button type='submit'>Cadastrar</button>
        </form>
    </main>
  )
}

export default index
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./Cadastro.css"

export default function index() {
    //estado para armazenar os dados do formulario

    const [formData, setFormData] = useState ({
        nome: "",
        telefone:"",
        email:""
    });

    // função para atualizar o estado ao digitar no formulario

    const handleChange = (e) => {
        const {name, value} = e.target; // alvo

        setFormData((prevFormData) => ({
              ...prevFormData,
            [name]: value
        }));
    };

    // função para enviar formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.nome == "" || formData.telefone == "" || formData.email == "" ){
            toast.error("Todos os campos são obrigátorios")
            return;
        }

        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Usuarios cadastrados com sucesso", data)
            toast.success("Usuarios cadastrados com sucesso")
        })
        setFormData({
            nome: "",
            telefone: "",
            email: ""
        })
    }


    return (
        <main className='container'>
            <h1>Cadastro de usuários</h1>
            <form onSubmit={handleSubmit}>

                <article className='form-control'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name='nome' value={formData.nome} onChange={handleChange} />
                </article>

                <article className='form-control'>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" name='telefone' value={formData.telefone} onChange={handleChange} />
                </article>

                <article className='form-control'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name='email' value={formData.email} onChange={handleChange}/>
                </article>

                <button type='submit'>Cadastrar</button>

                <ToastContainer/>
            </form>
        </main>
    );
}
import React from 'react'
import "./Sobre.css"

function index() {
  return (
    <section className="about-container">
      <h1 className="about-title">Sobre</h1>

      <p className="about-text">
        Este é o meu segundo projeto em React, desenvolvido durante o curso no SENAI.
        A proposta foi aprofundar os conhecimentos em desenvolvimento web e aprender a
        construir interfaces mais organizadas, reutilizáveis e responsivas.
      </p>

      <p className="about-text">
        Durante o processo, foi possível praticar a criação de componentes, a estruturação
        de páginas, o uso de estilos e a navegação entre telas. Também foi importante
        entender como o React ajuda a organizar melhor o código e a facilitar a manutenção
        de aplicações maiores.
      </p>

    </section>
  )
}

export default index
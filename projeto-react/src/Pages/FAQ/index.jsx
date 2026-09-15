import "./FAQ.css"

function index() {
  return (
    <section className="faq-container">
      <h1 className="faq-title">Perguntas Frequentes</h1>

      <div className="faq-item">
        <h2 className="faq-question">O que é o React?</h2>
        <p className="faq-answer">
          O React é uma biblioteca JavaScript usada para criar interfaces de usuário.
          Ele permite construir páginas web com partes reutilizáveis, chamadas de
          componentes, que deixam o código mais organizado e mais fácil de manter.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">Para que ele serve?</h2>
        <p className="faq-answer">
          O React serve para criar telas interativas, menus, formulários, cards,
          dashboards e qualquer parte de uma página que precise reagir a ações do usuário.
          Ele é muito usado em sites modernos e em aplicações web mais complexas.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">Por que ele é tão usado?</h2>
        <p className="faq-answer">
          Ele é bastante popular porque facilita a criação de interfaces dinâmicas e
          reutilizáveis. Em vez de escrever muito código repetido, o desenvolvedor pode
          dividir a interface em blocos menores e reaproveitá-los em vários lugares.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">O que são componentes?</h2>
        <p className="faq-answer">
          Componentes são partes independentes da interface, como um botão, um card,
          um cabeçalho ou uma seção inteira da página. Cada componente pode ter seu
          próprio conteúdo e estilo, tornando o desenvolvimento mais organizado.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">React é difícil de aprender?</h2>
        <p className="faq-answer">
          Como qualquer tecnologia, ele exige prática e estudo. Porém, a lógica do React é
          bem clara para quem já conhece os conceitos básicos de JavaScript. Com paciência e
          exercícios, é possível aprender de forma gradual e construir projetos reais.
        </p>
      </div>
    </section>
  )
}

export default index
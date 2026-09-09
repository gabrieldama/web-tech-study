import "./FAQ.css"

function index() {
  return (
    <section className="faq-container">
        <h1 className="faq-title">Perguntas Frequentes</h1>
        <div className="faq-item">
            <h2 className="faq-question">O que é o React?</h2>
            <p className="faq-answer">
                O React é uma biblioteca JavaScript para criar interfaces de usuário.
            </p>
        </div>
    </section>
  )
}

export default index
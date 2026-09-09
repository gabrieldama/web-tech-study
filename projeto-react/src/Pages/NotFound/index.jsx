import { Link } from "react-router-dom"
import "./notFound.css"

function index() {
  return (
    <section className="notfound-container">
        <h1 className="notfound-title">404 - Página não encontrada</h1>
        <p className="notfound-text">
            Desculpe, a página que você está procurando não existe.
        </p>
        <Link to="/" className="notfound-link">
        Voltar para a página inicial
        </Link>
    </section>
  )
}

export default index
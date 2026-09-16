import { Link } from 'react-router-dom'
import "./Nav.css"

function index() {
  return (
    <nav >
        <ul className='menu'>
            <li>
                <Link to="/">Início</Link>
            </li>
            <li>
                <Link to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link to="/usuarios">Usuarios</Link>
            </li>
            <li>
                <Link to="/faq">FAQ</Link>
            </li>
        </ul>
    </nav>
  )
}

export default index
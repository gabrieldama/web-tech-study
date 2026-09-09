import "./Header.css"
import logo from "../../assets/img/logo.png"

function index() {
  return (
    <header className='header'>
      <section className='title-container'>
        <img className='logo' src={logo} alt='Logo do projeto' />
        <div className='text-container'>
          <h1 className='title'>Projeto React</h1>
          <h2 className='subtitle'>Projeto React feito em aula, com tema SENAI</h2>
        </div>
      </section>
    </header>
  )
}

export default index
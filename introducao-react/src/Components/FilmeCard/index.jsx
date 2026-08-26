import "./FilmeCard.css"

const FilmeCard = (props) => {
  return (
    <article className="filme-card">
      <h2>{props.titulo}</h2>
      <p className="filme-genero">Genero: {props.genero}</p>
      <p>{props.children}</p>
    </article>
  )
}

export default FilmeCard
import "./Card.css"

// Import da imagem
import imgCard from "../../assets/mg-card.jpg"

const Card = () => {
    return (
    <section>
      <article className="card">
        <img src={imgCard} className="img-card"/>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, accusantium. Nihil suscipit amet consequatur est, sapiente sunt voluptatibus ratione dolorem, ea aliquid earum. Excepturi similique quo tenetur maiores ipsum enim.</p>
    </article>

      <hr />
     </section>
    )
}

export default Card;
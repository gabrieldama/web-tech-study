import "./ImgCard.css";

import cardImage from "../assets/img-card2.jpg";

const ImgCard = (props) => {
    return (
        <div className="image-card">
            <img
                src={cardImage}
                alt={props.caption || "imagem"}
                className="image-card-img"
            />
            <p className="image-card-caption">{props.caption}</p>
        </div>
    );
};

export default ImgCard;
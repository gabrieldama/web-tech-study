import "./Valorant.css"

function Valorant() {
    const valorantData = [
        {
            img: "https://i.pinimg.com/474x/60/9d/55/609d5526802fe9e2171c7518d7ac79cc.jpg",
            title: "Reyna",
            textBox: "Duelista",
            description: "Reyna é uma duelista mexicana que possui habilidades solo-game"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16anjl2Wyc6jYBtH2EYxHHZtfqVbugSEIEek31TwuWQNntdH1FSiOUZU&s=10",
            title: "Jett",
            textBox: "Duelista",
            description: "Jett é uma duelista sul-coreana que possui habilidades de mobilidade"
        },
        {
            img: "https://i.pinimg.com/474x/a9/11/2f/a9112f09e2ffe57abd560d4989f476ee.jpg",
            title: "Sage",
            textBox: "Sentinela",
            description: "Sage é uma sentinela chinesa que possui habilidades de cura e suporte"
        }
    ];

    return (
        <div className='valorant-container'>
            {valorantData.map((agent, index) => {
                return (
                    <div className='valorant-box' key={index}>
                        <img src={agent.img} alt={agent.title} />
                        <h2>{agent.title}</h2>
                        <p>{agent.textBox}</p>
                        <p>{agent.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
       
export default Valorant
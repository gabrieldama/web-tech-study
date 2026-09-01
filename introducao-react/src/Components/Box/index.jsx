import "./Box.css"

function index() {
    const boxData = [
        {
            title: "Box 1",
            textBox: "Lorem ipsum box 1",
            link: "#",
        },
        {
            title: "Box 2",
            textBox: "Lorem ipsum box 2",
            link: "#"
        },
        {
            title: "Box 3",
            textBox: "Lorem ipsum box 3",
            link: "#"
        }
    ];

  return (
    <div className='box-container'>
        {boxData.map((box, index) => {
            return (
            <div className='box' key={index}>
                <h2>{box.title}</h2>
                <p>{box.textBox}</p>
                <a href={box.link}>Saiba mais!</a>
            </div>
            )
        })}
        
    </div>
  )
}

export default index
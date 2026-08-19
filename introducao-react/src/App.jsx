import Header from "./Components/Header"
import Card from "./Components/Card"
import Banner from "./Components/Banner"
import ImgCard from "./Components/imgCard"
import FilmeCard from "./Components/FilmeCard"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
     <Header title="Meu site"/>

     <Header title="Lorem Ipsum"/>

     <Header title="Introdução React"/>

     <ImgCard caption="New Lorem Ipsum" />

     <Banner>
        <h1>Bem-vindo ao meu site</h1>
        <p>Aqui você econtra os meus testes com React</p>
    </Banner>

    <FilmeCard titulo="Interestelar" genero="Ficção científica">
      Uma viagem emocionante pelo espaço e pelo tempo.
    </FilmeCard>

<p></p>

    <FilmeCard titulo="A vida é bela" genero="Drama">
      Uma história comovente da época dos campos de concentração.
    </FilmeCard>

    <Card/>

     <Footer/>
    </>
  )
}
// Teste para GitHub
export default App

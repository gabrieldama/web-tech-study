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
        <p>Aqui você econtra as melhores ofertas do Murilhão</p>
    </Banner>

    <FilmeCard titulo="Interestelar" genero="Ficção científica">
      Uma viagem emocionante pelo espaço e pelo tempo em busca de um novo lar
      para a humanidade.
    </FilmeCard>

    <Card/>

     <Footer/>
    </>
  )
}
// Teste para GitHub
export default App

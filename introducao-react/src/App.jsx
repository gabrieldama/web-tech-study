import "./App.css"
import Header from "./Components/Header"
import Card from "./Components/Card"
import Banner from "./Components/Banner"
import ImgCard from "./Components/ImgCard"
import Count from "./Components/Count"
import FilmeCard from "./Components/FilmeCard"
import Footer from "./Components/Footer"
import Box from "./Components/Box"
import SideBar from "./Components/SideBar"
import Valorant from "./Components/Valorant"

function App() {
  return (
    <div className="app-layout">

      <main className="app-content">
       <section id="inicio">

        <Header title="Introdução React"/>

        <ImgCard caption="New Lorem Ipsum" />

        <Banner>
          <h1>Bem-vindo ao meu site</h1>
          <p>Aqui você econtra os meus testes com React</p>
        </Banner>

       </section>

      <SideBar />

       <section id="componentes">
        
        <Count />

        <Box />
        <Valorant />

        <Card/>
       </section>

       <section id="sobre">
        <Footer title="New Lorem ipsum dolor sit amet con."/>
       </section>

       {/* <FilmeCard titulo="Interestelar" genero="Ficção científica">
        Uma viagem emocionante pelo espaço e pelo tempo.
      </FilmeCard>

  <p></p>

      <FilmeCard titulo="A vida é bela" genero="Drama">
        Uma história comovente da época dos campos de concentração.
      </FilmeCard> */}
      </main>
    </div>
  )
}
// Teste para GitHub
export default App

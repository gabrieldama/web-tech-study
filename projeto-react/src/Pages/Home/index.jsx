import Box from "../../Components/Box"
import img1 from "../../assets/img/box-1.jpg"
import img2 from "../../assets/img/box-2.jpg"


function index() {
  return (
    <main className='container'>
        <section className='d-flex'>
            <Box 
              title='Titulo do componente'
              description='Isto é uma descrição de exemplo para o componente'
              imagem={img1}
            />
            <Box  
              title='Titulo do componente 2'
              description='Isto é uma descrição de exemplo para o componente 2'
              imagem={img2}
              />
        </section>
    </main>
  )
}

export default index
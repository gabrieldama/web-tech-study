import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import NotFound from './Pages/NotFound'
import Nav from './Components/Nav'
import FAQ from './Pages/FAQ'
import Usuarios from './Pages/Usuarios'

function Router() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
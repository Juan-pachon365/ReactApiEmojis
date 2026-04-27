import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import Favoritos from './Favoritos/Index'
import Home from './Home/Index'
import Informativa from './Informativa/Index'

import Usuarios from './Usuarios/Index'
import Original from './Original/Index'
import Emoji from "./Emoji/Index";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
       <nav className='c-menu'>
              <Link to="/"><img src="https://es.pngtree.com/free-png-vectors/home-icon" /><p>Home</p></Link>
      <Link to="/favoritos"><img src="https://www.freepik.es/vector-premium/icono-favoritos-icono-corazon-vector-cuadrado-esquinas-redondeadas-elemento-concepto-ui-aplicaciones-tienda-linea-diseno-logotipos_20527459.htm" /><p>Favoritos</p></Link>
      <Link to="/original"><img src="https://media.istockphoto.com/id/1448912272/vector/soccer-ball-ico" /><p>Original</p></Link>
      <Link to="/informativa"><img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/more-info-icon.png" /><p>Informativa</p></Link>    
      <Link to="/usuario"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s" /><p>Usuario</p></Link>

       </nav>

      <Routes>

     <Route path="/" element={<Home /> } />
        <Route path="/emoji/:id" element={<Emoji />} />
        <Route path="/favoritos" element={<Favoritos /> } />
        <Route path="/original" element={<Original /> } />
        <Route path="/informativa" element={<Informativa /> } />
        <Route path="/usuarios" element={<Usuarios /> } />

    </Routes>

    </Router>
  )
  
}

export default App

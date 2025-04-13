
import './App.css'

import { BrowserRouter, Link, Route, Routes } from "react-router"


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { Header } from './compoments/header/Header';
import { Sobre } from './pages/Sobre';
import Contato from './pages/Contato';
import Home from './pages/Home';
import NaoEncontrado from './pages/NaoEncontrado';



function App() {



  return (
    <>
    <BrowserRouter>
      <Header />


      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/sobre' element={<Sobre />}  />
        <Route path='/contato' element={<Contato />}  />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

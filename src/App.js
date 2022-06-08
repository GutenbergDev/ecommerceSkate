import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagina404 from './Components/Pagina404';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shapes from './Components/Header/Menu/Shapes';
import Trucks from './Components/Header/Menu/Trucks';
import Rodas from './Components/Header/Menu/Rodas';
import Rolamentos from './Components/Header/Menu/Rolamentos';
import Lixas from './Components/Header/Menu/Lixas';
import DestaqueOne from './Components/Pages/DestaqueOne';
import DestaqueTwo from './Components/Pages/DestaqueTwo';
import "slick-carousel/slick/slick.css"; 
import Produto from './Components/Pages/Produto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='shapes' element={<Shapes />} />
            <Route path='trucks' element={<Trucks />} />
            <Route path='rodas' element={<Rodas />} />
            <Route path='rolamentos' element={<Rolamentos />} />
            <Route path='lixas' element={<Lixas />} />

            <Route path='destaque-flip' element={<DestaqueOne />} />
            <Route path='destaque-inverno' element={<DestaqueTwo />} />
            <Route path='produto/:nameId' element={<Produto />} />
            

            <Route path='*' element={<Pagina404 />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

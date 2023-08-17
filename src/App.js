import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Contato from './pages/home/contato/contato';
import Foto from './pages/fotos/foto';
import Comentario from './pages/home/comentarios/comentario';


function App(){

    
    return(
        <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Contato' element={<Contato />} />
            <Route path='Foto' element={<Foto />} />
            <Route path='Comentario' element={<Comentario/>} />

        </Routes>
        </BrowserRouter>
        </div>
    
    );
}

export default App;
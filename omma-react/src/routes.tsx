import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 'react-router-dom';
import Inicio from './pages/Inicio';
import Receitas from './pages/Receitas';
import ReceitasInternas from './pages/ReceitasInternas';
import Contatos from './pages/Contatos';

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/receitas' element={<Receitas/>}/>
            <Route path=':id' element={<ReceitasInternas/>}/>
            <Route path='/contato' element={<Contatos/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
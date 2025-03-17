import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Commonpage from '../CommonPage/Commonpage';
import AboutusPage from '../Aboutus/AboutusPage';

function RouterPage() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Commonpage/>}>
         
        </Route>
        <Route path='/aboutus' element ={<AboutusPage/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterPage />);
export default RouterPage;
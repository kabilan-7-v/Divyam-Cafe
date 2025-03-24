import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Commonpage from '../CommonPage/Commonpage';
import AboutusPage from '../Aboutus/AboutusPage';
import FeedbackPage from '../Feedback/FeedbackPage';
import MenuCardPage from '../Menubar/MenuCardPage';
import EnquiryPage from '../EnquiryPage/EnquiryPage';
import Attractionpage from '../Attraction/Attractionpage';

function RouterPage() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Commonpage/>}>
         
        </Route>
        <Route path="/menu" element={<MenuCardPage/>}>
         
        </Route>
        <Route path="/feedback" element={<FeedbackPage/>}>
         
         </Route>
         <Route path='/enquiry' element ={<EnquiryPage/>}></Route>

        <Route path='/aboutus' element ={<AboutusPage/>}></Route>
        <Route path='/attraction' element ={<Attractionpage/>}></Route>


      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterPage />);
export default RouterPage;
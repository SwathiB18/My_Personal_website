"use client"

  
    import { BrowserRouter ,Routes, Route, } from 'react-router-dom';


  



import Home from "./Home";
import AboutPage from "./AboutPage";
import ContactPage from './Contact';



    const App=()=>{
    
    
     
      
    return(
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
         </Routes>
     </BrowserRouter>
      
       
       
    
    );
      }
export default App ;

import logo from './logo.svg';
import './App.css';
import Header from './Common Components/Header';
import Footer from './Common Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Team from './Pages/Team';
import Project from './Pages/Project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Pages from './Pages/Pages';
import Layout from './Common Components/Layout';
import BannerSection from './Common Components/BannerSection';


function App() {
  return (
    <>
    {/* <Pages/> */}
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
        
         <Route index element={<Home />} /> 
         <Route path="/about" element={
          <>
          <BannerSection/>
          <About/>
          </>
         } />
         <Route path="/courses" element={
          <>
          <BannerSection/>
          <Courses/>
          </>
         } />
         <Route path="/team" element={
          <>
          <BannerSection/>
          <Team />
          </>
         } />
         <Route path="/project" element={
          <>
          <BannerSection/>
          <Project />
          </>

         } />
         
         <Route path="/pages" element={
          <>
          <BannerSection/>
          <Pages />
          </>
         }/>
         <Route path="/contact" element={
          <>
          <BannerSection/>
          <Contact />
          </>
         }/>
         
         
       
         </Route>
     </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;

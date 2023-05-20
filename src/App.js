
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componant/Footerpage/Footer';
import Heropage from './Componant/Mainheropage/Heropage/Heropage';
import Mainnavber from './Componant/Mainnavber/Mainnavber';
import Maintopbar from './Componant/Maintopbar/Maintopbar';
import Aboutpage from './Componant/Mainaboutpage/Aboutpage/Aboutpage';
import Doctorpage from './Componant/Maindoctorpage/Doctorpage/Doctorpage';
import Newspage from './Componant/Mainnewspage/Newspage/Newspage';
import Contactpage from './Componant/Maincontactpage/Contactpage/Contactpage';

function App() {
  return (
    <div className="App">
      <Maintopbar />
      <Mainnavber />
      <Routes>
      <Route path="/" element={ <Heropage />} /> 
      <Route path="/about" element={ <Aboutpage/>} /> 
      <Route path="/doctor" element={  <Doctorpage/>} /> 
      <Route path="/news" element={  <Newspage/>} /> 
      <Route path="/contact" element={  <Contactpage/>} /> 
     
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;

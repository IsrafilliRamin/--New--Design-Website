
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Products from './pages/products/Products';
import SignUp from './pages/SignUp/SignUp';




function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>



    </>
  );
}

export default App;

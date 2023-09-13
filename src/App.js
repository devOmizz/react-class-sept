import logo from './logo.svg';
import './App.css';
import Home from './Home';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import FetchData from './api/FetchData';
import ProductSingle from './api/ProductSingle';
import { useEffect, useState } from 'react';

function App() {
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(reponse => reponse.json())
        .then(data => {
            // console.log(data);
            setData(data);
        })
        .catch('Failed to fetch')       
      
    },[])
    const myData = data


  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<FetchData/>}/>
          <Route path='/product/:id' element={<ProductSingle myData = {myData}/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Home/ */}
    </div>
  );
}

export default App;

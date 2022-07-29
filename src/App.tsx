import React from 'react';
import './App.css';
import Home from '../src/pages/Home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
<link rel="stylesheet" href="./Navbar.css"></link>

function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  );
}

export default App;

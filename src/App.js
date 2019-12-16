import React from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css';
import Footer from "./components/Footer"
import MyInfo from "./components/MyInfo"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;

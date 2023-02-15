import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Cıkıs() {

  const navigate = useNavigate();

  const[allProducts, setAllProducts] = useState([]);

  useEffect(() => {

    localStorage.setItem("userName", "");

    }, [])

  return (
<div className="App">
    <br />
    <br />
    <h2>Çıkış Yapıldı</h2>

</div>
  );
}

export default Cıkıs;

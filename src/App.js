
import './App.css';
import React, {useState,useEffect} from "react";
import {API_URL} from '../src/API'
import axios from "axios";
import {Routes,Route} from 'react-router-dom'
import BooksList from './componets/BooksList';
import BookDetails from './componets/BookDetails';
import Favorites from './componets/Favorites';
import Navbar from './componets/navbar';
import Footer from './componets/Footer';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const[ books, setBooks] = useState ([]);

  useEffect(()=> {
    axios.get(API_URL)
    .then((res) =>{
        console.log(res.data)
        setBooks(res.data)
    })
    .catch((err) => console.log(err));

} , []);
const handlechange = e => 
{
setbusqueda(e.target.value);
filtrar(e.target.value);
}

const filtrar =(terminobusqueda)=> {
  var resultadosbusqueda=books.filter((element)=>{
    if(element.name.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
    ||  element.company.name.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
    ){
  return element
    }
  });
  setBooks(resultadosbusqueda)
}
  return (
    <div className="App">
      <AuthProvider>
        <Navbar/>
      <Routes>
      <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        <Route path='/' element={<BooksList/>}/>
        <Route path='/book/:id' element={<BookDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;

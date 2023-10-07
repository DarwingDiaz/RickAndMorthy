import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";


function App() {
   const [characters,setCharacters]= useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id)=>{

      setCharacters(
         characters.filter( (char) =>{
            return char.id !== Number(id);
         })
      );
   };

   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   const EMAIL = "darwing@gmail.com";
   const PASSWORD = "asd1234";

   const login = (userData)=>{
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const location = useLocation();
  
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path="/" element={<Form login = {login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path={"/detail/:id"} element={<Detail/>}/>
            <Route path={"/favorites"} element={<Favorites/>}/>
         </Routes>
      </div>
   )
}
export default App

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
   
   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
   //       ({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   //! ASYNC AWAIT

   const onSearch = async (id) =>{
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

         if (data.name){
            setCharacters((oldChars) => [...oldChars, data])
         }else{
            window.alert("¡No hay personajes con este ID!");
         }

      } catch (error) {
         console.error(error);
      }
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

   // const EMAIL = "darwing@gmail.com";
   // const PASSWORD = "asd1234";

   // const login = (userData)=>{
   //    if (userData.email === EMAIL && userData.password === PASSWORD) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
   //!PROMESAS
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }
   //! ASYNC AWAIT
   const login = async (userData) =>{
      try {
         const { email, password} = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
   
         const {data} = await axios(URL + `?email=${email}&password=${password}`);


         const {access} = data;
         setAccess(data);
         access && navigate('/home');

      } catch (error) {
         window.alert("Datos incorrectos");
      }
   }


   useEffect(() => {

      access? navigate('/home') : navigate('/');
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

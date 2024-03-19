import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites.jsx';



function App() {
   // const APIKEY = 'pi-arielgnz';
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const {pathname} = useLocation();
   //const EMAIL = 'mail@mail.com';
   //const PASSWORD = '3794ariel';
   const URL = 'http://localhost:3001/rickandmorty/';


   function login ({email, password}){
      axios(`${URL}login?email=${email}&password=${password}`)
         .then(({data}) => {
            const {access} = data;
            if (access){
               setAccess(access);
               navigate('/home');
            } else {
               alert('Usuario y/o Constraseña incorrectos');
            }
            
         }) 
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
     
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({data}) => {
         if (data.name){
            setCharacters(oldCharacters => [...oldCharacters, data])
         } else {
            alert("Personaje no encontrado")
         }
      }).catch(error => alert(error.message))
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch = {onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters = {characters} onClose = {onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
         </Routes>
         
         
      </div>
   );
}

export default App;

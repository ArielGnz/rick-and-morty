import { useState } from "react";
import styles from './SearchBar.module.scss'


export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleSearch = (id) => {
      onSearch(id);
      setId("");
   }

   const handleKeyDown = (event) =>{
      if (event.key === 'Enter'){
         handleSearch(id);
      }
   }

   return (
      <div className={styles.searchbar}>
         <input 
          type='search'
          value = {id} 
          placeholder = "Ingrese un ID" 
          onChange = {handleChange}
          onKeyDown={handleKeyDown}
         />

         <button className={styles.searchbarbtn} onClick={() => handleSearch(id)}>🔎</button>
      </div>
   );
}

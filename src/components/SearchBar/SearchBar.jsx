import React from 'react';
import styles from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({onSearch}) {

   const [ id, setId] = useState("");

   function handleChange(e){
      setId(e.target.value);
   }

   return (
      <div className={styles.barra}>
         <input className={styles.texto}
         type='search' 
         placeholder='id...' 
         onChange={handleChange} 
         value={id}
         />
         <button className={styles.btn}
            onClick ={() => onSearch(id)}> 
            Agregar 
         </button>
      </div>
   );
}
 
export default SearchBar;
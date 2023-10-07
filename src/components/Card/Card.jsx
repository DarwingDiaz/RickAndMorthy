import { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';


function Card(props){ 
   
   const {name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites} = props ;
  
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

 
   
   return (
      <div className={styles.cardContainer}>

         <div className={styles.header}>

            <div className={styles.botonfav}>
               <button  className={styles.fav} onClick={handleFavorite}>❤️</button> 
               <button className={styles.nofav} onClick={handleFavorite}>x</button> 
            </div>

            <div className={styles.botonCierre}>
               <button onClick={() => onClose(id)}>X</button>
            </div>

            <img src={image} alt='' />
         
         </div>
         <div className={styles.caracteristicas}>
            <div className={styles.nombre}>
               <Link to={`/detail/${id}`}>
                  <h1>{name}</h1>
               </Link>
            </div>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
            <h2>{origin}</h2>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav : (character) => {
         dispatch(addFav(character))
      },
      removeFav : (id) => {
         dispatch(removeFav(id))
      },
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   };
}

export default connect(mapStateToProps , mapDispatchToProps)(Card);
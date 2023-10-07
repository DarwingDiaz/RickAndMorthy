import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Detail.module.css';
import axios from 'axios';

function Detail(){
    
    const {id} = useParams();
    const [character, setCharacter] = useState([]);
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);
    
    return(
    <div className={styles.detail}> 
            <div className={styles.caracteristicas}>
                <h1>Name: {character.name}</h1>
                <h1>Status: {character.status}</h1>
                <h1>Specie: {character.species}</h1>
                <h1>Gender: {character.gender}</h1>
                {character.origin && <h1>Origin: {character.origin.name}</h1>}
            </div>
            <img className={styles.img} src={character.image} alt=""/>
        </div>
    )
}

export default Detail;
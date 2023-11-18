import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import {Link} from "react-router-dom";

function Nav({onSearch}) {
    return(
        <header className={styles.naveg}>
            <a className={styles.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="logo"/>
            </a>
            <div className={styles.botones}>
                <Link to="/about">
                    <button className={styles.about}>About</button>
                </Link>
                <Link to="/home">
                    <button className={styles.home}>Home</button>
                </Link>
                <Link to="/favorites">
                    <button className={styles.favorites}>Favorites</button>
                </Link>
                <SearchBar onSearch={onSearch}/>
            </div>
            
       </header>
    )
    
}


export default Nav;
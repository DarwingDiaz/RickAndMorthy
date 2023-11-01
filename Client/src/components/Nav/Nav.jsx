import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import {Link} from "react-router-dom";

function Nav({onSearch}) {
    return(
        <div className={styles.naveg}>
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
    )
    
}


export default Nav;
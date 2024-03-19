import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import LogoNav from '../../../assets/LogoNav.png';
import styles from './Nav.module.scss';


function Nav({onSearch}){
    return(
        <div className={styles.container}>
            {/* div para logo*/}
            <div className={styles.Logo}>
                <img src={LogoNav} alt="Logo R&M" />
            </div>

            {/* div para search y novigation*/}
            <div className={styles.container2}>
                <div className={styles.Items}>
                    <Link to='/home' className={styles.linknav}>
                        <span className={styles.itemsNav}>Home</span>
                    </Link>
                    
                    <Link to='/About' className={styles.linknav}>
                        <span className={styles.itemsNav}>About</span>
                    </Link>
                </div>
                
                <SearchBar onSearch={onSearch}/>
                <Link to='/Favorites'><button>Favorites</button></Link>
            </div>
            
        </div>
    )
}

export default Nav;
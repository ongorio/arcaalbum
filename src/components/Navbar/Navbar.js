import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

import {AuthContext} from "../../context/AuthContext";

function Navbar () {

    const ctx = useContext(AuthContext);

    return <nav className={`${styles['m-nav-navbar']}`}>
        <div className={`${styles['m-nav-body']}`}>
            <div className={`${styles['m-nav']}`}>
                <NavLink to={'/'} className={`${styles['m-nav-link']}`}>Inicio</NavLink>
                <NavLink to={'/album'} className={`${styles['m-nav-link']}`}>Album</NavLink>
                <NavLink to={'/perfil'} className={`${styles['m-nav-link']}`}>Perfil</NavLink>
            </div>
            <div className={`${styles['m-nav']} m-ml-auto`}>

                {!ctx.userInfo.isAuthenticated &&
                    <NavLink to={'/ingresar'} className={`${styles['m-nav-link']}`}>Ingresar</NavLink>
                }
                {!ctx.userInfo.isAuthenticated &&
                    <NavLink to={'/registrar'} className={`${styles['m-nav-link']}`}>Registrar</NavLink>
                }

                {ctx.userInfo.isAuthenticated &&
                    <NavLink onClick={ctx.logout} className={`${styles['m-nav-link']}`}>Salir</NavLink>
                }
            </div>
        </div>
        
    </nav>
}

export default Navbar;
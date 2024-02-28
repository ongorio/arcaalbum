import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar () {
    return <nav className={`${styles['m-nav-navbar']}`}>
        <div className={`${styles['m-nav-body']}`}>
            <div className={`${styles['m-nav']}`}>
                <NavLink to={'/'} className={`${styles['m-nav-link']}`}>Inicio</NavLink>
                <NavLink to={'/album'} className={`${styles['m-nav-link']}`}>Album</NavLink>
                <NavLink to={'/'} className={`${styles['m-nav-link']}`}>Perfil</NavLink>
            </div>
            <div className={`${styles['m-nav']} m-ml-auto`}>
                <NavLink to={'/ingresar'} className={`${styles['m-nav-link']}`}>Ingresar</NavLink>
                <NavLink to={'/registrar'} className={`${styles['m-nav-link']}`}>Registrar</NavLink>
                <NavLink to={'/'} className={`${styles['m-nav-link']}`}>Salir</NavLink>
            </div>
        </div>
        
    </nav>
}

export default Navbar;
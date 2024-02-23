import { NavLink } from "react-router-dom";

function Navbar () {
    return <>
        <NavLink to={'/album'}>Album</NavLink>
        <NavLink to={'/'}>Perfil</NavLink>
        <NavLink to={'/'}>Ingresar</NavLink>
        <NavLink to={'/'}>Salir</NavLink>
        
    </>
}

export default Navbar;
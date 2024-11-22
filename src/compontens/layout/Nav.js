import { NavLink } from "react-router-dom";



const Nav = (props) => {

    return (
        <nav  >
         
                <ul className="holder">
                    <li>< NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</ NavLink></li>
                    <li>< NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</ NavLink></li>
                    <li>< NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</ NavLink></li>
                    <li>< NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</ NavLink></li>
                </ul>

 
        </nav>

    )
}





export default Nav;
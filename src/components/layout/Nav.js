import React from 'react';
import { NavLink } from 'react-router-dom';

import useAuthData from '../../hooks/useAuthData';
import { useHistory } from 'react-router';

import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    const { setToken, getToken } = useAuthData();
    const token = getToken();
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        setToken('');
        history.push('/');
    }

    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                    {/* {token ? (
                        <>
                            <li><NavLink activeClassName="activo" exact to="/misrecibos">Mis Recibos</NavLink></li>
                            <li><a href="#" onClick={(e) => handleLogout(e)}>Logout</a></li>
                        </>
                    ) : (
                        <li><NavLink activeClassName="activo" exact to="/login">Login</NavLink></li>
                    )} */}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
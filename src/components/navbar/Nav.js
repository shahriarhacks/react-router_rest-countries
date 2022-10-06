import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='countries'>Countries</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </div>
    );
};

export default Nav;
import React, { useState } from 'react';
import { getUser } from '../Utils/Common';

// PACKAGES
import { Link, NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaAccusoft, FaTimesCircle } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const isLogged = getUser();

  // Changing the navbar color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const styleMenu = {
    left: menu ? 0 : '-100%',
  };

  // Logged in router
  const loggedRouter = () => {
    return (
      <>
        <li>
          <NavLink
            exact
            to='/charts'
            className='link'
            activeClassName='link-active'
          >
            Bar Chart
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/pie_chart'
            className='link'
            activeClassName='link-active'
          >
            Pie Chart
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/line_chart'
            className='link'
            activeClassName='link-active'
          >
            Line Chart
          </NavLink>
        </li>
        <li>
          <NavLink to='/tables' className='link' activeClassName='link-active'>
            Tables
          </NavLink>
        </li>
        <li onClick={logoutUser}>Logout</li>
      </>
    );
  };

  // THE SECTION OF THE LOGOUT FUNCTION
  const logoutUser = async () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('data');
    window.location.href = '/';
  };

  return (
    <header className={navbar ? 'navbar active' : 'navbar'}>
      <div className='logo'>
        <Link to='/charts'>
          <FaAccusoft className='logo-icon' />
          SkyHigh
        </Link>
      </div>

      <div className='menu' onClick={() => setMenu(!menu)}>
        <BiMenuAltRight />
      </div>

      <ul
        className='header-link'
        style={styleMenu}
        onClick={() => setMenu(!menu)}
      >
        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <NavLink
              exact
              to='/'
              className='link'
              activeClassName='link-active'
            >
              Login
            </NavLink>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <FaTimesCircle className='close-menu' />
        </li>
      </ul>
    </header>
  );
};

export default Header;

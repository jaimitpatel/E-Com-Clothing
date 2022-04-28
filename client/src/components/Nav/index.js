import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className='navbar navbar-expand-lg navbar-light bg-light'>
          <li className='mx-1'>
            <Link to='/orderHistory'>Order History</Link>
          </li>
          <li className='mx-1'>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href='/' onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to='/signup'>Signup</Link>
          </li>
          <li className='nav-item nav-link'>
            <Link to='login' className='btn btn-outline-dark m-2'>
              <i className='fa fa-sign-in'></i> Login
            </Link>{' '}
          </li>
        </ul>
      );
    }
  }

  return (
    <header className='flex-row px-1'>
      <h1>
        <Link className='navbar-brand' to='/'>
          Jamie's
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;

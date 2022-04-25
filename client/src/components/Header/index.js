import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo2.png';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Jamie's" />
                    </Link>
                </div>
                <div className="signuplink">
                    <ul>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

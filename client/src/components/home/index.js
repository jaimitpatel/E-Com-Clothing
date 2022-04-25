/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SummerClothing from './../../assets/summer.jpg';
import WinterClothing from './../../assets/jacket.jpg';
import './styles.scss';

const Directory = () => {
    return (
        <Fragment>
            <div className="home">
                <div className="wrap">
                    <div
                        className="choice"
                        style={{ backgroundImage: `url(${SummerClothing})` }}
                    >
                        <a>Summer Clothing</a>
                    </div>
                    <div
                        className="choice"
                        style={{ backgroundImage: `url(${WinterClothing})` }}
                    >
                        <Link to="winter">Winter Clothing</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Directory;

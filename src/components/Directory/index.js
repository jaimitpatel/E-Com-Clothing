/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import SummerClothing from './../../assets/summer.jpg';
import WinterClothing from './../../assets/jacket.jpg';
import './styles.scss';

const Directory = () => {
    return (
        <div className="directory">
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
                    <a>Winter Clothing</a>
                </div>
            </div>
        </div>
    );
};

export default Directory;

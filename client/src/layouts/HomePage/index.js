import React from 'react';
import Header from './../../components/Header';

export const HomeLayout = (props) => {
    return (
        <div className="h">
            <Header />
            {props.children}
        </div>
    );
};

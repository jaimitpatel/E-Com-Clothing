import React from 'react';
import Header from './../../components/Header';

export const MainLayout = (props) => {
    return (
        <div>
            <Header />
            <div className="main">{props.children}</div>
        </div>
    );
};

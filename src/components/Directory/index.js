/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { Fragment} from "react";
import SummerClothing from './../../assets/summer-clothes.jpg';
import WinterClothing from './../../assets/Winter-Clothes.jpg';

const Directory = () => {
    return (
        <Fragment>
        <div className="directory">
           <div className="wrap">
            <div className="item" style={{backgroundImage: `url (${SummerClothing})`}}>
                <a>
                Summer Clothing
                </a>
            </div>
            <div className="item" style={{backgroundImage: `url (${WinterClothing})`}}>
                <a>
                Winter Clothing
                </a>
            </div>
          </div>  
        </div>
        </Fragment>
    );
};

export default Directory;


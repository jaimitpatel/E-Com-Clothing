import React from "react";
import SummerClothing from './../../../assets/summer-clothes.jpg';
import WinterClothing from './../../../assets/Winter-Clothes.jpg';

const Directory = () => {
    return (
        <div className="selection">
             <div className="wrap">
                <div
                 className="item"
                style={{
                 backgroundImage: `url (${SummerClothing})`
                 }}>                     
              </div>
              <div
                 style={{
                  backgroundImage: `url (${WinterClothing})`
                }}>                    
                </div>
</div>
</div>

</div>
    );
};

export default Directory;
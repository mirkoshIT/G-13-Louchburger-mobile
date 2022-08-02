import React from "react";
import "../Mirkomil/Mirkomil.css"
import elips from "./assests/Ellipse 1.svg"
import elips_botom from "./assests/Ellipse 2.png"

export function Mirkomil(arams) {
    return(
        <div>
           <div className="loading">
           <div className="sec_top">
            <img className="sec_top_img" src={elips} alt="" />
           </div>
           <div  className="sec_centor">
            
            <span className="sashlik">shashlik</span>
            <span className="sashlik bgc">uz</span>
           </div>
           <div className="sec_bottom">
            <img src={elips_botom} alt="" />
           </div>
           </div>
        </div>
    )
}
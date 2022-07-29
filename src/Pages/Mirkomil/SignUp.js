import React from "react";
import "./Mirkomil.css"
export function SignUp() {
    return(
        <div>
            <div className="loading">
                <p className="royxat">Ro`yxatdan o`tish</p>


                <form action="">


                    <input type="text" placeholder="Name "/>
                    <input type="text"   placeholder="Number" />
                    <input type="text"  placeholder="Password"/>
                    <input className="btn_sign" type="submit" value="Sign Up"  />
                </form>
                <hr />
               
                
            </div>
        </div>
    )
}
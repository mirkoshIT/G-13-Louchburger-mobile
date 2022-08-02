import React from "react";
import { Mirkomil } from "../Pages/Mirkomil/Mirkomil";
import { Muhammadsaid } from "../Pages/Muhammadsaid/Muhammadsaid";
import { Bobur } from "../Pages/bobur/Bobur";
import { SignUp } from "../Pages/Mirkomil/SignUp";
import { SignIn } from "../Pages/Mirkomil/SignIn";


export function Main(){
    return(
        <div >
            {/* <Mirkomil/> */}
            {/* <Muhammadsaid/> */}
            <Bobur/>
            <SignUp/>
            <SignIn/>

        </div>
    )
}
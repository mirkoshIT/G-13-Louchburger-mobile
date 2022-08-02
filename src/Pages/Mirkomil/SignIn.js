import react from "react";
import "./assests/SignIn.css"
export function SignIn() {
    return(
        <div className="signin" >
                <p className="xodimlaroyxati">xodimlar ro`yxati</p>
                <form action="">
                    <input type="text"  placeholder="Name"/>
                    <input type="password"  placeholder="Password"/>
                    <input className="btn_sign" type="submit" value="Sign in" />
                </form>
        </div>
    )
}
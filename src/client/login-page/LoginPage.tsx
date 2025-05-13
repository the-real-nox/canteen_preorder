import logo from '../img/HTL_Kaindorf_Logo.png'
import Image from "react-bootstrap/Image";
import "../css/login-page.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"

export const LoginPage = () => {
    return (
        <>
            <div className={"text-center page"}>
                <Image src={logo} className={"img-fluid logoScale"}/><br/>
                <input type={"text"} className={"inputStyle mt-2"}/><br/>
                <input type={"text"} className={"inputStyle mt-1"}/>
            </div>
        </>
    );
};
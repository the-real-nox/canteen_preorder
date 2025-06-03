import logo from '../img/HTL_Kaindorf_Logo.png'
import Image from "react-bootstrap/Image";
import "../css/login-page.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 vw-100'>
                <div className={"text-center page"}>
                    <Image src={logo} className={"img-fluid logoScale"} /><br />
                    <input type={"text"} className={"inputStyle mt-2"} placeholder={"name"} /><br />
                    <input type={"password"} className={"inputStyle mt-1"} placeholder={"password"} /><br />
                    <div className="d-flex justify-content-between align-items-center w-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
                        <button className={"loginButtonFirst mt-1"}>Login in</button>
                        {/*<button className={"loginButtonSecond mt-1"} onClick={() => navigate("/login365")}>Login in (Microsoft 365)</button>*/}
                        <a onClick={() => navigate("")} className={"link"}>Microsoft 365?</a>
                    </div>
                </div>
            </div>
        </>
    );
};
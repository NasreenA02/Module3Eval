import { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
    const emailRef=useRef();
    const {login} =
    useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ");
    const [password, setPassword]= useState(" ");
    useEffect(() => {
        emailRef.current.focus();
    }, []
);
const handleLogin=()=>{
    const role=login(email, password);
    if(!role) {
        alert("wrong email or password");
    }else {
        alert("Login succesfull");
        navigate(role==="admin" ? "/admin" : "/customer");
    }
    };
    return (
        <div>
            <h2>Login</h2>
            <input ref={emailRef} placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

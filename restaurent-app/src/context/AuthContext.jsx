import { createContext, useState } from "react";
export const AuthContext = createContext();
export function AuthProvider({children}) {
    const[user, setUser] =useState(
        JSON.parse(localStorage.getItem("authUser") )|| null );
const login=(email, password) => {
    if(email==="admin@gmail.com" && password==="admin1234"){
        const u = {role: "admin"};
    localStorage.setItem("authUser", JSON.stringify(u))
    setUser(u)
    return "admin";
    }
if(email==="customer@gmail.com" && password==="customer1234"){
        const u = {role: "customer"};
    localStorage.setItem("authUser", JSON.stringify(u))
    setUser(u)
    return "customer";
}
return null;
};
const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
}
return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
}

import { createContext,useState,useEffect } from "react";
import { login,register,getme } from "./services/auth.api";

export const Authcontext= createContext()

export function Authprovider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin= async (username,password)=>{
        setLoading(true)
        try{
            const response= await login(username,password)
            setUser(response.user)
        }
        catch(err){
            console.log(err);
            
        }
        finally{
            setLoading(false)
        }
    }



     const handleRegister= async (username,email,password)=>{
        setLoading(true)
        try{
            const response= await login(username,email,password)
            setUser(response.user)
        }
        catch(err){
            console.log(err);
            
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <Authcontext.Provider
            value={{
                user,
                loading,
                handleLogin,
                handleRegister,
                setUser
            }}
        >
            {children}
        </Authcontext.Provider>
    )
    
}

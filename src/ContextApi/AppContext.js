import React, { useState, createContext } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [lang, setLang] = useState('tamil');
    const [PopupState, setPopupState] = useState(false);
    
    const tamil = () =>{
        setLang('tamil');
    }
    const english = ()=>{
        setLang('english');
    }

    const languageSwitch = () =>{
        if(lang === 'english'){
            setLang('tamil')
        } else{
            setLang('english')
        }          
    }
    const value ={
        lang,
        languageSwitch,
        PopupState,
        setPopupState
    }
    useEffect(()=>{
        
    },[]);

    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );

};

export default AuthProvider
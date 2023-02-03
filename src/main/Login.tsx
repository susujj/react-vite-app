import { useState, useContext, } from 'react'
import React from "react";
import {
    useNavigate
} from "react-router-dom";
import { myContext } from "@/redux/reducer";
function Login() {
    const { state, dispatch } = useContext(myContext);
    const navigate = useNavigate();




    const forward = () => {
        let login = true;
        // setCollapsed(collapsed);
        // collapsed = showLeftMenu;
        // setMainContentStyle(showLeftMenu ? {
        //   padding: '0px',
        //   marginLeft: "80px"
        // } : {
        //   padding: '0px',
        //   marginLeft: "200px"
        // });
        dispatch({ type: "login" })
        if (login) {
            navigate("/overview", {
            });
        }
    };
    const test = () => {
        dispatch({ type: "test" })
     
    };
    
    return (<div>
        <h2>Login</h2>
        <button onClick={forward}>login</button>
        <button onClick={test}>test</button>
    </div>);
}
export default Login
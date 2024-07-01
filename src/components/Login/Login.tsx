import React, { useCallback, useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom"

import { useLogin } from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const { user , login } = useLogin();
    const navigate = useNavigate()
   
    const onSignup = () => {
        try {
          const userCheck =  checkLogin();
          
         if(userCheck?.username != '') {
            alert("Login Success");
            login(userCheck);   
            navigate('/search-product');
         } else {
            alert("Login Failed");
         }
         
        } catch (err: any) {
         alert("Login Failed");
         
        }
      };

      const checkLogin = () => {
        if(username == 'admin' && password == '123456' ) {
              return {
                username,
                name 
              }  
        } else {
            return {
                username : '',
                name : ''
              }  
        }
      }

      console.log("user====>", user);
    
      if (user?.username) {
        return <Navigate to="/search-product" />
      }

    return (<><div className="login">
        <h4>Login</h4>
        <form onSubmit={(e) => {
            e.preventDefault();
            onSignup();
        } }>

            <div className="text_area">

            <input
                    type="text"
                    id="name"
                    name="name"
                    className="text_input"
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value) }
                />

            </div>

            <div className="text_area">
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="text_input"
                    placeholder='Enter your username'
                    onChange={(e) => setUsername(e.target.value) }
                />
            </div>
            <div className="text_area">
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="text_input"
                    onChange={(e) => setPassword(e.target.value) }
                />
            </div>
            <input
                type='submit'
                value="Signup"
                className="btn"
               
            />
        </form>
    
    </div>
    
        <style>

            {
                `body{
   
    height: 100vh;
    width: 100%;
    text-align: center;
}

h4{
    font-family: 'Segoe UI', bold;
    font-size: 35px;
    margin-top: 4rem;
    margin-bottom: 2rem;
}

form{
    display: inline-block;
    align-items: center;
    height: 270px;
    width: 350px;
    margin-bottom: 170px;
}
.text_area{
    align-content: center;
   
    margin-bottom: 35px;
    width: 100%;
    height: 64px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
}

.text_input{
    margin-top: 1.2rem;
    font-family: 'Montserrat regular';
    font-size: 20px;
    border: none;
    width: 80%;
}

.btn{
    margin-top: 28px;
    width: 165px;
    height: 60px;
   
    background: blue;
    border: none;
    font-family: 'Montserrat';
    font-size: 20px;
    color: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(181, 141, 237, 0.7), 0 6px 20px 0 rgba(181, 141, 237, 0.9);
    cursor: pointer;
}

.login{
    display: inline-block;
    background: #FFFFFF;
    width: 434px;
    height: 700px;
    margin-top: 10%;
   
   
}

.link{
    color: #0E4579;
    font-family: 'Montserrat light';
    font-size: 18px;
    cursor: pointer;
    display: block;
    text-decoration: none;
}`
            }

        </style>

</>);



}

export default Login;

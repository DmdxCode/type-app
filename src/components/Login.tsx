import React from 'react'
import styled from 'styled-components'
import { IoReturnUpBack } from "react-icons/io5";
import "@fontsource/comfortaa"
import { Link } from 'react-router-dom';


function Login() {
  return (
    <Page>
        <Contents   >
        <Link to='/' style={{textDecoration: "none", color: "black"}} >
            <IoReturnUpBack style={{fontSize: "large", marginBottom: "50px"}}/> 
        </Link>
        
        <b>Log in</b>
        <form>
           <Input1><input placeholder='Email' type="email" id="@" required/></Input1> 
           <Input2><input  placeholder='Password' type='password' /></Input2>
           <Link to='/discover' style={{textDecoration: "none"}} >
                <Button>
                    LOG IN
                </Button>
           </Link>
           
        </form>
        
        </Contents>
    </Page>

  )
}

export default Login
const Button = styled.button`
width: 72vw;
height: 5vh;
margin-top: 15px;
background-color: #8BC34A;
border-radius: 5px; 
border: 1px solid #8BC34A;
color: white;
cursur: pointer;
font-weight: 600;

@media (min-width: 700px) {
    height: 5vh;
    width: 37vw; 
    
}
@media (min-width: 1000px) {
    height: 7vh;
    width: 36vw; 
}
`
const Page = styled.div`
background-color: white;

@media (min-width: 700px) {
    display: flex-box;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
   
  }
  
  overflow: hidden;
  
  padding-top: 0px;
  padding-bottom: 0px;

`
const Contents = styled.div`
margin-top: 200px;
display: grid;
align-items: center;

@media (min-width: 1000px) {
    display: flex-box;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
     
     margin-top: 150px;
  }

  b {
    font-family: comfortaa;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

`
const Input1 = styled.form`
input{
    -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    font-size: 16px;
    height: 5vh;
    width: 68vw;
    border: 1px solid #8BC34A;
    padding-left: 10px;
    border-radius: 5px;
    margin-top: 30px;
    font-weight: 400;
    font-size: 20px;
    @media (min-width: 700px) {
        height: 5vh;
        width: 35vw; 
        margin-top: 50px; 
    }
  }
  
`
const Input2 = styled.form`

input{
    -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    font-size: 16px;
    height: 5vh;
    width: 68vw;
    padding-left: 10px;
    border: 1px solid #8BC34A;
    border-radius: 5px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 20px;
    @media (min-width: 700px) {
        height: 5vh;
        width: 35vw; 
        
    }
  }
`
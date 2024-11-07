import React from 'react'           
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import "@fontsource/comfortaa"

function Register2() {
  return (
    <Page>
    <Contents   >
    <Link to='/register' style={{textDecoration: "none", color: "black"}} >
        <IoReturnUpBack style={{fontSize: "large", marginBottom: "50px"}}/> 
    </Link>
    
    <b>Register</b>
    <form>
        <Link to='/discover' style={{textDecoration: "none"}} >
            <Button>
                SIGN UP
            </Button>
       </Link>
       <Input2><input  placeholder='Password' type='password' /></Input2>
    </form>
    <p>By signing up, you agree to Photo’s Terms <br/>of Service and 
Privacy Policy.</p>
    </Contents>
</Page>
  )
}

export default Register2

const Button = styled.button`
width: 72vw;
height: 50px;
margin-top: 15px;
background-color: black;
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
    height: 8vh;
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

  p {
    
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
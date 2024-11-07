import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function LogOut() {
  return (
    <>
    <Page>
             
    </Page>
    <Buttons>
    <Link to='/login' style={{textDecoration: "none"}}>
      <Btn1>LOG IN</Btn1>
    </Link>
    
    <Link to='/register' style={{textDecoration: "none"}} >
     <Btn2><span>REGISTER</span></Btn2>
    </Link>
    
  </Buttons> 
    </>
      
  )
}

export default LogOut

const Page = styled.div`
height:100%;
width: 100%;
overflow: hidden;
background: linear-gradient(35deg , #8BC34A , #66EEFF);
;  
`
const Buttons = styled.div`
display: flex;
justify-content: space-between;
align-item: bottom;

`
const Btn1 = styled.button`
width: 30vw;
height: 40px;
margin: 15px;
background-color: #fff;
border-radius: 5px; 
border: 1px solid #8BC34A;
color: #8BC34A;
cursur: pointer;
`
const Btn2 = styled.button`
width: 30vw;
height: 40px;
margin: 15px;
background-color: #8BC34A;
border-radius: 5px; 
border: 1px solid #8BC34A;
color: white;
cursur: pointer;
`
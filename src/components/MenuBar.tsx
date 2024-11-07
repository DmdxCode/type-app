import React from 'react'
import { IoChatboxOutline, IoHomeOutline, IoPersonOutline, IoSearchOutline} from 'react-icons/io5'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function MenuBar() {
  return (
    <Container>
        <Content>
            <Nav>
                
                <Responsive2>
                    <Link to='/search' style={{textDecoration: "none", color: "black"}} >
                        <div>
                            <IoSearchOutline style={{fontSize: "large"}}/>
                            <input placeholder='Search'></input>
                        </div>
                    </Link>
                </Responsive2>
                
                <div>
                   <ul id='myList'>
                <Responsive2>
                    <Link to='' style={{textDecoration: "none"}} >
                        <li><IoChatboxOutline style={{fontSize: "large"}}/></li>
                    </Link> 
                </Responsive2>
                
                <Responsive2>
                    <Link to='/profile' style={{textDecoration: "none", color: "black"}} >
                        <li><IoPersonOutline style={{fontSize: "large"}}/></li>
                    </Link>
                </Responsive2>

                <Responsive1>
                    <Link to='/search' style={{textDecoration: "none", color: "black"}} >
                        <li className="responsive-item"><IoSearchOutline style={{fontSize: "large"}}/></li>
                    </Link>
                </Responsive1>
                <Responsive1>
                    <Link to='/discover' style={{textDecoration: "none", color: "black"}} >
                        <li className="responsive-item"><IoHomeOutline style={{fontSize: "large"}}/></li>
                    </Link>
                </Responsive1>
                    <li>
                        <Add>
                            <span>+</span>
                        </Add>
                    </li>
                    <Responsive1>
                        <li><IoChatboxOutline style={{fontSize: "large"}}/></li> 
                    </Responsive1>
                    <Responsive1>
                        <Link to='/profile' style={{textDecoration: "none", color: "black"}} >
                            <li><IoPersonOutline style={{fontSize: "large"}}/></li>
                        </Link>
                    </Responsive1>
                    
                </ul> 
                </div>
                
            </Nav>
            
        
        </Content>
    </Container>
    
  )
}

export default MenuBar
const Responsive1 = styled.div`
@media (min-width: 760px) {
    display: none;
}
`
const Responsive2 = styled.div`
@media (max-width: 760px) {
    display: none;
}
opacity: 1;
flex-grow: 1;
& > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 200px;
    background-color: #f2f2f2;
    padding-left: 10px;
    border-radius: 5px;
}
input{
    -webkit-appearance: none;
    outline: none;
    box-shadow: none;
    decoration: none;
    border: none;
    font-size: 16px;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 1.75;
    font-weight: 400;
    width: 150px;
    background-color: #f2f2f2;
}
`
const Add = styled.circle`
@media (min-width: 760px) {
height: 40px;
    background: linear-gradient(35deg , #8BC34A , #66EEFF); 
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: white; 
    font-weight: 500;
    font-size: 20px;
    margin-right: 20px;
}
@media (max-width: 760px) {
    span {
        height: 5vh;
        background: linear-gradient(35deg , #8BC34A , #66EEFF); 
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        color: white; 
        font-weight: 500;
        font-size: 20px;
    }
}
`

const Container = styled.div`
left: 0;
padding: 0 20px; 
position: fixed;
top: 0;
overflow: hidden;
background-color: white;
width: 100vw; 
z-index: 100;
@media (min-width: 760px) {
border-bottom: 1px solid #6e6e6e; 
}

ul {
    @media (max-width: 760px) {
    list-style: none;
    
    padding: 0;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
display: flex;
justify-content: space-between;
align-items: center;
color: black; 
}

li {
    @media (min-width: 760px) {
        list-style: none;
        padding: 0;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
        
    }
    display: flex;
        justify-content: space-between;
}


// @media (max-width: 1000px) {
//     height: 8.3vh;
//     width: 100%; 
//     overflow: hidden; 
// }
`
const Content = styled.div`
display: flex;

align-items: center;
margin: 0 auto;
min-height: 100%;
max-width: 1128px;


`
const Nav = styled.div`
margin-left: auto;
width: 100vw;
@media (max-width: 760px) {
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #6e6e6e; 
    background: white;
    width: 100%;
 }
 @media (min-width: 760px) {
 display: flex;
 justify-content: space-between;
 align-items: center;
 
}
`
import React from 'react'
import styled from 'styled-components'


export default function Profile() {
  return (
    <>
    <Container>
        <Content>
            <Section1>
                <Group>
                    <div>
                        <img src='Profilepic.jpeg'></img>
                    
                    </div>
                    <b>
                        Elijah
                    </b><br/>
                    <span>SAN FRANSISCO, CA</span>
                </Group>
                
                
                
            </Section1>
            <Section2>

            </Section2>
        </Content>
    </Container>
    </>
  )
}

const Container = styled.div`
    max-width: 100%;
    padding-top: 30px;
    background-color: white;
    width: 100vw;
    height: 100vh;
    @media (min-width: 760px) {
    padding-top:70px; 
    }
`
const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`
const Section1 = styled.div`
    background-color: #f2f2f2;
    height: 250px;
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center;
   
    img {
        width: 110px;
        height: 110px;
        border-radius: 75px;
        margin-bottom: 10px;
    }

`
const Group = styled.div`
    // display: grid;
    // align-items: center;
    // align-content: center; 
    // justify-content: center;
    // width: 250px;
    // background-color: red;
    font-family: comfortaa;

    b {
        font-size: 30px;
        padding-left: 5px;
        font-weight: 600;
        font-family: comfortaa;
        letter-spacing: 1.5px;
        
    }

    span {
        font-size: 10px;
        font-weight: 700;
    }

`

const Section2 = styled.div`

`

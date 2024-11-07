import React from 'react'
import styled from 'styled-components'
import MenuBar from './MenuBar'
import { IoEarthOutline } from 'react-icons/io5'

function Discover() {
  return (
    <>
    <Container>
      <Content>
        <Section>
          <MenuBar />
          <TopItem>
            <h2>Discover</h2>
            <IoEarthOutline style={{fontSize: "40px"}}/>
          </TopItem>
        </Section>
      </Content>
    </Container>
    
    
    </>
    
  )
}

export default Discover
const TopItem = styled.div`
display: flex;
justify-content: space-between;
width: 180px;
align-items: center;
color: #70E4D4;
h2 {
  font-family: comfortaa;
  font-size: 30px;
  font-weight: 400;
  color: black;
}
`

const Container = styled.div`
max-width: 100%;
padding-top: 50px;
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
const Section = styled.section`
min-height: 50px;
padding-left: 15px;
`
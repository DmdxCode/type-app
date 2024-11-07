import React from 'react'
import styled from 'styled-components'
import MenuBar from './MenuBar'

function Search() {
  return (
    <>
    <Container>
      <Content>
        <Section>
          <TopItem>
            <h2>Search</h2>
          </TopItem>
          <Responsive2>
            <MenuBar />
          </Responsive2>
          <SearchInput>
            <input />
          </SearchInput>
            
        </Section>
      </Content>
    </Container>
    
    
    </>
  )
}

export default Search

const SearchInput = styled.div`
@media (max-width: 760px) {
    display: flex;
    justify-content: center;
}
`
const Responsive2 = styled.div`
@media (min-width: 760px) {
    display: none;
}
`
const TopItem = styled.div`
@media (max-width: 760px) { 
    padding-left: 30px;
}
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
const Section = styled.section`
min-height: 50px;



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
    width: 350px;
    height: 50px;
    background-color: #f2f2f2;
}
`
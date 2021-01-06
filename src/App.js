import React from "react"
import styled from "styled-components"

const Box = styled.div`
margin: 1vw;
padding-left: 1vw;
padding-right: 1vw;
border: 1px solid black;
display: flex;
flex-direction:column;
height: 97vh;
width: 22vw;
`

const Input = styled.input`
display: flex;
margin-bottom: 1vh;
width: 75%
`

class Filtro extends React.Component{
  render(){
    return(
      <Box>
      
      <h2>Filtro:</h2>
      <label for="VMin" > Valor Mínimo: </label>
      <input id="VMin" type = "number" onChange=""/>

      <label for="VMax"> Valor Máximo: </label>
      <input id="VMax" type = "number" onChange=""/>

      <label for="BuscaProd"> Buscar Produto: </label>
      <input id="BuscaProd" type = "text" onChange=""/> 
      
      </Box>
    )
  }
}


export default class App extends React.Component{
  render (){
    return (
      <div>
      
      <Filtro />

      </div>
    )
  }
}


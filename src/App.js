import React, { Component } from 'react';
import styled from 'styled-components'
import Carrinho from './Components/Carrinho/Carrinho';
import Filtro from './Components/Filtro/Filtro';
import Home from './Components/Home/Home'
import QuantidadeProdutos from './Components/Home/QuantidadeProdutos';

const Loja = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black; 
margin: 1vw;
height: 99vh;
width: 100vw;
`
const ContainerProdutos = styled.div `
display: grid;
`

export default class App extends Component {
  produtos = [{
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 5,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 7,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 8,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  ]


  render() {
    const componentProduto = this.produtos.map((produto) => {
      return (
        <div>
          <Home
          imageUrl = {produto.imageUrl}
          name = {produto.name}
          value = {produto.value}
          />
        </div>
      )
    }) 
    return(
      <Loja>
        <Filtro />

        <div>
          <QuantidadeProdutos />
        {componentProduto}
        </div>

        <Carrinho />
      </Loja>
    )
  }
}


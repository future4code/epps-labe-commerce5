import React, { Component } from 'react';
import styled from 'styled-components'
import Carrinho from './Components/Carrinho/Carrinho';
import Filtro from './Components/Filtro/Filtro';
import Home from './Components/Home/Home'
import Header from './Components/Home/Header';

const Loja = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: #1C1C1C;
width: 100vw;
`
const ContainerProdutos = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
text-align: center;
color: white;
`

export default class App extends Component {
  state= {
  produtos: [{
    id: 1,
    name: "Esqui em Urano",
    value: 51000,
    imageUrl: "https://cdn.pixabay.com/photo/2012/01/09/10/56/uranus-11625_960_720.jpg",
  },
  {
    id: 2,
    name: "Campos Brilhantes Lunares",
    value: 36000,
    imageUrl: "https://cdn.pixabay.com/photo/2011/12/13/16/24/moon-11026_960_720.jpg",
  },
  {
    id: 3,
    name: "Núpcias em Vênus",
    value: 25000,
    imageUrl: "https://cdn.pixabay.com/photo/2011/12/13/14/39/venus-11022_960_720.jpg",
  },
  {
    id: 4,
    name: "Monte Olímpo de Marte",
    value: 20000,
    imageUrl: "https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012_960_720.jpg",
  },
  {
    id: 5,
    name: "Manchas de Júpiter",
    value: 32000,
    imageUrl: "https://cdn.pixabay.com/photo/2012/10/26/02/44/moon-63136_960_720.jpg",
  },
  {
    id: 6,
    name: "Anéis de Saturno",
    value: 43000,
    imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/10/54/saturn-67671_960_720.jpg",
  },
  {
    id: 7,
    name: "Bate-Volta em Mercúrio",
    value: 57000,
    imageUrl: "https://cdn.pixabay.com/photo/2012/01/09/09/33/mercury-11591_960_720.png",
  },
  {
    id: 8,
    name: "Kitesurf em Netuno",
    value: 74000,
    imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/09/17/neptune-67537_960_720.jpg",
  },
  ],

  textoInput: ''
}
onChangeTextoInput = (e) =>{
  this.setState({textoInput:e.target.value})
  }

filtraProdutosBusca = () => {
  return this.state.produtos.filter(produto => produto.name.includes(this.state.textoInput) ) 
}
  
  render() {
    const listaFiltrada = this.filtraProdutosBusca()

    const componentProduto = listaFiltrada.map((produto) => {
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
      <div>
        <Header lista={this.state.produtos} />
      <Loja >
        <Filtro filtraProdutosBusca={this.onChangeTextoInput} textoInput={this.state.textoInput}/>        
        <ContainerProdutos>
        {componentProduto}
        </ContainerProdutos>        
        <Carrinho />
      </Loja>
      </div>
    )
  }
}
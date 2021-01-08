import React, { Component } from 'react';
import styled from 'styled-components'
import Carrinho from './Components/Carrinho/Carrinho';
import Filtro from './Components/Filtro/Filtro';
import Home from './Components/Home/Home'
// import QuantidadeProdutos from './Components/Home/QuantidadeProdutos';

const Loja = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
/* flex-direction: column; */
border: 1px solid black; 
margin: 1vw;
/* height: 100vh; */
width: 100vw;
`
const ContainerProdutos = styled.div `
display: grid;
background-color: red;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
/* height: 100vh; */
/* width: 56vw; */
/* margin-right: 20vh; */
margin: 0;
border: 1px solid black;
`
export default class App extends Component {
  state = {
  produtos: [{
    id: 1,
    name: "Táxi Espaciais",
    value: 50.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    name: "Viagem à Lua",
    value: 30.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    name: "Destino: Planeta Kepler-10c",
    value: 40.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    name: "O asteróide BR (2014 KP4)",
    value: 20.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 5,
    name: "Passeio pelas estrelas IRAS",
    value: 10.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    name: "Foguete da Mis",
    value: 84.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 7,
    name: "Foguete da Miss",
    value: 34.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 8,
    name: "Foguete da Miss",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  ], 

  textoInput: ''

  }

  onChangeTextoInput = (e) =>{
    this.setState({textoInput:e.target.value})
    // this.props.filtraProdutosBusca(this.state.textoInput)
    console.log('TEXTO INPUT', this.state.textoInput)
    }


  filtraProdutosBusca = () => {
    
    return this.state.produtos.filter(produto => produto.name.includes(this.state.textoInput) ) 
  }

   render() {

    const listaFiltrada = this.filtraProdutosBusca()
    console.log(listaFiltrada)

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
      <Loja>
        
        <Filtro filtraProdutosBusca={this.onChangeTextoInput} textoInput={this.state.textoInput}/>             

        <ContainerProdutos>
        {componentProduto}
        </ContainerProdutos>  

        <Carrinho />
      </Loja>
    )
  
  }
}



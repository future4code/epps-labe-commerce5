import React, { Component } from 'react';
import styled from 'styled-components';
import ContainerProdutoCarrinho from './Components/Carrinho/ContainerProduto';
import ProdutoCarrinho from './Components/Carrinho/ProdutoCarrinho';
import Filtro from './Components/Filtro/Filtro';
import Home from './Components/Home/Home';
import Header from './Components/Home/Header';

const Loja = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: #1C1C1C;
width: 100vw;
`
const ContainerProdutos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
text-align: center;
color: white;
`
const Button = styled.button`
padding: 2vh 2.6vw;
background-color: black;
color: white;
`

const BotaoRemover = styled.button`
&:hover {
  background-color: green;
}
width: 16vw;
height: 8vh;
background-color: black;
color: white;
font-size: 18px;
margin-left: auto;
margin-right: auto
`

let valorTotal = 0

export default class App extends Component {
  state = {
    produtos: [{
      id: 1,
      name: "Esqui em Urano",
      value: 5100,
      imageUrl: "https://cdn.pixabay.com/photo/2012/01/09/10/56/uranus-11625_960_720.jpg",
      quantidade: 0
    },
    {
      id: 2,
      name: "Campos Brilhantes Lunares",
      value: 3600,
      imageUrl: "https://cdn.pixabay.com/photo/2011/12/13/16/24/moon-11026_960_720.jpg",
      quantidade: 0
    },
    {
      id: 3,
      name: "Núpcias em Vênus",
      value: 2500,
      imageUrl: "https://cdn.pixabay.com/photo/2011/12/13/14/39/venus-11022_960_720.jpg",
      quantidade: 0
    },
    {
      id: 4,
      name: "Monte Olímpo de Marte",
      value: 2000,
      imageUrl: "https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012_960_720.jpg",
      quantidade: 0
    },
    {
      id: 5,
      name: "Manchas de Júpiter",
      value: 3200,
      imageUrl: "https://cdn.pixabay.com/photo/2012/10/26/02/44/moon-63136_960_720.jpg",
      quantidade: 0
    },
    {
      id: 6,
      name: "Anéis de Saturno",
      value: 4300,
      imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/10/54/saturn-67671_960_720.jpg",
      quantidade: 0
    },
    {
      id: 7,
      name: "Bate-Volta em Mercúrio",
      value: 5700,
      imageUrl: "https://cdn.pixabay.com/photo/2012/01/09/09/33/mercury-11591_960_720.png",
      quantidade: 0
    },
    {
      id: 8,
      name: "Kitesurf em Netuno",
      value: 7400,
      imageUrl: "https://cdn.pixabay.com/photo/2012/11/28/09/17/neptune-67537_960_720.jpg",
      quantidade: 0
    },
    ],

    textoInput: '',

    produtosCarrinho: [
    ],

    inputCrescente: "Crescente"
  }

  selecionarProduto = (id) => {
    const produtoSelecionado = this.state.produtos.forEach((produto) => {
      if (id === produto.id && produto.quantidade === 0) {
        valorTotal += produto.value
        produto.quantidade = 1
        const novoProduto = {
          imagem: produto.imageUrl,
          id: produto.id,
          quantidade: produto.quantidade,
          nome: produto.name,
          valor: produto.value
        }
        const novaListaDeProdutos = [...this.state.produtosCarrinho, novoProduto]
        this.setState({ produtosCarrinho: novaListaDeProdutos })
        this.setState({ total: valorTotal })
        return novoProduto
      } else if (id === produto.id) {
        valorTotal += produto.value
        produto.quantidade += 1
        const novaLista = this.state.produtosCarrinho.filter((produto) => {
          if (produto.id !== id) {
            return produto.id
          }
        })
        const novoProdutoQuantidade = {
          ...produto,
          imagem: produto.imageUrl,
          quantidade: produto.quantidade,
          nome: produto.name,
          valor: produto.value * produto.quantidade
        }
        const novaListaDeProdutos = [...novaLista, novoProdutoQuantidade]
        this.setState({ produtosCarrinho: novaListaDeProdutos })
        this.setState({ total: valorTotal })
        return produto
      } else {
        return produto
      }
    })
  }

  removerProduto = (id) => {
    const novaLista = this.state.produtosCarrinho.filter((produto) => {
      if (produto.id === id) {
        valorTotal -= produto.valor
        return !produto.id
      } if (produto.id !== id) {
        return produto.id
      }
    });
    this.setState({ produtosCarrinho: novaLista });
  }

  onChangeCrescente = (e) => {
    this.setState({ inputCrescente: e.target.value });
    switch (this.state.inputCrescente) {
      case "Crescente":
        return this.setState({
          ListaProdutos: this.state.produtos.sort(function (a, b) {
            return b.value - a.value;
          }),
        });
      case "Decrescente":
        return this.setState({
          ListaProdutos: this.state.produtos.sort(function (a, b) {
            return a.value - b.value;
          }),
        });
      default:
        return true;
    }
  }

  onChangeTextoInput = (e) => {
    this.setState({ textoInput: e.target.value })
  }

  filtraProdutosBusca = () => {
    return this.state.produtos.filter(produto => produto.name.includes(this.state.textoInput))
  }

  render() {

    const componentCarrinho = this.state.produtosCarrinho.map((produto) => {
      return (
        <div>
          <ProdutoCarrinho
            imagem={produto.imagem}
            quantidade={produto.quantidade}
            name={produto.nome}
            value={produto.valor} />
          <BotaoRemover onClick={() => this.removerProduto(produto.id)}>Remover Produto</BotaoRemover>
        </div>
      )
    })

    const listaFiltrada = this.filtraProdutosBusca()

    const componentProduto = listaFiltrada.map((produto) => {
      return (
        <div>
          <Home
            imageUrl={produto.imageUrl}
            name={produto.name}
            value={produto.value}
          />
          <Button onClick={() => this.selecionarProduto(produto.id)}>Adicionar ao Carrinho</Button>
        </div>

      )
    })
    
    return (
      <div>
        <Header
          lista={this.state.produtos}
          inputCrescente={this.state.inputCrescente}
          filtroCrescente={this.onChangeCrescente}
          quantidade={componentProduto.length}
        />
        <Loja >
          <Filtro
            filtraProdutosBusca={this.onChangeTextoInput}
            textoInput={this.state.textoInput}
          />
          <ContainerProdutos>
            {componentProduto}
          </ContainerProdutos>
          <div>
            <ContainerProdutoCarrinho
              precoTotal={valorTotal}
              produtoCarrinho={componentCarrinho}
            >
            </ContainerProdutoCarrinho>
            <span>Total: RS<span>{valorTotal}</span>,00</span>
          </div>
        </Loja>
      </div>
    )
  }
}

import React from 'react'
import './App.css'
import styled from 'styled-components'
import Carrinho from './Components/Carrinho'



class App extends React.Component {
  //Ver como colocar no componente
  state = {
    produtosNoCarrinho: [
        {
            id: 5,
            quantidade: 0,
            nome: 'Ola mundo',
            valor: 0
        }
    ]
}



  produtos = [
    {
      id: 5,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200",
    }
  ]

   //Essa função pega o produto atravez do botao e adiciona esse item ao array do carrinho
    //produtos seria o nome do array que guarda os produtos da tela home
  selecionarProduto = (id) => {
    const valorTotal = 0
    const produtoSelecionado = this.produtos.filter((produto) => {
      let quantidadeNoCarrinho = 0
      if (id === produto.id) {
       /*  valorTotal += produto.value */
        quantidadeNoCarrinho++
        const novoProdutoCarrinho = {
          id: produto.id,
          quantidade: quantidadeNoCarrinho,//ver se mantem no state
          nome: produto.name, //ver se é nome ou name
          valor: produto.value
        }

        const novaListaDeProdutos = [... this.state.produtosNoCarrinho, novoProdutoCarrinho]
        this.setState({ produtosNoCarrinho: novaListaDeProdutos })
        
        return novoProdutoCarrinho
      } else {
        console.log('Deu else')
        return produto
      }
    })
  }



  render() {
    return (
      <div>
      <Carrinho />
        <button onClick={() => this.selecionarProduto(5)}>Teste</button>
</div>
)
  }
}


export default App;








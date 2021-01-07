import React from 'react'
import Styled from 'styled-components'
import App from '../App'

const Produto = Styled.p`
 width: 20vw;
border: 1px solid grey;
display: flex;
align-items: center;
`
const NomeProduto = Styled.p`
 width: 10vw;
display: flex;
justify-content: center;
`
const RemoverProduto = Styled.button`
height: 20px;
width: 25px;
`

const QuantidadeProduto = Styled.p`
 width: 10vw;
border: 1px solid grey;
display: flex;
`

class Carrinho extends React.Component {
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


   



    render() {
        
        return (
            <div >
                {produtosNoCarrinho.map((tarefa) => {
                    return (
                        <div>
                            <h2>Carrinho</h2>
                            <Produto>
                                <p>{this.props.quantidade}</p>
                                <NomeProduto>{this.props.nome}</NomeProduto>
                                <RemoverProduto /* onClick={() => this.removerProf(item.idx)} */>X</RemoverProduto>
                            </Produto>

                            <h3>Total: {this.props.valor}</h3>
                        </div>
                    )
                })}
            </div>
        )

    }

}

export default Carrinho;

//OPÇÃO DE RENDERIZAÇAO DE COMPONENTES
/*  const componentsProduto = this.produtos.map((produto) => {
            return (
                <div key={produto.nome}>
                    <button >X</button>
                    <TextoNome>{produto.nome}</TextoNome>
                    <TextoIdade>{produto.idade}</TextoIdade>
                </div>
            );
        });

        return (
            <div>
                {componentesProfs}
            </div>
        ); */
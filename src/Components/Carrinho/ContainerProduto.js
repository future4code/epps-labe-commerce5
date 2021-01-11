import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerProduto = styled.div`
border: 1px solid black;
margin-top: 1vw;
margin-left: 2vw;
padding-left: 1vw;
padding-right: 1vw;
height: 80vh;
width: 15vw;
background-color: gray;
display: flex;
justify-content: center;
`
const ContainerProdutos = styled.div`
height: 90vh;
`
export default class ContainerProdutoCarrinho extends Component {
    render() {
        return (
            <ContainerProdutos>
                <h3>Carrinho:</h3>
                <ContainerProduto>
                    <div>{this.props.produtoCarrinho}</div>
                </ContainerProduto>
            </ContainerProdutos>
        )
    }
}
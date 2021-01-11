import React, { Component } from 'react'
import styled from 'styled-components'

const Produto = styled.div`
margin: 0;
padding: 0;
height: 25vh;
display: flex;
flex-direction: column;
`
const Imagem = styled.img`
width: 5vw;
`
const Teste = styled.div`
display: flex;
flex-direction: column;
height: 10.6vh;
`
const DivImagem = styled.div`
width: 15vw;
heigth: 13vh;
`
const Teste2 = styled.div`
display: flex;
height: 15vh;
width: 15vw;
padding-top: 0.5vh;
margin-left: auto;
margin-right: auto;
`
const Valor = styled.div`
font-size: 30px;
text-align: center;
`
const Nome = styled.p`
width: 11vw;
`
export default class ProdutoCarrinho extends Component {
    render() {
        return (
            <Produto>
                <Teste2>
                <DivImagem><Imagem src={this.props.imagem} alt="" /></DivImagem>
                <Teste>
                 <p>{this.props.quantidade}x</p>
                <Nome>{this.props.name}</Nome>
                </Teste>
                </Teste2>
                <Valor>R${this.props.value},00</Valor>
            </Produto>
        )
    }
}
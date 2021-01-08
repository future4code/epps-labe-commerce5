import React, { Component } from 'react'
import styled from 'styled-components'

const Cabecalho = styled.div`
width: 100vw;
display: grid;
grid-template-columns: auto auto auto;
align-items: center; 
background-color: #363636;
`

const HeaderLeft = styled.p`
text-align: left;
padding-left: 30px;
color: white;

`

const Titulo = styled.a`
text-align: center;
`

const HeaderRight = styled.p`
text-align: right;
padding-right: 30px;
color: white;

`


export default class Header extends Component {

    render() {
        return (
            <Cabecalho>
            <HeaderLeft> Quantidade de Produtos:</HeaderLeft>

            <Titulo><h1>LABECOMMERCE 5</h1></Titulo>

            <HeaderRight>
                <label> Orientação: </label>
                <select>
                    <option value="crescente">Preço: Crescente</option>
                    <option value="decrescente">Preço: Decrescente</option>
                </select>
            </HeaderRight>
            </Cabecalho>
        )
    }
}

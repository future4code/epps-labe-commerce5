import React, { Component } from 'react'
import styled from 'styled-components'

const Cart = styled.div`
margin-top: 1vw;
margin-left: 1.5vw;
padding-left: 1vw;
padding-right: 1vw;
border: 1px solid white;
height: 95vh;
width: 15vw;
color: white;
`
export default class Carrinho extends Component {
    render() {
        return (
            <Cart>
                <h2>Carrinho</h2>
                <p>1x Produto <button>X</button></p>
                <p>1x Produto<button>X</button></p>
                <p>Total: R$ 396.00</p>
            </Cart>
        )
    }
}
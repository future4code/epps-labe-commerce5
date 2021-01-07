import React, { Component } from 'react'
import styled from 'styled-components'

const Cart = styled.div`
border: 1px solid black;
margin-top: 1vw;
padding-left: 1vw;
padding-right: 1vw;
height: 95vh;
width: 13vw;
position: relative;
`

export default class Carrinho extends Component {
    render() {
        return (
            <Cart>
                <h3>Carrinho</h3>
                <p>1x Produto <button>X</button></p>
                <p>1x Produto<button>X</button></p>
                <p>Total: R$ 396.00</p>
            </Cart>
        )
    }
}

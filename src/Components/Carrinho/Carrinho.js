import React, { Component } from 'react'
import styled from 'styled-components'

const Cart = styled.div`
border: 1px solid black;
padding-left: 1vw;
padding-right: 1vw;
/* height: 50vh; */
width: 15vw;

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

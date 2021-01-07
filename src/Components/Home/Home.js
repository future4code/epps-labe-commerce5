import React, { Component } from 'react'
import styled from 'styled-components'

const Produto = styled.div`
margin: 0px; 
border: 1px dotted black;
/* height: 10vh; */
background-color: green;
`

export default class Home extends Component {

    render() {
        return (

                <Produto>
                    <img src={this.props.imageUrl} alt="" />
                    <p>{this.props.name}</p>
                    <p>{this.props.value}</p>
                    <button>Adicionar ao Carrinho</button>
                </Produto>
        )
    }
}

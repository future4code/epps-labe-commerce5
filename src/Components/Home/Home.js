import React, { Component } from 'react'
import styled from 'styled-components'

const Produto = styled.div`
border: 1px dotted white; 
background-color: green;
margin-left: 0.2vw;
margin-right: 0.2vw;
margin-bottom: 0.3vw;
margin-top: 0.3vw;
`

const Imagem = styled.img`
width: 200px;
height: 200px;
`

export default class Home extends Component {
    render() {
        return (
                <Produto>
                    <Imagem src={this.props.imageUrl} alt="" />
                    <p>{this.props.name}</p>
                    <p>R${this.props.value},00</p>
                </Produto>
        )
    }
}
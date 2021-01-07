import React, { Component } from 'react'
import styled from 'styled-components'


export default class Home extends Component {

    render() {
        return (

                <div>
                    <img src={this.props.imageUrl} alt="" />
                    <p>{this.props.name}</p>
                    <p>{this.props.value}</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
        )
    }
}

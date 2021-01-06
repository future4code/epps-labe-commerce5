import React from 'react'
/* import styled from 'styled-components' */
import App from '../App'


class Carrinho extends React.Component {

    render() {
        return (
            <div>
                <h2>Carrinho:</h2>
                <div>
                    <p>{this.props.quantidade}</p>
                    <p>{this.props.nome}</p>
                    <p /* onClick={"deletarItem"} */>X</p>

                </div>

                <h3>Total: {this.props.valor}</h3>
            </div>
        )
    }

}

export default Carrinho


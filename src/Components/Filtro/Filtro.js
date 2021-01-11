import React, { Component } from 'react'
import styled from 'styled-components'

const BoxFiltro = styled.div`
margin-top: 1vw;
padding-left: 1vw;
padding-right: 1vw;
border: 1px solid white;
height: 95vh;
width: 15vw;
color: white;
`
export default class Filtro extends Component {
    render() {
        return (
            <BoxFiltro>
                <h2>Filtros</h2>
                <br></br>
                <label for="VMin" > Valor Mínimo: </label>
                <input id="VMin" type="number" value= {this.props.valueMin} onChange={(e)=>this.props.ValorMinimo(e)} />
                <label for="VMax"> Valor Máximo: </label>
                <input id="VMax" type="number" onChange="" />
                <label for="BuscaProd"> Buscar Produto: </label>
                <input id="BuscaProd" type="text" value= {this.props.textoInput} onChange={(e)=>this.props.filtraProdutosBusca(e)} /> 
            </BoxFiltro>
        )
    }
}
import React, { Component } from 'react'
import styled from 'styled-components'

const BoxFiltro = styled.div`
margin-top: 1vw;
padding-left: 1vw;
padding-right: 1vw;
border: 1px solid black;
height: 95vh;
width: 15vw;
`

export default class Filtro extends Component {
    render() {
        return (
            <BoxFiltro>
                <h2>Filtros</h2>
                <label> Orientação: </label>
                 <select>
                     <option>Preço: Crescente</option>
                     <option>Preço: Decrescente</option>
                </select>

                <br></br>

                <label for="VMin" > Valor Mínimo: </label>
                <input id="VMin" type="number" onChange="" />
                <label for="VMax"> Valor Máximo: </label>
                <input id="VMax" type="number" onChange="" />
                <label for="BuscaProd"> Buscar Produto: </label>
                <input id="BuscaProd" type="text" onChange="" />
            </BoxFiltro>
        )
    }
}



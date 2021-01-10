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

export default class Filtro extends React.Component {

   
    render() {
        return (
            <BoxFiltro>
                <h2>Filtros</h2>                
                
                          
                {/* <FiltroMinMax /> */}

                <p>Quantidade de produtos: {(e)=>this.props.listaFiltrada.length(e)}</p>


                <valMinMax>                               
                 <label for="VMin" > Valor Mínimo: </label>
                <input id="VMin" type="number" onChange="" />
                
                <label for="VMax"> Valor Máximo: </label>
                <input id="VMax" type="number" onChange="" /> 
                               
                </valMinMax>

                <label for="BuscaProd"> Buscar Produto: </label>
                <input id="BuscaProd" type="text" value= {this.props.textoInput} onChange={(e)=>this.props.filtraProdutosBusca(e)} /> 


            </BoxFiltro>
        )
    }
}



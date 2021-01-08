import React, { Component } from 'react'
import styled from 'styled-components'

const valMinMax = styled.div`
margin: flex;`



export default class FiltroMinMax extends Component {
    render() {
        return (
            <valMinMax>                               
                 <label for="VMin" > Valor Mínimo: </label>
                <input id="VMin" type="number" onChange="" />
                
                <label for="VMax"> Valor Máximo: </label>
                <input id="VMax" type="number" onChange="" /> 
                               
            </valMinMax>
        )
    }
}
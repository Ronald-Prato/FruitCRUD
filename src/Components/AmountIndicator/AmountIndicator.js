import React, { useState, useEffect } from 'react'
import * as st from './AmountIndicator.styles'
import { Input, Button, Icon } from 'antd'


export const AmountIndicator = props => {
    const [RenderedName] = useState(props.name.charAt(0).toUpperCase() + props.name.slice(1))
    useEffect(() => console.log("loaded"), [])


    const HandleAdd = () => {

        props.hideAmount()
    }


    return (
        <st.AmountIndicatorContainer>
            <st.SelectedFruitContainer>
                <st.FruitImage src={require(`../../Assets/${props.name}.svg`)} />
                <st.FruitName> {RenderedName} </st.FruitName>
            </st.SelectedFruitContainer>

            <st.AmountInputContainer>
                <Input placeholder='Cantidad...' min={1} type='number' />
            </st.AmountInputContainer>

            <st.AcceptButtonContainer>
                <Button onClick={HandleAdd} type='primary'> Añadir  </Button>
            </st.AcceptButtonContainer>

            <st.BackButtonContainer onClick={() => props.hideAmount()}>
                <Icon style={{ color: '#505050' }} type='close' />
            </st.BackButtonContainer>
        </st.AmountIndicatorContainer>
    )
}
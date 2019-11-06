import React, { useState } from 'react'
import { AppContext } from '../../context'
import { StContainer } from './styles'

export default props => {
    return (
        <AppContext.Provider /* value={} */ >
            <StContainer>
                {props.children}
            </StContainer>
        </AppContext.Provider>
    )
}
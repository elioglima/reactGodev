import React from 'react'

import { LoadingBox } from './styles.js'
import loading from './images/loading.svg'

const Loading = ({text, ...rest}) => {
    return (
        <LoadingBox className="loading" {...rest}>
            <img src={loading} alt="loading" />
            <span>{text}</span>
        </LoadingBox>
    )
}

export default Loading  
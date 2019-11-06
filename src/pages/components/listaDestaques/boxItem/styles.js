import styled from 'styled-components'

export const StContainer = styled.div`
    background: rgba(40, 40, 40);
    box-shadow: 1px 2px 7px 1px rgba(255,255,255, 0.2);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    width: 40%;

    & > span {
        color: #a5a5a5;
        font-size: 1rem;
        margin-top: 20px;
    }

    & div {
        display: flex;
        flex-direction: column;
        & span {
            &:first-child {
                color: white;
                font-weight: bolder;
                font-size: 1.2rem;
                margin-bottom: 10px;
            }
            &:not(:first-child) {
                color: #ccc;
                text-align: justify;
            }
        }
    }
`
import styled from 'styled-components'

export const StContainer = styled.div`
    background: ${props => props.theme ? props.theme == 'light' ? '##e5e5e5' : 'rgba(40, 40, 40)' : 'rgba(40, 40, 40)'}; 
    box-shadow: 1px 2px 7px 1px  ${props => props.theme ? props.theme == 'light' ? '#000' : 'rgba(255,255,255, 0.2)' : 'rgba(255,255,255, 0.2)'};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 2% 10px 0;
    padding-top: 20px;
    padding-left: 1%;
    padding-right: 1%;
    padding-bottom: 20px;
    ${props => props.colCount && props.colCount > 0 ? 'width:' + ((100 / props.colCount) - 4) + '%;' : '100%'};

    & > span {
        color: ${props => props.theme ? props.theme == 'light' ? '#000' : '#a5a5a5' : '#a5a5a5'};
        font-size: 1rem;
        margin-top: 20px;
    }

    & div {
        display: flex;
        flex-direction: column;
        & span {
            &:first-child {
                color: ${props => props.theme ? props.theme == 'light' ? '#64b2cd' : 'white' : 'white'};
                font-weight: bolder;
                font-size: 1.1rem;
                margin-bottom: 10px;
            }
            &:not(:first-child) {
                color: ${props => props.theme ? props.theme == 'light' ? '#000' : '#ccc' : '#ccc'};
                text-align: justify;
            }
        }
    }
`
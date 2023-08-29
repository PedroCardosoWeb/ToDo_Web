import styled from 'styled-components'
import colors from '../../colors';

const { base_color1, base_color2, base_color3, base_color4 } = colors;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1{
        color: ${base_color2};
        font-weight: bold;
    }
    p{
        color: ${base_color1};
        font-size: 18px;
        font-weight: bold;
    }
`

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ValidationCode = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    span{
        text-transform: uppercase;
        text-weight: bold;
        margin: 5px;
    }
    input{
        width: 50%;
        font-size: 18px;
        padding: 10px;
        margin: 5px;
        text-align: center;
    }
    button{
        width: 50%;
        font-size: 18px;
        font-weight: bold;
        background-color: ${base_color2};
        color: ${base_color3};
        padding: 10px;
        margin-top: 10px;
        border: none;
        border-radius: 40px;
        &:hover{
            background-color: ${base_color1};
        }
    }
`
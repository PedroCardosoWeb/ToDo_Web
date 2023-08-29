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
    height: 300px;
    background-color: ${base_color2};
`
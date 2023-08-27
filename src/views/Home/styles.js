import styled from 'styled-components'
import colors from '../../colors';

const { base_color1, base_color2, base_color3, base_color4 } = colors;

export const Container = styled.div`

`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
    button{
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
        text-decoration: none;
        color: #000;
    }
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${base_color4};
    margin-bottom: 40px;
    h1{
        color: ${base_color4};
        position: relative;
        top: 40px;
        background: ${base_color3};
        padding: 0 20px;
    }
`

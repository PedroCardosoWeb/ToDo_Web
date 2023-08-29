import styled from 'styled-components';
import colors from '../../colors';

const { base_color1, base_color2, base_color3, base_color4 } = colors;

export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: 10px 10px 24px -4px rgba(0,0,0,0.75);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    margin: 10px;
    transition: all 0.3s ease;
    opacity: ${props => props.done ? 0.5 : 1};
    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    strong{
        color: ${base_color2};
        font-weight: bold;
    }
    span{
        color: ${base_color4};
    }
`
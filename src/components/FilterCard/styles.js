import styled from 'styled-components';
import colors from '../../colors';

const { base_color1, base_color2, base_color3, base_color4 } = colors;

export const Container = styled.div`
    width: 230px;
    height: 60px;
    padding: 10px;
    background: ${props => props.actived ? base_color2 : base_color1};
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    justify-content: space-around;
    img{
        width: 30px;
        height: 30px;
    }
    span{
        color: ${base_color3};
        font-weight: bold;
        align-self: flex-end;
        font-size: 1.2rem;
    }
    &:hover{
        background: ${base_color2};
        cursor: pointer;
    }
`
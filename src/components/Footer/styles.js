import styled from 'styled-components';
import colors from '../../colors';

const { base_color1, base_color2, base_color3, base_color4 } = colors;

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background: ${base_color1};
    border-top: 5px solid ${base_color2};
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        letter-spacing: 0.5px;
        color: ${base_color3};
        font-weight: bold;
    }
`
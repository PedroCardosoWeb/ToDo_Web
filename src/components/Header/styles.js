import styled from 'styled-components';
import colors from '../../colors';

const { base_color1, base_color2, base_color3, base_color4 } = colors;

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: ${base_color1};
    border-bottom: 5px solid ${base_color2};
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    img{
        width: 110px;
        height: 50px;
        &:hover{
            opacity: 0.5;
        }
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a{
        color: ${base_color3};
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px; 
        &:hover{
            color: ${base_color2};
        }       
    }
    #notification{
        img{
            width: 25px;
            height: 30px;
        }
        span{
            background: ${base_color3};
            color: ${base_color2};
            padding: 1px 5px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }
        &:hover{
           opacity: 0.5;
        }
    }
    .separator::after{
        content: "|";
        margin: 0 10px;
        color: ${base_color3};
    }
`
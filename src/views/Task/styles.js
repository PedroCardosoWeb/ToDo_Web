import styled from 'styled-components'
import colors from '../../colors';

const { base_color1, base_color2, base_color3, base_color4, base_color5 } = colors;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 20px;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .inative {
        opacity: 0.5;
    }
    img {
    width: 60px;
    height: 60px;
    margin: 10px 0 10px 10px;
    cursor: pointer;
    }
    img:hover {
    opacity: 0.5;
    }
    button {
        background: none;
        border: none;
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    span {
        font-size: 19px;
        color: ${base_color4};
        margin: 10px 0 5px 0;
    }
    input {
        font-size: 18px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid ${base_color2};
    }
    img {
        width: 20px;
        height: 20px;
        position: relative;
        left: 90%;
        bottom: 35px;
    }
`
        
export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0 10px 0;
    span {
        font-size: 18px;
        color: ${base_color4};
        margin: 10px 0 15px 0;
    }
    textarea {
        font-size: 18px;
        padding: 10px;
        border-radius: 5px;
        border-color: ${base_color2};
    }
`

export const Options = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    button {
        font-size: 18px;
        font-weight: bold;
        color: ${base_color1};
        border: none;
        background: none;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
    div {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 18px;
        color: ${base_color2};
    }
`

export const Save = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${'' /* margin: 10px 0px 30px 0px; */}
    button {
        width: 100%;
        padding: 10px;
        font-size: 18px;
        font-weight: bold;
        background: ${base_color2};
        border: none;
        border-radius: 20px;
        color: ${base_color3};
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
`
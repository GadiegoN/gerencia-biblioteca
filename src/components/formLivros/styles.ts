import styled from "styled-components";

export const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const TextInput = styled.input`
    width: 50%;
    height: 50px;
    background: #121214;
    color: #c4c4c5;
    font-size: 24px;
    font-weight: bold;
    padding-left: 16px;
`

export const Button = styled.button`
    width: 30%;
    height: 40px;
    background: #232328;
    color: #f6f5f5;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    font-size: large;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    :hover {
        background: #464656;
        color: #f6f5f5;
    }
`
import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Menu = styled.div`
    background: #d8d8d7;
    margin-top: 16px;
    height: 100px;
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
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

export const Main = styled.div`
    width: 90%;
    background: #d8d8d7;
    margin-top: 10px;
    padding: 32px;

    display: flex;
    justify-content: center;
`

export const Table = styled.table`
    background: #121214;
    width: 50%;
`

export const Td = styled.td`
    height: 40px;
    text-align: center;
    border: 1px solid #e5e5e5;
    font-size: 24px;
    font-weight: bold;
`

export const Footer = styled.div`
    width: 90%;
    background: #d8d8d7;
    margin-top: 10px;
    padding: 32px;

    display: flex;
    justify-content: center;
`

export const Close = styled.button`
    width: 25px;
    height: 25px;
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
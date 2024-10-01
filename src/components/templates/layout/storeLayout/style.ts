import styled from "styled-components";


export const ConteinerLayoutStore = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    background-color: #2A2A2A;
    overflow-y: auto;
    
    h2{
        color: #F0BE0C;
        font-size: 36px;
        width: 1200px;
        @media screen and (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            width: 96%;
            margin: 20px 0;
        }
    }
`;

export const ItemsList = styled.ul`
    display: flex;
    align-items: start;
    justify-content: start;
    width: 1200px;
    flex-direction: column;
    gap: 20px;
    padding: 4px;
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
`;

export const Items = styled.li`
    list-style: none;
`;


/* ESTILO PARA CARTÃO DE LOJA */

export const Card = styled.div`
    --background: linear-gradient(to right, #F0BE0C 0%, #A60F14 100%);
    width: 800px;
    height: 254px;
    padding: 0.9px;
    border-radius: 0.7rem;
    overflow: visible;
    background: #F0BE0C;
    background: var(--background);
    position: relative;
    z-index: 1;
    box-shadow: 0 0 80px -50px #A60F14;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
    }
`;

export const CardInformation = styled.div`   
    background: #2A2A2A;
    color: #D1D1D1;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: 0.7rem;
    padding: 20px;
    
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        gap: 4px;
    }
    h2{
        color: #F0BE0C;
        font-weight: lighter;
        font-size: 32px;
        text-align: start;
        
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            margin: 0;
        }
    }
    i{
        text-decoration: underline;
    }
`;

export const Article = styled.article`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
    }
`;

export const ImageCard = styled.img`
    width: 250px;
    height: 160px;
    border-radius: 12px;
`;

export const Time = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
    }
    h3{
        color: #D1D1D1;
        font-weight: lighter;
        font-size: 24px;
        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }
    h4{
        color: #F0BE0C;
        font-weight: lighter;
        font-size: 18px;
        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }
    p{
        margin-bottom: 4px;
        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }
`

export const Erro = styled.p`
    color: #A60F14;
    width: 100%;
`;
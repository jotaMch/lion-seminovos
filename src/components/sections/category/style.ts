import styled from "styled-components";


export const ContainerProduct = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #D1D1D1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
    }
    h2{
        color: #2A2A2A;
        font-size: 40px;
    }
    p{
        font-size: 24px;
        text-decoration: underline;
        max-width: 500px;
        width: 100%;
    }
`;

export const ProductCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
    h2{
        
        @media screen and (max-width: 768px) {
            width: 80%;
            text-align: center;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            text-align: center;
        }
    }
    p{
        
        @media screen and (max-width: 768px) {
            width: 80%;
            text-align: center;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            text-align: center;
        }
    }
`;

export const LinkToPath = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ImageCar = styled.img`
    width: 500px;
    
    @media screen and (max-width: 768px) {
        width: 250px;
    }
`;


/* ESTILO PARA CARTÃO DE CATEGORIAS */

export const Card = styled.div`
    --background: linear-gradient(to left, #F0BE0C 0%, #A60F14 100%);
    width: 90%;
    height: 200px;
    padding: 5px;
    border-radius: 1rem;
    overflow: visible;
    background: #F0BE0C;
    background: var(--background);
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        margin: 0 auto;
    }
    &::after {
    position: absolute;
    content: "";
    top: 30px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(25px);
    background: #f7ba2b;
    background: var(--background);
    transition: opacity .5s;
    }
`;

export const CardInformation = styled.div`
    --color: #181818;
    background: #2A2A2A;
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: .7rem;
`;
import styled, { keyframes } from "styled-components";

const infiniteAnimation = keyframes`
    0% {
        transform: translate(-50%, 0);
    }
    50% {
        transform: translate(-50%, -10px); 
    }
    100% {
        transform: translate(-50%, 0);
    }
`;

export const ContainerHome = styled.div`
    width: 100%;
    height: 90.9%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const InitialInformation = styled.div`
    width: 100%;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0 1px;
    
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

export const TextInformation = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 46px;
    
    @media screen and (max-width: 768px) {
        gap: 20px;
        padding-bottom: 40px;
    }
    h1 {
        font-size: 50px;
        font-weight: bold;
        color: #D1D1D1;
        color: #F0BE0C;
        
        @media screen and (max-width: 768px) {
            width: 100%;
            font-size: 32px;
        }
    }
    p {
        width: 88%;
        font-size: 18px;
        color: #D1D1D1;
        
        @media screen and (max-width: 768px) {
            width: 100%;
        }
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        width: 90%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 90%;
    }
`;

export const ImageInformation = styled.img`
    width: 275px;
    height: 286px;
`;

export const Arrow = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    
    @media screen and (max-width: 768px) {
        display: none;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        bottom: -40%;
    }
    
    svg {
        position: absolute;
        bottom: 0;
        left: 50%;
        animation: ${infiniteAnimation} 1s infinite; 
    }
`;

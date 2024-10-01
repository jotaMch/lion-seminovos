import styled from "styled-components";


export const AboutComponent = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to top, #d1d1d1 50%, #2A2A2A);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    top: -5px;
    @media screen and (max-width: 768px) {
        top: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: 900px;
    }
`;

export const ItemsContainer = styled.div`
    background-color: #2A2A2A;
    height: 250px;
    width: 100%;
    position: relative;
    
    @media screen and (max-width: 768px) {
        height: 360px;
    }
`;

export const ItemsList = styled.ul`
    width: 1200px;
    height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%);
    
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        width: 80%;
        gap: 10px;
        bottom: 0;
        top: 10px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 80%;
    }
`;

export const Items = styled.li`
    height: 250px;
    width: 250px;
    list-style: none;
    background-color: #D4D4D4;
    box-shadow: 0 0 20px -10px #2a2a2a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    
    @media screen and (max-width: 768px) {
        max-width: 150px;
        max-height: 150px;
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 150px;
        height: 150px;
    }
    p{
        font-size: 24px;
        width: 90%;
        text-align: center;
        padding: 0 6px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            font-size: 14px;
        }
    }
`;


export const AboutInformation = styled.div`
    width: 94%;
    height: 200px;
    margin: 0 auto 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    p{
        font-size: 24px;
        text-align: center;
    }
    p:nth-child(2){
        color: #A60F14;
        font-weight: bold;
        font-size: 26px;
    }
`;
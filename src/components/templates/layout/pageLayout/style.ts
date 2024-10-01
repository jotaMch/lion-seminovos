import styled from "styled-components";


export const MainStyle = styled.div`  
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #2a2a2a;
    font-family: "Barlow", sans-serif;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
    }
`;


export const Container = styled.div`
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 1024px) {
        width: 90%;
    }

`;
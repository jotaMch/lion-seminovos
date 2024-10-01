import styled from "styled-components";

export const HeaderComponent = styled.header`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    background-color: #2A2A2A;
    align-items: center;
    position: sticky;
    z-index: 2;
    top: 0;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 150px;
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 150px;
    }
`;

export const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        gap: 16px;
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
        gap: 16px;
    }

    .flex{
        display: flex;
        align-items: center;
        gap: 10px;
        
        @media screen and (max-width: 768px) {
            gap: 6px;
            width: 80%;
        }
    }
`;

export const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D1D1D1;
    border-radius: 12px;
    @media screen and (max-width: 768px) {
        width: 250px;
    }
`;


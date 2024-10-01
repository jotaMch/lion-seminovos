import styled from "styled-components";


export const FooterComponent = styled.footer`
    height: 300px;
    width: 100%;
    background-color: #2A2A2A;
    
    @media screen and (max-width: 768px) {
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
    }
`;

export const ContainerFooter = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2%;
    margin: 0 auto;
    background-color: #2A2A2A;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
`;

export const Social = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        color: #D1D1D1;
        /* #A60F14 */
    }
`;

export const SocialList = styled.ul`
    display: flex;
    gap: 22px;

    li{
        list-style: none;
        svg{
            background-color: #222;
            padding: 6PX;
            border-radius: 4PX;
        }
    }
`;

export const BorderDiv = styled.div`
    height: 0.2px;
    width: 50%;
    background-color: #D1D1D1;
`;
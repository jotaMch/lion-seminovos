import styled from "styled-components";

export const ItemList = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        width: 90%;
        gap: 6px;
    }
    @media screen and (max-width: 1024px) {
        width: 90%;
        gap: 6px;
    }
`;

export const Item = styled.li`
    color: #D1D1D1;
    list-style: none;
    cursor: pointer;
`;
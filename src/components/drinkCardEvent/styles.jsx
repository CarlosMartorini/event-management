import styled from 'styled-components';

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #535353;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    height: 11rem;
    margin: 2rem;
    border-bottom: 2px solid #535353;
    
    img {
        width: 3rem;
        height: 10rem;
        margin-right: 3rem;
    }

    span {
        margin: 1rem;
        font-size: 1.2rem;
        font-variant: small-caps;
        max-width: 30rem;
    }
`;
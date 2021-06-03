import styled from 'styled-components';

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50rem;
    height: 11rem;
    margin: 2rem 10rem;
    
    img {
        width: 3rem;
        height: 10rem;
        margin-right: 3rem;
    }

    span {
        margin: 1rem;
        font-size: 1.2rem;
        font-variant: small-caps;
    }
`;
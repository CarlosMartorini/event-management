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

        @media (max-width: 600px) {
            margin: 0;
        }

    }

    span {
        margin: 1rem;
        font-size: 1.2rem;
        font-variant: small-caps;
        max-width: 30rem;
        
        @media (max-width: 600px) {
            font-size: 0.7rem;
        }

    }

    @media (max-width: 600px) {
        flex-direction: column;
        border: none;
        margin: 4rem;
    }

`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #e05616b7;
    color: #0000ffb7;
    border: none;
    border-radius: 0.3rem;
    transition: 0.3s;

    :hover {
        background-color: #e05616;
        color: #0000ff;
        border-radius: 0.6rem;
        padding: 1rem 1.5rem;
        margin: 0.5rem;
        box-shadow: 2px 2px 5px #4646467d;

        @media (max-width: 600px) {
            padding: 0.2rem;
        }

    }

    @media (max-width: 600px) {
        padding: 0.1rem;
        font-size: 0.8rem;
    }
`;
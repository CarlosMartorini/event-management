import styled from 'styled-components';

export const Link = styled.button`
    color: #0000ffb7;
    font-size: 1rem;
    background-color: #ffffffb7;
    padding: 0.5rem 2rem;
    margin: 0 0.3rem;
    border: none;
    border-radius: 0.5rem;
    font-variant: small-caps;
    transition: 0.4s;

    :hover {
        background-color: #ffffff;
        color: #0000ff;
        border-radius: 1rem;
        box-shadow: 2px 2px 5px #4646467d;
    }
`;

export const Title = styled.h1`
    width: 60vw;
    text-align: left;
    position: static;
    color: #0F1594b7;
    font-size: 3rem;
    text-shadow: 1px 1px 5px #ffffffca;
    font-variant: small-caps;
`;
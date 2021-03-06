import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    box-shadow: -1px -1px 20px #c3c3c3;
    border-radius: 1rem;
`;

export const ImgContainer = styled.div`
    img {
        width: 5rem;
        height: 15rem;
        margin: 0.5rem;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-variant: small-caps;
    color: #383838;
    font-size: 1rem;
    
    span{
        width: 6rem;
        margin: 1rem 0;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    padding: 0.6rem 0.8rem;
    margin: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #5581dfb7;
    color: #ffffffb7;
    font-variant: small-caps;
    transition: 0.3s;

    :hover {
        background-color: #5581df;
        color: #ffffff;
        box-shadow: -1px -1px 5px #c3c3c3;
        border-radius: 1rem;
    }
`;
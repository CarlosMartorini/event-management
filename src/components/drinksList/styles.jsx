import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 3rem 2rem;
`;

export const ImgContainer = styled.div`
    img {
        width: 5rem;
        height: 15rem;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0.5rem;
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
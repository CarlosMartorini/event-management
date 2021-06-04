import { useEffect } from 'react';
import { useDrinks } from '../../providers/drinks';
import { Container, List, ImgContainer, InfoContainer, Button } from './styles';

const DrinksList = () => {
    const { 
        drinks, 
        weddingDrinks,
        setWeddingDrinks,
        graduationDrinks,
        setGraduationDrinks,
        confraternizationDrinks, 
        setConfraternizationDrinks,
        getListDrinks, 
        addDrinkOnEvent
    } = useDrinks();


    useEffect(() => {
        getListDrinks()
    })
    
    return (
        <>
            <List>
                {
                    drinks.map((drink) => (
                        <Container key={drink.id}>
                            <ImgContainer>
                                <img src={drink.image_url} alt={drink.name}/>
                            </ImgContainer>
                            <InfoContainer>
                                <p>{drink.name}</p>
                                <p>Since {drink.first_brewed.substring(3)}</p>
                                <p>{drink.tagline}</p>
                                <p>{drink.volume.value}{drink.volume.unit.substring(0, 1)}</p>
                                <label style={{marginTop:'2rem'}}>Add Drink On Event</label>
                                <div>
                                    <Button 
                                        onClick={() => addDrinkOnEvent(weddingDrinks, setWeddingDrinks, drink)}
                                    >Wedding</Button>
                                    <Button
                                        onClick={() => addDrinkOnEvent(graduationDrinks, setGraduationDrinks, drink)}
                                    >Graduation</Button>
                                    <Button
                                        onClick={() => addDrinkOnEvent(confraternizationDrinks, setConfraternizationDrinks, drink)}
                                    >Confraternization</Button>
                                </div>
                            </InfoContainer>
                        </Container>
                    ))
                }
            </List>
        </>
    )
}

export default DrinksList;
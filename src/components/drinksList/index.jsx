import { useDrinks } from '../../providers/drinks';
import { Container, List, ImgContainer, InfoContainer } from './styles';

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

    return (
        <>
            <button onClick={getListDrinks}>Show List</button>
            <List>
                {
                    drinks.map((drink) => (
                        <Container>
                            <ImgContainer>
                                <img src={drink.image_url} alt={drink.name}/>
                            </ImgContainer>
                            <InfoContainer>
                                <span key={drink.id}>{drink.name}</span>
                                <span>{drink.volume.value}{drink.volume.unit}</span>
                                <label>Add Drink On Event</label>
                                <div>
                                    <button 
                                        onClick={() => addDrinkOnEvent(weddingDrinks, setWeddingDrinks, drink)}
                                    >Wedding</button>
                                    <button
                                        onClick={() => addDrinkOnEvent(graduationDrinks, setGraduationDrinks, drink)}
                                    >Graduation</button>
                                    <button
                                        onClick={() => addDrinkOnEvent(confraternizationDrinks, setConfraternizationDrinks, drink)}
                                    >Confraternization</button>
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
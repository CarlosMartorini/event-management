import { useDrinks } from '../../providers/drinks';
import { Card, List, Button } from '../../components/drinkCardEvent/styles';

const Wedding = () => {

    const {weddingDrinks, removeFromEvent, setWeddingDrinks } = useDrinks();

    return (
        <>
            <h2>Wedding Drinks List</h2>
            <h3>{weddingDrinks.length === 0 ? 'Empty List' : `Total drinks: ${weddingDrinks.length}`}</h3>
            <List>
                {
                    weddingDrinks.map((drink) => (
                            <Card>
                                <img src={drink.image_url} alt={drink.name}/>
                                <span key={drink.id}>{drink.name}</span>
                                <span>IBU {drink.ibu}</span>
                                <span>Match: {drink.food_pairing.toString()}</span>
                                <Button onClick={() => removeFromEvent(weddingDrinks, setWeddingDrinks, drink.id)}>Remove</Button>
                            </Card>
                    ))
                }
            </List>
        </>
    )
}

export default Wedding;
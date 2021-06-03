import { useDrinks } from '../../providers/drinks';
import { Card, List } from '../../components/drinkCardEvent/styles';

const Wedding = () => {

    const {weddingDrinks, removeFromEvent } = useDrinks();

    console.log(weddingDrinks);
    return (
        <>
            <h2>Wedding Drinks List</h2>
            <h3>{weddingDrinks.length === 0 ? 'Empty List' : `Total drinks:${weddingDrinks.length}`}</h3>
            {
                weddingDrinks.map((drink) => (
                    <List>
                        <Card>
                            <img src={drink.image_url} alt={drink.name}/>
                            <span key={drink.id}>{drink.name}</span>
                            <span>IBU {drink.ibu}</span>
                            <span>Match: {drink.food_pairing.toString()}</span>
                            <button onClick={() => removeFromEvent(weddingDrinks, drink)}>Remove</button>
                        </Card>
                    </List>
                ))
            }
        </>
    )
}

export default Wedding;
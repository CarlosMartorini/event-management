import { useDrinks } from '../../providers/drinks';
import { Card, List } from '../../components/drinkCardEvent/styles';

const Graduation = () => {

    const { graduationDrinks, removeFromEvent } = useDrinks();

    console.log(graduationDrinks);
    return (
        <>
        <h2>Graduation Drinks List</h2>
        <h3>{graduationDrinks.length === 0 ? 'Empty List' : `Total drinks: ${graduationDrinks.length}`}</h3>
        {
            graduationDrinks.map((drink) => (
                <List>
                    <Card>
                        <img src={drink.image_url} alt={drink.name}/>
                        <span key={drink.id}>{drink.name}</span>
                        <span>IBU {drink.ibu}</span>
                        <span>Match: {drink.food_pairing.toString()}</span>
                        <button onClick={() => removeFromEvent(graduationDrinks, drink)}>Remove</button>
                    </Card>
                </List>
            ))
        }
        </>
    )
}

export default Graduation;
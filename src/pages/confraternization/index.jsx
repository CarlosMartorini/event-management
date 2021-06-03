import { useDrinks } from '../../providers/drinks';
import { Card, List } from '../../components/drinkCardEvent/styles';

const Confraternization = () => {

    const {confraternizationDrinks, removeFromEvent } = useDrinks();

    console.log(confraternizationDrinks);
    return (
        <>
        <h2>Confraternization Drinks List</h2>
        <h3>{confraternizationDrinks.length === 0 ? 'Empty List' : `Total drinks:${confraternizationDrinks.length}`}</h3>
        {
            confraternizationDrinks.map((drink) => (
                <List>
                    <Card>
                        <img src={drink.image_url} alt={drink.name}/>
                        <span key={drink.id}>{drink.name}</span>
                        <span>IBU {drink.ibu}</span>
                        <span>Match: {drink.food_pairing.toString()}</span>
                        <button onClick={() => removeFromEvent(confraternizationDrinks, drink)}>Remove</button>
                    </Card>
                </List>
            ))
        }
        </>
    )
}

export default Confraternization;
import { useDrinks } from '../../providers/drinks';
import { Card, List, Button } from '../../components/drinkCardEvent/styles';

const Confraternization = () => {

    const {confraternizationDrinks, removeFromEvent, setConfraternizationDrinks } = useDrinks();

    return (
        <>
        <h2>Confraternization Drinks List</h2>
        <h3>{confraternizationDrinks.length === 0 ? 'Empty List' : `Total drinks: ${confraternizationDrinks.length}`}</h3>
        <List>
        {
            confraternizationDrinks.map((drink) => (
                    <Card>
                        <img src={drink.image_url} alt={drink.name}/>
                        <span key={drink.id}>{drink.name}</span>
                        <span>IBU {drink.ibu}</span>
                        <span>Match: {drink.food_pairing.toString()}</span>
                        <Button onClick={() => removeFromEvent(confraternizationDrinks, setConfraternizationDrinks, drink.id)}>Remove</Button>
                    </Card>
            ))
        }
        </List>
        </>
    )
}

export default Confraternization;
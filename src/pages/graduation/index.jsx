import { useDrinks } from '../../providers/drinks';
import { Card, List, Button } from '../../components/drinkCardEvent/styles';

const Graduation = () => {

    const { graduationDrinks, setGraduationDrinks, removeFromEvent } = useDrinks();

    return (
        <>
        <h2>Graduation Drinks List</h2>
        <h3>{graduationDrinks.length === 0 ? 'Empty List' : `Total drinks: ${graduationDrinks.length}`}</h3>
        <List>
        {
            graduationDrinks.map((drink) => (
                    <Card>
                        <img src={drink.image_url} alt={drink.name}/>
                        <span key={drink.id}>{drink.name}</span>
                        <span>IBU {drink.ibu}</span>
                        <span>Match: {drink.food_pairing.toString()}</span>
                        <Button onClick={() => removeFromEvent(graduationDrinks, setGraduationDrinks, drink.id)}>Remove</Button>
                    </Card>
            ))
        }
        </List>
        </>
    )
}

export default Graduation;
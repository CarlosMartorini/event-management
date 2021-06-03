import { useDrinks } from '../../providers/drinks';

const Wedding = () => {

    const {weddingDrinks} = useDrinks();

    console.log(weddingDrinks);
    return (
        <>
            <div>Wedding</div>
            {
                weddingDrinks.map((drink) => (
                    <label>{drink.id}</label>
                ))
            }
        </>
    )
}

export default Wedding;
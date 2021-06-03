import { useDrinks } from '../../providers/drinks';

const Confraternization = () => {

    const {confraternizationDrinks} = useDrinks();

    console.log(confraternizationDrinks);
    return (
        <div>Confraternization</div>
    )
}

export default Confraternization;
import { useDrinks } from '../../providers/drinks';

const Graduation = () => {

    const { graduationDrinks } = useDrinks();

    console.log(graduationDrinks);
    return (
        <div>Graduation</div>
    )
}

export default Graduation;
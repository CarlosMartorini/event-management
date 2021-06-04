import { useHistory } from "react-router-dom";
import { Link, Title } from './styles';

const Menu = () => {

    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
    }

    return (
        <>
            <Title>Event Management</Title>
            <Link onClick={() => handleClick('/')}>Home</Link>
            <Link onClick={() => handleClick('/wedding')}>Wedding</Link>
            <Link onClick={() => handleClick('/graduation')}>Graduation</Link>
            <Link onClick={() => handleClick('/confraternization')}>Confraternization</Link>
        </>
    )
}

export default Menu;
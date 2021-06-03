import { DrinksProvider } from './drinks';

const Providers = ({children}) => {
    return (
        <DrinksProvider>
            {children}
        </DrinksProvider>
    )
}

export default Providers;
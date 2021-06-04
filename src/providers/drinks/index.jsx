import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const DrinkContext = createContext();

export const DrinksProvider = ({children}) => {
    
    const [drinks, setDrinks] = useState([]);
    const [weddingDrinks, setWeddingDrinks] = useState([]);
    const [graduationDrinks, setGraduationDrinks] = useState([]);
    const [confraternizationDrinks, setConfraternizationDrinks] = useState([]);

    const getListDrinks = () => {
        axios('https://api.punkapi.com/v2/beers')
        .then((response) => setDrinks(response.data))
    }

    const addDrinkOnEvent = (event, setEvent, drink) => {
        if (event.some( e => e.id === drink.id) === false ) {
            setEvent([...event, drink])
        }
    }

    const removeFromEvent = (event, setEvent, drinkId) => {
        const newList = event.filter((e) => e.id !== drinkId);
        setEvent(newList);
    }
    
    return (
        <DrinkContext.Provider
            value={{
                drinks,
                weddingDrinks,
                setWeddingDrinks,
                graduationDrinks,
                setGraduationDrinks,
                confraternizationDrinks, 
                setConfraternizationDrinks,
                getListDrinks,
                addDrinkOnEvent,
                removeFromEvent
            }}
        >
            {children}
        </DrinkContext.Provider>
    )
}

export const useDrinks = () => useContext(DrinkContext);
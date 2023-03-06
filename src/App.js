import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [restaurants, setRestaurants] = useState([])
    const getRestaurants = () => {
        fetch('http://localhost:8080/restaurants')
            .then(data => data.json())
            .then(restaurants => {
                console.log(restaurants)
                setRestaurants(restaurants)
            })
    }

    useEffect(() => {
        getRestaurants()
    }, [])


    return (
        <>
            <ul>
                {restaurants.map(restaurant => <li>{restaurant.name} </li> )}
            </ul>
        </>
    )

}

export default App;

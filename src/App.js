import './App.scss';
import {useEffect, useState} from "react";
import RestaurantDisplay from "./RestaurantDisplay";

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
            <main class="container">
                <section class="row">
                    {restaurants.map(restaurant => <RestaurantDisplay restaurant={ restaurant } />)}
                </section>
            </main>
        </>
    )
}
export default App;

import {useEffect, useState} from 'react';
import RestaurantDisplay from '../RestaurantDisplay';

const RestaurantPage = () => {

    const [restaurants, setRestaurants] = useState([])
    const getRestaurants = () => {
        fetch('http://localhost:8080/restaurants')
            .then(data => data.json())
            .then(restaurants => {
                setRestaurants(restaurants)
            })
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    return (
        <>
                <section className='row'>
                    {restaurants.map(restaurant => <RestaurantDisplay restaurant={ restaurant } />)}
                </section>

        </>
    )
}
export default RestaurantPage;

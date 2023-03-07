import {useEffect, useState} from 'react';
import Restaurant from '../Restaurant';
import Hero from '../Hero';

const RestaurantPage = ({setRestaurantId, restaurantId}) => {

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
            <Hero heroHeader='Food. Delivered' restaurantId={restaurantId}/>

            <section className='row'>
                {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurantData={ restaurant } setRestaurantId={setRestaurantId}/>)}
            </section>
        </>
    )
}
export default RestaurantPage;

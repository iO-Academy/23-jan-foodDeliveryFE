import './styles.scss';
import {useEffect, useState} from 'react';
import Hero from '../Hero';
import Restaurant from '../Restaurant';
const OrderPage = ({ restaurantId }) => {

    const [menu, setMenu] = useState([])

    const getMenu = () => {
        fetch(`http://localhost:8080/restaurants/${restaurantId}`)
            .then(data => data.json())
            .then(menu => {
                setMenu(menu)
            })
    }

    useEffect(() => {
        getMenu()
    }, [menu])

    return (
            <Hero heroHeader={menu.restaurant} restaurantId={restaurantId}/>
    )
}
export default OrderPage;

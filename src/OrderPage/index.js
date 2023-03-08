import './styles.scss';
import {useEffect, useState} from 'react';
import Hero from '../Hero';
import MenuItem from "../MenuItem";

const OrderPage = ({restaurantId}) => {
    const [menu, setMenu] = useState({})
    const [order, setOrder] = useState({0:1, 2:3})

    const getMenu = () => {
        fetch(`http://localhost:8080/restaurants/${restaurantId}`)
            .then(data => data.json())
            .then(menu => {
                setMenu(menu)
            })
    }

    useEffect(getMenu,[restaurantId])

    return (
        <>
            <Hero heroHeader={menu.restaurant} restaurantId={restaurantId} />
            {'foodItems' in menu &&
                <div className='row p-1'>
                    {menu.foodItems.map((menuItem, index) => <MenuItem key={index} menuItemData={menuItem} />)}
                </div>
            }
        </>
    )
}
export default OrderPage;

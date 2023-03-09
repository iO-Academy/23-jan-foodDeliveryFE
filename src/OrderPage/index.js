import './styles.scss';
import {useEffect, useState} from 'react';
import Hero from '../Hero';
import MenuItem from "../MenuItem";
import OrderTotal from "../OrderTotal";

const OrderPage = ({restaurantId}) => {
    const [menu, setMenu] = useState({})
    const [order, setOrder] = useState({})

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
            <OrderTotal menu={menu} order={order}/>
            <Hero heroHeader={menu.restaurant} restaurantId={restaurantId} />
            {'foodItems' in menu &&
                <div className='row p-1'>
                    {menu.foodItems.map((menuItem, index) => <MenuItem key={index} index={index} menuItemData={menuItem} order={order} setOrder={setOrder}/>)}
                </div>
            }
        </>
    )
}
export default OrderPage;

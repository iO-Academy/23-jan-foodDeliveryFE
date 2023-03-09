import './styles.scss';
import {useEffect, useState} from 'react';
import Hero from '../Hero';
import MenuItem from "../MenuItem";
import OrderSummary from "../OrderSummary";

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
            <Hero heroHeader={menu.restaurant} restaurantId={restaurantId} />
            {'foodItems' in menu &&
                <div className='row p-1'>
                    <div className='row col-lg-9'>
                        {menu.foodItems.map((menuItem, index) => <MenuItem key={index} index={index} menuItemData={menuItem} order={order} setOrder={setOrder}/>)}
                    </div>
                    <div className='row col-lg-3 col-sm-12 order-summary-container bg-light'>
                        <OrderSummary order={order} menu={menu} setOrder={setOrder}/>
                    </div>
                </div>
            }
        </>
    )
}
export default OrderPage;

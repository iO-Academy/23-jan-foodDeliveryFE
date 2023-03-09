import './styles.scss';
import {useEffect, useState} from 'react';
import Hero from '../Hero';
import MenuItem from "../MenuItem";
import OrderItem from "../OrderItem";

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

    //object using index as unique data
    // let objDemo = {
    //     "1": {
    //         "name": "Steak Burrito",
    //         "price": 10.76,
    //         "qty": 1
    //     },
    //     "2": {
    //         "name": "Carnitas Burrito",
    //         "price": 0.78,
    //         "qty": 2
    //     },
    //     "4": {
    //         "name": "Chorizo Burrito",
    //         "price": 3.86,
    //         "qty": 1
    //     }
    // }

    const addToOrder = (index, name, price) => {
        let newOrder = {name: name, price: price, qty: 1}
        let orderClone = {...order}

        if(index in orderClone) {
            orderClone[index].qty++
        } else {
            orderClone[index] = newOrder
        }

        setOrder(orderClone)
    }

    const removeFromOrder = (index) => {
        let orderClone = {...order}
        if(orderClone[index].qty === 1) {
            delete orderClone[index]
        } else {
            orderClone[index].qty--
        }
        setOrder(orderClone)
    }

    // array using name as unique data
    // let arrDemo = [
    //     {name: 'Steak Burrito', price: 9.78, qty: 1},
    //     {name: 'Chimichanga', price: 3.78, qty: 3},
    //     {name: 'Chicken Burrito', price: 7.33, qty: 1}
    // ]
    // const addToOrder = (name, price) => {
    //     let newOrder = {name: name, price: price, qty: 1}
    //
    //     if(!order.length) {
    //         setOrder([newOrder])
    //     } else {
    //         let orderClone = [...order]
    //         let updated = false
    //         orderClone.forEach((item, index) => {
    //             if(item.name === name) {
    //                 orderClone[index].qty++
    //                 updated = true
    //             }
    //         })
    //
    //         if(!updated) {
    //             orderClone.push(newOrder)
    //         }
    //
    //         setOrder(orderClone)
    //     }
    // }


    return (
        <>
            <Hero heroHeader={menu.restaurant} restaurantId={restaurantId} />

            {Object.keys(order).map((item, index) => <OrderItem key={index}
                                                                index={index}
                                                                item={item}
                                                                addToOrder={addToOrder}
                                                                removeFromOrder={removeFromOrder}
                                                                order={order}
                                                                name={order[item].name}
                                                                price={order[item].price}/>)

            }

            {/*{order.map((item, index) => <li key={index}>{item.name} - quantity: {item.qty} - price {(item.price * item.qty).toFixed(2)} </li>)}*/}
            {'foodItems' in menu &&
                <div className='row p-1'>
                    {menu.foodItems.map((menuItem, index) => <MenuItem key={index} index={index} addToOrder={addToOrder} removeFromOrder={removeFromOrder} order={order} menuItemData={menuItem} />)}
                </div>
            }
        </>
    )
}
export default OrderPage;

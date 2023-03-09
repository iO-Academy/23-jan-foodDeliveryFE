import {useEffect, useState} from "react";

const OrderTotal = ({order, menu}) => {


    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        let cost = 0
        Object.keys(order).forEach(key => {
            setSubTotal( cost + (menu.foodItems[key].price * order[key]))
        })

    },[order])

    return (
        <>
            <div className='d-flex justify-content-between'>
                <p>Sub-total:</p>
                <p>£{subTotal.toFixed(2)}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Delivery fee:</p>
                <p>£0.99</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Service fee:</p>
                <p>£1.50</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Total:</p>
                <p>£{(subTotal + 0.99 + 1.5).toFixed(2)}</p>
            </div>
        </>
    )
}

export default OrderTotal
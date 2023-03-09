import {useEffect, useState} from "react";

const OrderTotal = ({order, menu}) => {

    const [total, setTotal] = useState(0)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {

        Object.keys (order).forEach (key => {
            setSubTotal( subTotal + (menu.foodItems[key].price*order[key]))
        })
        setTotal(subTotal + 0.99 + 1.5)
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
                <p>£{total.toFixed(2)}</p>
            </div>
        </>
    )
}

export default OrderTotal
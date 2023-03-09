import {useEffect} from "react";

const OrderTotal = (order, menu) => {

    const subTotal = () => {
        Object.keys (order).forEach (key => {
            console.log('yes')
        })
    }
    useEffect(() => {
        Object.keys (order).forEach (key => {
            console.log(key)
        })
    },[order])

    return (
        <>
            <div className='d-flex justify-content-between'>
                <p>Sub-total:</p>
                <p>£</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Delivery fee:</p>
                <p>£</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Service fee:</p>
                <p>£</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Total:</p>
                <p>£</p>
            </div>
        </>
    )
}

export default OrderTotal
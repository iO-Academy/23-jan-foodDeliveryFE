import Trolley from './trolley.png'
import {useEffect} from "react";
import Restaurant from "../Restaurant";
import OrderItem from "../OrderItem";


const OrderSummary = ({order,menu, setOrder}) => {
    return (
        <div className='col-2 bg-light h-25 w-100'>
            <div>
                <img onClick={() => console.log(order)} src={Trolley} alt='Trolley' className='w-25 trolley' />
                {Object.keys(order).map((index) => <OrderItem key={index} index={index} menu={menu} order={order} setOrder={setOrder}/>)}
            </div>
        </div>
    )
}

export default OrderSummary
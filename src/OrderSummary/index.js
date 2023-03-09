import Trolley from './trolley.png'
import OrderItem from "../OrderItem";


const OrderSummary = ({order,menu, setOrder}) => {
    return (
        <div className='col-2 h-25 w-100'>
            <div>
                <img src={Trolley} alt='Trolley' className='trolley m-2' />
                {Object.keys(order).map((index) => <OrderItem key={index} index={index} menu={menu} order={order} setOrder={setOrder}/>)}
            </div>
        </div>
    )
}

export default OrderSummary
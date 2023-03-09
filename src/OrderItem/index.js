import ItemCounter from "../ItemCounter";

const OrderItem = ({index, menu, order, setOrder}) => {
    return (
        <div className='d-flex justify-content-between fw-bold align-items-end p-1'>
            <p>{menu.foodItems[index].foodName}</p>
            <ItemCounter index={index} order={order} setOrder={setOrder}/>
        </div>
    )
}

export default OrderItem
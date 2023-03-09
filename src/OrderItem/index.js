import OrderButtons from "../OrderButtons";

const OrderItem = ({
                       index,
                       item,
                       addToOrder,
                       removeFromOrder,
                       order,
                       name,
                       price
                    }) => {
    return (
        <>
            <li>{name} - quantity: {item in order ? order[item].qty : "0"} - price {(price * order[item].qty).toFixed(2)} </li>
            <OrderButtons
                index={item}
                addToOrder={addToOrder}
                removeFromOrder={removeFromOrder}
                order={order}
                name={name}
                price={price}
            />
        </>
    )
}

export default OrderItem
const OrderButtons = ({order, index, addToOrder, removeFromOrder, name, price}) => {
    const handleAddClick = () => {
        addToOrder(index, name, price)
    }

    const handleRemoveClick = () => {
        removeFromOrder(index)
    }

    return (
        <>
            <button onClick={handleAddClick}>Add</button>
            {index in order ? order[index].qty : "0"}
            <button onClick={handleRemoveClick} disabled={index in order ? false : true}>Remove</button>
        </>
    )
}

export default OrderButtons
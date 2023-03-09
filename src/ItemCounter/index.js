const ItemCounter = ({order, setOrder, index}) => {

    const handleClickPlus = () => {
        let tempOrder = {...order}

        if (index in tempOrder){
            tempOrder[index]= parseInt(tempOrder[index]) +1
        } else {
            tempOrder[index] = 1
        }
        setOrder(tempOrder)
    }

    const handleClickMinus = () => {
        let tempOrder = {...order}

        if (index in tempOrder) {
            if (tempOrder[index] === 1) {
                delete tempOrder[index]
            } else {
                tempOrder[index] = parseInt(tempOrder[index]) - 1
            }
            setOrder(tempOrder)
        }
    }

    return (
        <div className='d-flex align-items-baseline'>
            <button onClick={handleClickPlus} className='btn btn-primary'>+</button>
            <p className='p-1'>{index in order ? order[index] : '0'}</p>
            <button onClick={handleClickMinus} className='btn btn-primary'>-</button>
        </div>
    )
}

export default ItemCounter



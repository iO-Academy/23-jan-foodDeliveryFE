import {useState} from "react";

const ItemCounter = (order,setOrder) => {

    const [count, setCount] = useState(0)

    const handleClickPlus = () => {
        setCount(count + 1)

        let tempKey = 11

        let tempOrder = order

        if (tempKey in tempOrder){
            tempOrder[tempKey]=tempKey[tempKey]+1
            setOrder(tempOrder)
        }
        else {
            tempOrder[tempKey] = 1
            setOrder(tempOrder)
        }
    }

    const handleClickMinus = () => {
        if (count >= 1) {
        setCount(count - 1)
        } else {
            setCount(0)
        }

        let tempOrder = order

        let tempKey = 11

        if (tempKey in tempOrder){
            if (tempOrder[tempKey]=1){
                delete tempOrder[tempKey]
                setOrder(tempOrder)
            }
            else{
                tempOrder[tempKey]=tempKey[tempKey]-1
                setOrder(tempOrder)
            }
        }
    }

    return (
        <div className='d-flex align-items-baseline'>
            <button onClick={handleClickPlus} className='btn btn-primary'>+</button>
            <p className='p-1'>{count}</p>
            <button onClick={handleClickMinus} className='btn btn-primary'>-</button>
        </div>
    )
}

export default ItemCounter



import {useState} from "react";

const ItemCounter = () => {

    const [count, setCount] = useState(0)

    const handleClickPlus = () => {
        setCount(count + 1)
    }

    const handleClickMinus = () => {
        if (count >= 1) {
        setCount(count - 1)
        } else {
            setCount(count = 0)
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



import './styles.scss';
import {useEffect, useState} from "react";
const OrderPage = () => {

    const [menu, setMenu] = useState([])
    const getMenu = () => {
        fetch('http://localhost:8080/restaurants/1')
            .then(data => data.json())
            .then(menu => {
                setMenu(menu)
            })
    }

    useEffect((getMenu) => {
    }, [])


    return (
        <>


        </>
    )
}
export default OrderPage;
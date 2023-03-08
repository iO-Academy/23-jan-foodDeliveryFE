import './styles.scss';
import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";
const OrderPage = () => {

    const [menu, setMenu] = useState([])
    const getMenu = () => {
        fetch('http://localhost:8080/restaurants/6')
            .then(data => data.json())
            .then(menu => {
                setMenu(menu.foodItems)
            })
    }

    useEffect ( () => {getMenu ()}
    , [menu])

    return (
        <div className="row">
            {menu.map(menuItem => <MenuItem key={menuItem.index} menuItemData = {menuItem} /> ) }
        </div>
    )
}
export default OrderPage;
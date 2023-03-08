import RestaurantPage from './RestaurantPage';
import Nav from "./Nav";
import "./App.scss"
import {useState} from "react";
import OrderPage from "./OrderPage";
const App = () => {

    const [restaurantId, setRestaurantId] = useState(null)

    return (
        <main className='container-fluid'>
            <Nav restaurantId={restaurantId} setRestaurantId={setRestaurantId} />

            {restaurantId &&
                <OrderPage restaurantId={restaurantId} />
            }
            {!restaurantId &&
                <RestaurantPage setRestaurantId={setRestaurantId} restaurantId={restaurantId}  />
            }

            <footer className='border-top mt-3'>
                <p> © Copyright iO Academy 2023 </p>
            </footer>
        </main>
    )
}
export default App;

import './index.scss'
function Nav({restaurantId, setRestaurantId}) {
    const back = () => {
        setRestaurantId(null)
    }

    return (
        <nav className='navbar justify-content-center justify-content-lg-between flex-column flex-lg-row navbar-light bg-light px-4 align-items-center'>
            <h4 className='navbar-brand'><span>Food</span>Delivery</h4>
            {restaurantId && <button className='' onClick={back}>&lt;&lt;Change Restaurant</button>}
        </nav>
    )
}

export default Nav;
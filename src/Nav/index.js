import './styles.scss'
function Nav({restaurantId, setRestaurantId}) {
    const handleClick = () => {
        setRestaurantId(null)
    }

    return (
        <nav className='row'>
            <div className="col navbar navbar-light bg-light px-4 justify-content-center justify-content-lg-between flex-column flex-lg-row align-items-center">
                <h4 className='navbar-brand'><span>Food</span>Delivery</h4>
                {restaurantId &&
                    <button onClick={handleClick}>&lt;&lt;Change Restaurant</button>
                }
            </div>
        </nav>
    )
}

export default Nav;
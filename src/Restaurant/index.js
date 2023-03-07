import './styles.scss';

const Restaurant = ({ restaurantData, heroHeader, setRestaurantId}) => {

    const handleClick = () => {
        setRestaurantId(restaurantData.id)
    }

    return (
        <div className='restaurant col-lg-3 col-12'>
            <h1 onClick={handleClick}>{ restaurantData.name }</h1>
        </div>
    )
}
export default Restaurant;

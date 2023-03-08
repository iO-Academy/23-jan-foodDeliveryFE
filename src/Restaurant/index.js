import './styles.scss';
const Restaurant = ({restaurantData, setRestaurantId}) => {

    const handleClick = () => {
        setRestaurantId(restaurantData.id)
    }

    return (
        <div onClick={handleClick} className='restaurant col-lg-3 col-12'>
            <h1>{restaurantData.name}</h1>
        </div>
    )
}
export default Restaurant;

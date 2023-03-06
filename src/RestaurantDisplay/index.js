import './styles.scss';
const RestaurantDisplay = ({ restaurant }) => {
    return (
        <>
            <div className='restaurant col-lg-3 col-12'>
                <h1>{ restaurant.name }</h1>
            </div>
        </>
    )
}
export default RestaurantDisplay;

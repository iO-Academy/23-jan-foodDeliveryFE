import './styles.scss';
const Restaurant = ({ restaurantData }) => {
    return (
        <>
            <div className='restaurant col-lg-3 col-12'>
                <h1>{ restaurantData.name }</h1>
            </div>
        </>
    )
}
export default Restaurant;
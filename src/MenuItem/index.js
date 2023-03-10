import './styles.scss';
import ItemCounter from "../ItemCounter";

const MenuItem = ({menuItemData, order, setOrder, index}) => {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow mb-3 border-dark">
                <div className="card-body">
                    <h4 className="card-title">{menuItemData.foodName}</h4>
                    <ul className="list-unstyled list-inline">
                        <li className="rounded fw-bold list-inline-item"><span className='calories badge'>Calories: {menuItemData.calories}</span></li>
                        {menuItemData.foodType &&
                            <li className="rounded fw-bold list-inline-item"><span className='type badge'>Type: {menuItemData.foodType}</span></li>
                        }
                        {menuItemData.sideItem &&
                            <li className="rounded fw-bold list-inline-item"><span className='side badge'>Side</span></li>
                        }
                    </ul>
                    <div className='d-md-flex justify-content-between align-items-end d-lg-block'>
                        <p className='fw-bold'>£ {menuItemData.price.toFixed(2)} </p>
                        <ItemCounter order={order} setOrder={setOrder} index={index} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;
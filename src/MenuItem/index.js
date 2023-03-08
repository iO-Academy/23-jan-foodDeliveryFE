import './styles.scss';

const MenuItem = ({ menuItemData }) => {
    return (
        <div className="col-12 col-md-4 col-lg-2">
            <div className="card shadow mb-3 border-dark">
                <div className="card-body">
                    <h4 className="card-title">{ menuItemData.foodName }</h4>
                    <ul className="list-unstyled">
                        <li className="list-group-item  rounded fw-bold"><span class='calories badge'>Calories: { menuItemData.calories }</span></li>
                        {menuItemData.foodType &&
                            <li className="list-group-item rounded fw-bold"><span className='type badge'>Type: { menuItemData.foodType }</span></li>
                        }
                        {!menuItemData.foodType &&
                            <li></li>
                        }
                        {menuItemData.sideItem &&
                            <li className="list-group-item rounded fw-bold"><span className='side badge'>Side</span></li>
                        }
                        {!menuItemData.sideItem &&
                            <li></li>
                        }
                    </ul>
                    <p className="fw-bold">£ { menuItemData.price} </p>
                </div>
            </div>
        </div>
    )
}





export default MenuItem;
import './styles.scss';

const MenuItem = ({menuItemData}) => {
    return (
        <div className="col col-md-4 col-lg-2">
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
                    <p className="fw-bold">£ {menuItemData.price.toFixed(2)} </p>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;
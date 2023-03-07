import './styles.scss';

const MenuItem = ({ menuItemData }) => {
    return (
        <div className="col-12 col-md-4 col-lg-2">
            <div className="card shadow mb-3 border-dark">
                <div className="card-body">
                    <h4 className="card-title">{ menuItemData.foodName }</h4>
                    <ul className="list-unstyled">
                        <li className="list-group-item calories rounded fw-bold">Calories: { menuItemData.calories }</li>
                        <li className="list-group-item type rounded fw-bold">Type: { menuItemData.foodType }</li>
                    </ul>
                    <p className="fw-bold">£ { menuItemData.price} </p>
                </div>
            </div>
        </div>
    )
}


export default MenuItem;
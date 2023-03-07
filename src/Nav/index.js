import './index.scss'
function Nav() {
    const back = () => {
        //State goes here from S2T1
    }

    return (
        <nav className='navbar justify-content-center justify-content-lg-between flex-column flex-lg-row navbar-light bg-light px-4 align-items-center'>
            <h4 className='navbar-brand'><span>Food</span>Delivery</h4>
            <button className='' onClick={back}>&lt;&lt;Change Restaurant</button>
        </nav>
    )
}

export default Nav;
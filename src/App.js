import RestaurantPage from './RestaurantPage';
import Nav from "./Nav";
import "./App.scss"

const App = () => {
  return (
        <main className='container-fluid'>
        <Nav />
          <section className='col-12'>
            <div id='headerImg' className="p-5 text-center bg-image">
              <div className="mask" >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="bg-white p-2 p-md-4 text-dark bg-opacity-75 m-2">
                    <h1 className="mb-3 heroTitle">Food. Delivered.</h1>
                    <h4 className="mb-3 fs-6 text">Order your favourite food from local restaurants, right to your door</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
              <RestaurantPage />
          </section>

          <footer>
            <p className="border-top mt-3"> © Copyright iO Academy 2023 </p>
          </footer>
        </main>
  )
}
export default App;

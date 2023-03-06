import './App.scss';

const App = () => {
  return (
      <>
        <main className='container-fluid'>
          <nav className='navbar'>
          </nav>
          <section className='col-12'>
            <div id='headerImg' className="p-5 text-center bg-image rounded-3">
              <div className="mask" >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
  )
}


export default App;

import Header from "../components/Header"
import Product from "../components/Product"
const Home = () => {

  return (
    <div>
      <Header/>
      <div className="home">

        <div className="container">
          <h2>Our Products</h2>
          <div className="home__container">
            <div className="home__card">
              <Product/>
            </div>
            <div className="home__card">
              <Product/>
            </div>
            <div className="home__card">
              <Product/>
            </div>
            <div className="home__card">
              <Product/>
            </div>
            <div className="home__card">
              <Product/>
            </div>
            <div className="home__card">
              <Product/>
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
  )

}

export default Home
import Header from "../components/Header"
import Product from "../components/Product"
import dataProducts from "../dataProducts"

const Home = () => {

  const FillMenu = () => {
    return dataProducts.map((el) => {
        return (<div key={el.id} className="home__card">
          <Product title={el.title} alt={el.alt} descr={el.description}  priceBig ={el.price_grande} priceCombo ={el.price_combo} img={el.img} />
        </div>)
    })
  }

  return (
    <div>
      <Header value={0}/>
      <div className="home">
        <div className="container">
          <h2>Nossos produtos</h2>
          <div className="home__container">
            {<FillMenu/>}
          </div>
        </div>    
      </div>     
    </div>
  )

}

export default Home
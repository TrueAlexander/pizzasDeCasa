import Header from "../components/Header"
import Product from "../components/Product"
import dataProducts from "../dataProducts"

const Home = () => {

  const FillMenu = () => {
    return dataProducts.map((el) => {
        return (<div key={el.id} className="home__card">
          <Product title={el.title} alt={el.alt} descr={el.description}  priceBig ={el.price_grande} priceCombo ={el.price_combo} img={el.img} id={el.id}/>
        </div>)
    })
  }

  const cost = () => {
    const newCosts = JSON.parse(localStorage.getItem("cartItems"))  
    function calcCost(arr) {
      let resCost = 0
      for ( let i = 0; i < arr.length; i++) resCost += arr[i].cost
      return resCost 
    }
    return localStorage.getItem("cartItems") ? calcCost(newCosts) : 0
  }

  const qty = () => {
    const newCosts = JSON.parse(localStorage.getItem("cartItems"))  
    function calcQty(arr) {
      let resQty = 0
      for ( let i = 0; i < arr.length; i++) resQty += arr[i].quantity.quantity
      return resQty 
    }
    return localStorage.getItem("cartItems") ? calcQty(newCosts) : 0
  }

  

  return (
    <div>
      <Header 
        qty={qty()} 
        cost={cost()} />
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
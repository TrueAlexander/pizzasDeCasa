import Header from "../components/Header"
import FillMenu from "../components/FillMenu"

const Home = () => {

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
        qty={0} 
        cost={0}
        visibility = {true}   
      />
      <div className="home">
        <div className="container">
          <h2>Nosso cardápio</h2>
          <div className="home__container">
            {<FillMenu/>}
          </div>
        </div>    
      </div>     
    </div>
  )

}

export default Home
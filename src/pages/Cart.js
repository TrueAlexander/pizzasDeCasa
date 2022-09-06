import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Delivery from "../components/Delivery"
import RenderCartTable from "../components/RenderCartTable"
import { useState } from "react"
import { clearCart } from "../features/cartSlice"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const actualCart = useSelector((state) => state.cart.cart)
  const deliveryCost = useSelector((state) => state.delivery.delivery)
  const totalCost = () => {
    let res = 0
    for(let item of actualCart) {
      res += item.cost
    }
    return res
  }


  const [disabled, setDisabled] = useState(actualCart.length > 0 ? false : true)

  const clickHandler = () => {
    setDisabled(true)
    dispatch(clearCart())
  }

  const clickPayment = () => {
  
    // const ordenNumber = Math.floor(Math.random()*1000000)
    navigate("/payment", {
      state: {
        // purchase: arrToRender,
        // delivery: del,
        // ordenNumber: ordenNumber,
        // total: childData + del
      }
    })
  }

 
  return (
    <div className="cart">
      <Header
        visibility = {false}  
      />
      <div className="container">
        <h2>Sua Cesta</h2>      
        <RenderCartTable setDisabled={setDisabled} />
        <Delivery disabled={disabled} />
        <h3>Total a pagar:</h3>
        <h2 className="cart__total">
          {deliveryCost + totalCost()} Rs</h2>
      </div>
      <Link className="cart__btn btn" to="/home">Voltar ao Menu</Link>
      <button 
        className="cart__btn btn" 
        disabled={disabled}
        onClick={clickPayment} 
      >
        Pagar
      </button>
      <button 
        className="cart__btn btn"
        onClick={clickHandler}
        disabled={disabled}
      >
        Vaziar a cesta
      </button>
    </div>
  )
}



export default Cart
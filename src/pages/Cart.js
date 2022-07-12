import {Link, useNavigate} from "react-router-dom"
import Header from "../components/Header"
import Delivery from "../components/Delivery"
import RenderCartTable from "../components/RenderCartTable"
import { useState } from "react"

const Cart = () => {

  const navigate = useNavigate()
  
  const [del, setDel] = useState(0)
  const [childData, setChildData] = useState("")
  const [arrToRender, setArrToRender] = useState("")
  const [vaziar, setVaziar] = useState(localStorage.length > 0 ? false : true)

  const clearCart = () => {
    if(vaziar) localStorage.clear()
  }

  const clickHandler = () => {
    setVaziar(true)
  }

  const clickPayment = () => {
    
    navigate("/Payment", {
      state: {
        purchase: arrToRender,
        delivery: del
      }
    })
  }

  return (
    <div className="cart">
      <Header
        qty = {0}
        cost = {0}
        visibility = {false}  
      />
      <div className="container">
        <h2>Sua Cesta</h2>      
        <RenderCartTable
          passChildData={setChildData}
          clearCart={clearCart}
          passArrToRender={setArrToRender}      
        />
        <Delivery
          changeDel={del => setDel(del)}
          vaziar={vaziar}
        />
        <h3>Total a pagar:</h3>
        <h2 className="cart__total">{vaziar ? 0 : childData + del} Rs</h2>
      </div>
      <Link className="cart__btn btn" to={"/Home"}>Voltar ao Menu</Link>
      <button 
        className="cart__btn btn" 
        disabled={vaziar || localStorage.length === 0 ? true : false}
        onClick={clickPayment} 
      >
        Pagar
      </button>
      <button 
        className="cart__btn btn"
        onClick={clickHandler}
        disabled={vaziar || localStorage.length === 0 ? true : false}
      >
        Vaziar a cesta
      </button>
    </div>
  )
}



export default Cart
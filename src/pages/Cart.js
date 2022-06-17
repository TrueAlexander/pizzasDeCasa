import {Link} from "react-router-dom"
import Header from "../components/Header"
import Delivery from "../components/Delivery"
import RenderCartTable from "../components/RenderCartTable"
import Modal from "../components/Modal"
import { useState } from "react"

const Cart = () => {

  const [del, setDel] = useState(0)
  const [childData, setChildData] = useState("")
  const [vaziar, setVaziar] = useState(false)

  const clearCart = () => {
    if(vaziar) localStorage.clear()
  }

  const clickHandler = () => {
    setVaziar(true)
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
        />
        <Delivery
          changeDel={del => setDel(del)}
        />
        <h3>Total a pagar:</h3>
        <h2 className="cart__total">{vaziar ? 0 : childData + del} Rs</h2>
      </div>
      <Link className="cart__btn btn" to={"/Home"}>Voltar ao Menu</Link>
      <button className="cart__btn btn" disabled={!vaziar ? false : true} >Pagar</button>
      <button 
        className="cart__btn btn"
        onClick={clickHandler}
        disabled={!vaziar ? false : true}
      >
        Vaziar a cesta
      </button>
      <Modal/>
    </div>
  )
}



export default Cart
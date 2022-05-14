import {Link} from "react-router-dom"
import Header from "../components/Header"
import Delivery from "../components/Delivery"
import Modal from "../components/Modal"

const Cart = () => {

  return (
    <div className="cart">
      <Header/>
      <div className="container">
        <h2>Your Cart</h2>      
        <div className="cart__container">
          <div className="cart__row">
            <div className="cart__item">Name</div>
            <div className="cart__item">Quantity</div>
            <div className="cart__item">Price, Rs</div>
            <div className="cart__item">Cost, Rs</div>
          </div>
          <div className="cart__row">
            <div className="cart__item">Product Title 1</div>
            <div className="cart__item">1</div>
            <div className="cart__item">100</div>
            <div className="cart__item">100</div>
          </div>  
          <div className="cart__row">
            <div className="cart__item"></div>
            <div className="cart__item"></div>
            <div className="cart__item"></div>
            <div className="cart__item"></div>
          </div>  
          <div className="cart__row">
            <div className="cart__item">Total</div>
            <div className="cart__item">1</div>
            <div className="cart__item"></div>
            <div className="cart__item">100</div>
          </div>          
        </div>
        <Delivery />
        <h3>Total to pay:</h3>
        <h2 className="cart__total">150 Rs</h2>
      </div>
      <Link className="cart__btn btn" to={"/"}>Back to Menu</Link>
      <button className="cart__btn btn" >Send the bill</button>
      <Modal/>
    </div>
  )
}



export default Cart
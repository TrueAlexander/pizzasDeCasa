import {Link} from "react-router-dom"
import Header from "../components/Header"
import Delivery from "../components/Delivery"
import Modal from "../components/Modal"
import { useLocation } from "react-router-dom"

const Cart = () => {

  const location = useLocation()
 

  const arrayProducts = [
    {
      title: "testTitle",
      quantity: 6,
      price: 111,
      cost: 666
    },
  ]

  const addProduct = () => {
    arrayProducts.push(
      {
        title: location.state.title,
        quantity: location.state.quantity.quantity,
        price: location.state.price,
        cost: location.state.cost,
      }
    )
    
  }

 
  const renderLine = () => {
    addProduct()
    return arrayProducts.map((el) => {
      return (
        <div className="cart__row">
          <div className="cart__item">{el.title}</div>
          <div className="cart__item">{el.quantity}</div>
          <div className="cart__item">{el.price}</div>
          <div className="cart__item">{el.cost}</div>
        </div>
      )
    }
     
    )
  }

  // Add to localStorage!!!!!!!
  
  //localStorage.setItem('bgcolor', 'red');

  // CLEAR localStorage!!!!!!!
  
  // localStorage.clear()

  return (
    <div className="cart">
      <Header/>
      <div className="container">
        <h2>Sua Cesta</h2>      
        <div className="cart__container">
          <div className="cart__row">
            <div className="cart__item">Nome</div>
            <div className="cart__item">Quantidade</div>
            <div className="cart__item">Preço, Rs</div>
            <div className="cart__item">Valor, Rs</div>
          </div>
          {renderLine()}
          <div className="cart__row">
            <div className="cart__item"></div>
            <div className="cart__item"></div>
            <div className="cart__item"></div>
            <div className="cart__item"></div>
          </div>  
          <div className="cart__row">
            <div className="cart__item">Total Valor</div>
            <div className="cart__item">0</div>
            <div className="cart__item"></div>
            <div className="cart__item">0</div>
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
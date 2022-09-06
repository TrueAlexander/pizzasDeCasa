import cart from "./../images/icons/cart_icon.svg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const HeaderCart = ({visibility}) => {

 //array from store
  const actualCart = useSelector((state) => state.cart.cart)
  //


  const sum = (arr) => {
    let quantity = 0
    let cost = 0
    for(let item of arr) {
      quantity += item.quantity
      cost += item.cost
    }
    return {cost: cost, quantity: quantity}
  }

  const data = sum(actualCart)

  return (
    <div 
      className={visibility === false ? "headerCart invisible" : "headerCart"} 
    >   
      <Link 
        to="./../cart"
        title="Ir a cesta"
      >
        <img className="headerCart__icon" src={cart} alt="cart" />
        <div className="headerCart__quantity">
          <span>quant: </span>
          <span>{actualCart.length > 0 ? data.quantity : 0} un.</span>
        </div>
        <div className="headerCart__cost">
          <span>total: </span>
          <span>{actualCart.length > 0 ?  data.cost : 0} Rs</span>
        </div>
      </Link>
    </div>
  )

}

export default HeaderCart
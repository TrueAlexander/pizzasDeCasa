import cart from "./../images/icons/cart_icon.svg"
import { Link } from "react-router-dom"
import React from "react"
import { useSelector } from "react-redux"


const HeaderCart = ({cost, quantity, visibility}) => {

  ///only for control
  // const actualCartArr = useSelector((state) => state.cart.cart)
  // console.log(actualCartArr)
  ///only for control

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
          <span>{quantity} un.</span>
        </div>
        <div className="headerCart__cost">
          <span>total: </span>
          <span>{cost} Rs</span>
        </div>
      </Link>
    </div>
  )

}

export default HeaderCart
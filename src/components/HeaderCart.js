import cart from "./../images/icons/cart_icon.svg"
import { Link } from "react-router-dom"
import React from "react"


const HeaderCart = ({cost, qty}) => {

  
  return (
    <div className="headerCart">
      
      <Link 
        to="./../Cart"
      >
        <img className="headerCart__icon" src={cart} alt="cart" />
        <div className="headerCart__quantity">
          <span>quant: </span>
          <span>{qty} un.</span>
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
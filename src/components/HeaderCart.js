import cart from "./../images/icons/cart_icon.svg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"


const HeaderCart = ({value, setValue}) => {

  
  return (
    <div className="headerCart">
      
      <Link to="./../Cart">
        <img className="headerCart__icon" src={cart} alt="cart" />
        <div className="headerCart__quantity">
          <span>quant: </span>
          <span>{0} un.</span>
        </div>
        <div className="headerCart__cost">
          <span>total: </span>
          <span>{value} Rs</span>
        </div>
      </Link>
 
    </div>
  )

}

export default HeaderCart
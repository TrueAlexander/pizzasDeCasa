import cart from "./../images/icons/cart_icon.svg"
import { Link } from "react-router-dom"


const HeaderCart = () => {

  return (
    <div className="headerCart">
      <Link to="./../Cart">
        <img className="headerCart__icon" src={cart} alt="cart" />
        <div className="headerCart__quantity">
          <span>quant: </span>
          <span> 0 un.</span>
        </div>
        <div className="headerCart__cost">
          <span>total: </span>
          <span> 0 Rs</span>
        </div>
      </Link>
 
    </div>
  )

}

export default HeaderCart
import cart from "./../images/icons/cart_icon.svg"
import { Link } from "react-router-dom"


const HeaderCart = () => {

  return (
    <div className="headerCart">
      <Link to="./../Cart">
        <img className="headerCart__icon" src={cart} alt="cart" />
        <div className="headerCart__quantity">
          <span>qty: </span>
          <span> 2 un.</span>
        </div>
        <div className="headerCart__cost">
          <span>total: </span>
          <span> 150 Rs</span>
        </div>
      </Link>
 
    </div>
  )

}

export default HeaderCart
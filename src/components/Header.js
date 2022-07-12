import HeaderCart from "./HeaderCart"
import pizza from "./../images/icons/pizza_icon.svg"
import { Link } from "react-router-dom"


const Header = ({cost, qty, visibility}) => {
  

  
  return (
    <div className="header">
      <Link to="./../Home" className="header__logo" title="Voltar ao Menu">
        <img src={pizza} alt="pizza_logo"/>
      </Link>
      <h1 className="header__name">Pizzas De Casa</h1>
      <HeaderCart 
        cost={cost} 
        qty={qty}
        visibility={visibility} 
      />
    </div>
  )
}

export default Header
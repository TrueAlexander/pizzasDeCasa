import HeaderCart from "./HeaderCart"
import pizza from "./../images/icons/pizza_icon.svg"
import { Link } from "react-router-dom"


const Header = ({visibility}) => {
  

  
  return (
    <div className="header">
      <Link to="./../home" className="header__logo" title="Voltar ao Menu">
        <img src={pizza} alt="pizza_logo"/>
      </Link>
      <h1 className="header__name">Pizzas De Casa</h1>
      <HeaderCart 
        visibility={visibility} 
      />
    </div>
  )
}

export default Header
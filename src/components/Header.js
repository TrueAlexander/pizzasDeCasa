import HeaderCart from "./HeaderCart"
import pizza from "./../images/icons/pizza_icon.svg"
import { Link } from "react-router-dom"



const Header = () => {
  return (
    <div className="header">
      <Link to="./../" className="header__logo">
        <img src={pizza} alt="pizza_logo"/>
      </Link>
      <h1 className="header__name">Quiches Em Casa</h1>
      <HeaderCart/>
    </div>
  )
}

export default Header
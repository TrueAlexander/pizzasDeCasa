import HeaderCart from "./HeaderCart"
import pizza from "./../images/icons/pizza_icon.svg"



const Header = () => {
  return (
    <div className="header">
      <a href="./../" className="header__logo">
        <img src={pizza} alt="pizza_logo"/>
      </a>
      <h1 className="header__name">Company name</h1>
      <HeaderCart/>
    </div>
  )
}

export default Header
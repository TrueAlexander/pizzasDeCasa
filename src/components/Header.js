import HeaderCart from "./HeaderCart"
import pizza from "./../images/icons/pizza_icon.svg"
import { Link } from "react-router-dom"
import { useEffect } from "react"




const Header = ({value, setValue}) => {

  // useEffect(() => {
  //   childFunc.current = alertSuccess
  // }, [])

  // const alertSuccess = () => alert('success')
  

  
  

  return (
    <div className="header">
      <Link to="./../Home" className="header__logo">
        <img src={pizza} alt="pizza_logo"/>
      </Link>
      <h1 className="header__name">Quiches Em Casa</h1>
      <HeaderCart value={value} setValue={setValue}/>
    </div>
  )
}

export default Header
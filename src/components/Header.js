import HeaderCart from "./HeaderCart"


const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">Company logo</div>
      <h1 className="header__name">Company name</h1>
      <HeaderCart/>
    </div>
  )
}

export default Header
import cart from "./../images/icons/cart_icon.svg"


const HeaderCart = () => {

  return (
    <div className="headerCart">
      <a href="./Cart">
        <img className="headerCart__icon" src={cart} alt="cart" />
        <div className="headerCart__quantity">
          <span>qty: </span>
          <span> 2 un.</span>
        </div>
        <div className="headerCart__cost">
          <span>total: </span>
          <span> 150 Rs</span>
        </div>
      </a>
    </div>
  )

}

export default HeaderCart
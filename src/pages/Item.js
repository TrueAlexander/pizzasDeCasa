import Header from "../components/Header"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Item = () => {
  
  const location = useLocation()
  const itemTitle = location.state.title.title
  const id = location.state.id.id

  const [price, setPrice] = useState(location.state.price_grande.priceBig)
  const [quantity, setQuantity] = useState(1)

  //price set grande/combo 
  const priceSetCombo = () => {
    setPrice(location.state.price_combo.priceCombo)
    setQuantity(1)
  }
  const priceSetBig = () => {
    setPrice(location.state.price_grande.priceBig)
    setQuantity(1)
  }
  const renderPrice = () => price

  //items quantity set  
  const decreaseQuantity = () => setQuantity(quantity => quantity > 1 ? quantity - 1 : quantity)
  const addQuantity = () => setQuantity(quantity => quantity < 5 ? (quantity + 1) : quantity)

  //total cost
  const renderCost = () => price * quantity

  //HeaderCart, localStorage moderation

  const addToCart = () => {

    setQuantity(1)
    
    
    //addition of a chosen object to local storage
    const addCartItem = {
      title: itemTitle,
      quantity: {quantity},
      price: renderPrice(),
      cost: renderCost(),
      id: id
    }
    
    const getCartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    getCartItems.push(addCartItem)
    localStorage.setItem("cartItems", JSON.stringify(getCartItems))
    //
    //
   
    const getCurrentItems = localStorage.getItem(itemTitle.toString()) ? JSON.parse(localStorage.getItem(itemTitle.toString())) : []
    getCurrentItems.push(addCartItem)
    localStorage.setItem(itemTitle.toString(), JSON.stringify(getCurrentItems))

    // send new value of cost to HeaderCart
    setCost(newCostValue())
    setQty(newQtyValue())
  }

  const newCostValue = () => {
    const newCosts = JSON.parse(localStorage.getItem("cartItems"))  
    function calcCost(arr) {
      let resCost = 0
      for ( let i = 0; i < arr.length; i++) resCost += arr[i].cost
      return resCost 
    }
    return calcCost(newCosts)
  }

  const newQtyValue = () => {
    const newCosts = JSON.parse(localStorage.getItem("cartItems"))  
    function calcQty(arr) {
      let resQty = 0
      for ( let i = 0; i < arr.length; i++) resQty += arr[i].quantity.quantity
      return resQty 
    }
    return calcQty(newCosts) 
  }

  const [cost, setCost] = useState(localStorage.getItem("cartItems") ? newCostValue() : 0)
  const [qty, setQty] = useState(localStorage.getItem("cartItems") ? newQtyValue() : 0)

  

  return (
    <div className="item">
      <Header 
        cost={cost}
        qty={qty}
      />
      <div className="container">
        <div className="item__image">
          <img src={location.state.img.img} alt={location.state.alt.alt} />
        </div>
        <div className="item__title"><h2>{itemTitle}</h2></div>
        <div className="item__description description">{location.state.description.descr}</div>
        <div className="item__row">
          <div className="item__options">
            <div className="item__input">
              <label htmlFor="1">Quiche grande 27 cm de diametro</label>
              <input onChange={priceSetBig} type="radio" name="options" value="1" defaultChecked={true} />  
            </div>
            <div className="item__input">
              <label htmlFor="2">Combo 6 quiches de 7 cm de diametro</label>
              <input onChange={priceSetCombo} type="radio" name="options" value="2" />
            </div>
          </div>
          <div className="item__column">
             <div className="item__price">
               <span>Preço:  </span>
               <span>{renderPrice()} Rs</span>    
             </div>
             <div className="item__quantity">
               <span>Quantidade:  </span>
               <button onClick={decreaseQuantity} className="quantity__btn btn"> − </button>
               <span>{quantity}</span>
               <button onClick={addQuantity} className="quantity__btn btn"> + </button>
             </div>
             <div className="item__cost">
               <span>Valor:  </span>
               <span>{renderCost()} Rs</span>    
             </div>
          </div>
        </div>
        <Link className="item__btn btn" to="./../Home">Voltar ao Menu</Link> 
        <button 
          className="item__btn btn"
          onClick={addToCart}
        >
          Adicionar a cesta
        </button> 
      </div>
    </div>
  )
}

export default Item
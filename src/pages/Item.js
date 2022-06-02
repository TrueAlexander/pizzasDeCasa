import Header from "../components/Header"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom" 

const Item = () => {
  
  const location = useLocation()
  
  console.log(location.state);
  // const location = useLocation()
  // const currentProduct = location.state?.currentProduct
  // console.dir(location);
  
  return (
    <div className="item">
      <Header/>
      <div className="container">
        <div className="item__image">
          <img src={location.state.img.img} alt={location.state.alt.alt} />
        </div>
        <div className="item__title"><h2>{location.state.title.title}</h2></div>
        <div className="item__description description">{location.state.description.descr}</div>
        <div className="item__row">
          <div className="item__options">
            <div className="item__input">
              <label htmlFor="1">Quiche grande 27 cm de diametro</label>
              <input type="radio" name="options" value="1" defaultChecked />  
            </div>
            <div className="item__input">
              <label htmlFor="2">Combo 6 quiches de 7 cm de diametro</label>
              <input type="radio" name="options" value="2" />
            </div>
          </div>
          <div className="item__column">
             <div className="item__price">
               <span>Price:  </span>
               <span>{location.state.price_grande.priceBig} Rs</span>    
             </div>
             <div className="item__quantity">
               <span>Quantity:  </span>
               <button className="quantity__btn btn"> − </button>
               <span>1</span>
               <button className="quantity__btn btn"> + </button>
             </div>
             <div className="item__cost">
               <span>Cost:  </span>
               <span>100 Rs</span>    
             </div>
          </div>
        </div>
 
        <button className="item__btn btn">
          <Link to="./..">Back to Menu</Link> 
        </button>
        <button className="item__btn btn">
          <Link to="./../Cart">Add to Cart</Link> 
        </button>
      </div>
    </div>
  )
}

export default Item
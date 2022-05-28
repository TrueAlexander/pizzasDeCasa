import Header from "../components/Header"
import { Link } from "react-router-dom"

const Item = () => {

  return (
    <div className="item">
      <Header/>
      <div className="container">
        <div className="item__image">Product Image</div>
        <div className="item__title"><h2>Product Title</h2></div>
        <div className="item__description description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, vel, vitae eveniet animi dolorem reprehenderit ratione dicta porro quidem dolor quia possimus officiis error suscipit ex quae beatae enim similique! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, architecto aperiam, rem delectus facere molestiae veritatis nisi velit minus, odit eveniet voluptas optio. Alias error in exercitationem illo modi consequatur.</div>
        <div className="item__row">
          <div className="item__options">
            <div className="item__input">
              <label htmlFor="1">Product X. Round. Option #1</label>
              <input type="radio" name="options" value="1" defaultChecked />  
            </div>
            <div className="item__input">
              <label htmlFor="2">Product X. Square. Option #2</label>
              <input type="radio" name="options" value="2" />
            </div>
            <div className="item__input">
              <label htmlFor="3">Product X. Triangle. Option #3</label>
              <input type="radio" name="options" value="3" />
            </div>
          </div>
          <div className="item__column">
             <div className="item__price">
               <span>Price:  </span>
               <span>100 Rs</span>    
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
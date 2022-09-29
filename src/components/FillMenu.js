import dataProducts from "../dataProducts.json"
import Product from "./Product"
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const FillMenu = () => {
  return dataProducts.map((el) => {
      return (<div key={el.id} className="home__card">
                <Product 
                  title={el.title} 
                  alt={el.alt} 
                  descr={el.description}  
                  priceBig ={el.price_grande} 
                  priceCombo ={el.price_combo} 
                  img={el.img} 
                  id={el.id}
                />
              </div>)
  })
}

export default FillMenu
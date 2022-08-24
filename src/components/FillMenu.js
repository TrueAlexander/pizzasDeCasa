import dataProducts from "../dataProducts.json"
import Product from "./Product"

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
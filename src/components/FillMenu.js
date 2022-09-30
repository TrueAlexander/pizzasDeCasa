// import dataProducts from "./../dataProducts.json"
import Product from "./Product"
import 'animate.css'
import { useEffect, useState } from "react"

const FillMenu = () => {

  const [dataProducts, setDataProducts] = useState([])
  //get data from Firebase DB
  const getDataProducts = async () => {
    await fetch('https://pizzas-de-casa-default-rtdb.firebaseio.com/dataProducts.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return setDataProducts(data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    return setDataProducts(getDataProducts())
  }, [])

  return dataProducts.length > 0 ? dataProducts.map((el) => {
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
  }) : <h3 className="home__loading">carregando...</h3>
}

export default FillMenu
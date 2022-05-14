import {Link} from "react-router-dom"


const Product = () => {


  const goods = [
    {
      "name": "XXX",
      "price": "100",
      "id": 0

    },
    {
      "name": "YYY",
      "price": "200",
      "id": 1
    },
    {
      "name": "ZZZ",
      "price": "300",
      "id": 2
    }
  ]

  // goods.forEach((good) => {

  //   const itemObject = {
  //     "name": good.name,
  //     "price": good.price
  //   }

  // })

  // const menuObject = {
  //   "name": "XXX",
  //   "price": "100"
  // }


  return (
    <div className="product">
        <div className="product__image">Product Image</div>
        <div className="product__title"><h3>Product Title</h3></div>
        <div className="product__description description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, vel, vitae eveniet animi dolorem reprehenderit ratione dicta porro quidem dolor quia possimus officiis error suscipit ex quae beatae enim similique!</div>
        <Link to="./Item" className="product__btn btn" >More</Link>
    </div>
  )

}

export default Product
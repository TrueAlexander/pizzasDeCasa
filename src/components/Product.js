import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Product = ({title, alt, descr, priceBig, priceCombo, img, id}) => {

  return (
    <div className="product">
        <div className="product__image">
          <LazyLoadImage 
            src={img}
            effect="blur"  
            alt={alt} 
            title={title} 
          />
        </div>
        <div className="product__title"><h3>{title}</h3></div>
        <div className="product__title"><h3>{priceBig} Rs</h3></div>
        <div className="product__description description">{descr}</div>
        <Link 
          className="product__btn btn" 
          to="./../item"
          title="Abrir"
          state={{
            title: {title},
            img: {img},
            alt: {alt},
            descr: {descr},
            shipment_time: 0,
            priceBig: {priceBig},
            priceCombo: {priceCombo},
            id: {id}
          }}
        >
          Mais
        </Link>
    </div>
  )
 
}

export default Product

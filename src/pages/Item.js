import Header from "../components/Header"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { addItem } from "../features/cartSlice"


const Item = () => {

  //Modal window open/close
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      height: '30vh',
      maxWidth: '600px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#5e0303'
    },
  }
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  
   //received dataItem from Home:
  const location = useLocation()

  const dataItem = {
    id: location.state.id.id,
    title: location.state.title.title,
    priceBig: location.state.priceBig.priceBig,
    priceCombo: location.state.priceCombo.priceCombo,
    img: location.state.img.img,
    alt: location.state.alt.alt,
    descr: location.state.descr.descr,
  }

  const dispatch = useDispatch()

    //actual values

    const [price, setPrice] = useState(dataItem.priceBig)
    const [quantity, setQuantity] = useState(1)
    const [cost, setCost] = useState(price * quantity)
    const [title, setTitle] = useState(dataItem.title)


    useEffect(() => {
      setCost(price * quantity)
    }, [price, quantity])

    const [itemToCart, setItemToCart] = useState('')

    const addToCart = () => {
      openModal()
    
      //addition of the chosen item to state(cartSlice)
      const unit = {
          id: Math.floor(Math.random()*1000),
          title: title,
          price: price,
          quantity: quantity,
          cost: cost
      }
      // console.log(unit)
      dispatch(addItem(unit))
      setItemToCart('')
    }
  
    
  return (
    <div className="item">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        overlayClassName="Overlay"
      >
        <div className="modal">
          <h2 className="modal__title">Bem feito! Adicionado á cesta!</h2>
          <button className="btn modal__btn" onClick={closeModal}>Pronto!</button>       
        </div> 
      </Modal>
      <Header 
        visibility = {true}
      />
      <div className="container">
      <div className="item__box">
        <div className="item__image">
          <img src={dataItem.img} alt={dataItem.alt} title={dataItem.title} />
        </div>
        <div className="item__title"><h2>{dataItem.title}</h2></div>
        <div className="item__description description">{dataItem.descr}</div>
        <div className="item__row">
          <div className="item__options">
            <div className="item__input">
              <label htmlFor="1">Pizza grande 27 cm de diametro</label>
              <input 
                onChange={() => {
                  setPrice(dataItem.priceBig)
                  setTitle(dataItem.title)
                }} 
                type="radio" 
                name="options" 
                value="1" 
                defaultChecked={true} />  
            </div>
            <div className="item__input">
              <label htmlFor="2">Combo 6 pizzas de 7 cm de diametro</label>
              <input 
                onChange={() => {
                  setPrice(dataItem.priceCombo)
                  setTitle(dataItem.title + " Combo")
                }} 
                type="radio" 
                name="options" 
                value="2" 
              />
            </div>
          </div>
          <div className="item__column">
            <div className="item__price">
              <span>Preço:  </span>
              <span>
                  {price + "  Rs"}
                </span>    
            </div>
            <div className="item__quantity">
              <span>Quantidade:  </span>
              <button 
                  onClick={() => setQuantity(quantity > 1 ? prev => prev - 1 : quantity)} 
                  className="quantity__btn btn"> − </button>
              <span>{quantity}</span>
              <button 
                  onClick={() => setQuantity(quantity < 5 ? prev => prev + 1 : quantity)} 
                  className="quantity__btn btn"> + </button>
            </div>
            <div className="item__cost">
              <span>Valor:  </span>
              <span>
                  {cost + " Rs"}
                </span>    
            </div>
          </div>
        </div>
        <Link className="item__btn btn" to="./../home">Voltar ao Menu</Link> 
        <button 
          className="item__btn btn"
          onClick={addToCart}
        >
          Adicionar a cesta
        </button> 
        </div>
      </div>
    </div>
  )
}

export default Item
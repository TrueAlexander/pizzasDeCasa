import { useLocation, Link, useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { removeDelivery } from "../features/deliverySlice" 
import emailjs from '@emailjs/browser'
import pixImage from './../images/payment.jpg'


const Pix = () => {

  const form = useRef()
  const dispatch = useDispatch()
  const actualDelivery = useSelector((state) => state.delivery.delivery)
  const actualCart = useSelector((state) => state.cart.cart)
  const location = useLocation()
  const userData = location.state.userData
  const navigate = useNavigate()

  //if the page is refreshed and the cart is cleared
  useEffect(() => {
    if (actualCart.length === 0) navigate("/home", { replace: true })
  }, [])


  const renderCart = () => {
    return (actualCart.map((item, index) => {
      return <h4 
                className="pix__product"
                key={index}
              >
                {index + 1 + ". Pizza Deliciosa " + item.title + ", " + item.quantity + " unidades. Valor: " + item.cost + " Rs"}
              </h4>
    }))
  }

  //create Order Mark-up to send to Emails
  const purchaseArr = () => {
    return actualCart.map((item, ind) => {
      let arr = []
      arr.push(ind + 1 + ". Pizza Deliciosa " + item.title + ", " + item.quantity + " unidades. Valor: " + item.cost + " Rs")
      return arr
      })
  }
  const data = purchaseArr()
  
  const renderOrder = () => {
    let res = []
    for (let line of data) {
      res.push(line[0]) 
    }
    return res
  } 
  const order = renderOrder().join('\n')
  //

  const total = () => {
    let cost = 0
    for (let item of actualCart) cost += item.cost
    return actualDelivery + cost
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_5lpk5yb', 'template_lk94ky2', form.current, '0pBjO5RLkujvHbucH')
      .then((result) => {
          console.log(result.text)
          alert("Bem feito! Por favor, verifique seu e-mail para certificar-se de que seu pedido foi feito Correto.")
          window.location.reload()
      }, (error) => {
          console.log(error.text)
          alert("Opa! Ocorreu um erro. Por favor, tente fazer o pedido novamente")
      })
    }

  
  return (
    <div className="pix">
       <Header visibility={false} />
        <div className="container pix__container">
          <h2 className="pix__subtitle">Pague agora e desfrute de uma deliciosa pizza de casa!</h2>
          <div className="pix__row">
            <div className="pix__image">
              <img src={pixImage} alt="pix" />
            </div>
            <div className="pix__content">
              <h3>Cliente: {userData.name}</h3>
              <h3>Telefone: {userData.phone}</h3>
              <h3>Email: {userData.email}</h3>
              {actualDelivery > 0 ? <h3>Endereço de Entrega: 
                {" " + userData.zipcode + ", " + userData.city + ", " + userData.street + ", " + userData.number + (userData.complement.length > 0 ? ", Complemento " + userData.complement : "")} 
              </h3> : ""}
              <h3>Código de Pedido: {userData.ordenCode}</h3>
              <div className="pix__box">
                {renderCart()}
              </div>
              {actualDelivery > 0 ? <h3>Valor de entrega: {actualDelivery} Rs</h3> : ""}
              <h2>Total a pagar: {total()} Rs</h2>
              <h2>A chave de PIX de Pizzas De Casa: </h2>
              <h3>777.777.77-77</h3>
              <form 
              ref={form}
              onSubmit={sendEmail}
              >
                <input name="Client" type="hidden" value={userData.name} />
                <input name="Phone" type="hidden" value={userData.phone} />
                <input name="Email" type="hidden" value={userData.email} />
                <input name="Code" type="hidden" value={" " + userData.ordenCode} />  
                <input name="Address" type="hidden" value={actualDelivery > 0 
                  ? userData.zipcode + ", " + userData.city + ", " + userData.street + ", " + userData.number + (userData.complement.length > 0 ? ", Complemento " + userData.complement : "")
                  : ""} 
                />
                <input name="Orden" type="hidden" value={order} />
                <input name="Delivery" type="hidden" value={actualDelivery > 0 ? actualDelivery + " Rs" : ""} />
                <input name="Total" type="hidden" value={total() + " Rs"} />
                <button
                  className="btn pix__submit"
                  type="submit"
                >
                  Pago
                </button>
                <Link
                  to="/cart"
                  className="btn pix__btn"
                  onClick={() => dispatch(removeDelivery())}
                  >
                    Voltar à cesta
                </Link>
              </form>
              </div> 
          </div>   
        </div>
    </div>
   
  )
}

export default Pix
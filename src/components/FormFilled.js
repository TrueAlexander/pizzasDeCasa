import pixLogo from './../images/pix-logo.jpg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



const FormFilled = (userData) => {

  const navigate = useNavigate()

  const clickHandler = () => {   
    navigate("./../pix", {
      state: userData
    })
  }

  const actualCart = useSelector((state) => state.cart.cart)
  //if the page is refreshed and the cart is cleared
  useEffect(() => {
    if (actualCart.length === 0) navigate("/home", { replace: true })
  }, [])

  return (
    <>
      <h3 className="purchase__subtitle">Atualmente o único metodo de pago disponivel é o PIX:</h3>
      <div className="purchase__methods">
        <div className="purchase__method">
          <button 
            className='pix__btn' 
            onClick={clickHandler}
            title='Pagar com PIX'  
          >
            <img src={pixLogo} alt="pix" />  
          </button>
        </div>
      </div>
    </>    
  )
}

export default FormFilled


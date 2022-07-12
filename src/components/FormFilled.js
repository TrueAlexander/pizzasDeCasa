import { Link } from 'react-router-dom'
import pixLogo from './../images/pix-logo.jpg'
import { useNavigate } from 'react-router-dom';



const FormFilled = (userData) => {

  const navigate = useNavigate()

  console.log(userData);

  const clickHandler = () => {
  
    navigate("./../Pix", {
      state: {
        name: userData.data.name,
        phone: userData.data.phone,
        email: userData.data.email,
        ordenNumber: userData.data.ordenNumber,
        address: '',
        total: userData.data.orden[0].cost,
        delivery: userData.data.orden[0].delivery

      }
    })
  }

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


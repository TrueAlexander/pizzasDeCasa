import { Link } from 'react-router-dom'
import PagSeguro from './PagSeguro'
import pixLogo from './../images/pix-logo.jpg'



const FormFilled = (userData) => {

  return (
    <>
      <h3 className="purchase__subtitle">Escolhe o Metodo de Pagamento:</h3>
      <div className="purchase__methods">
        <div className="purchase__method">
          <Link 
            className='pix__btn' 
            to="./../Pix"
          >
            <img src={pixLogo} alt="pix" />  
          </Link>
        </div>
        <div className="purchase__method">
          <PagSeguro
            data={userData}
          />
        </div>
      </div>
    </>    
  )
}

export default FormFilled


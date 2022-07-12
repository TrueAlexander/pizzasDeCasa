// import PagSeguro from './PagSeguro'
// import {Link} from 'react-router-dom'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
import FormFilled from './FormFilled'



const PurchaseForm = ({data}) => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState()
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const [showMethods, setShowMethods] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [userData, setUserData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()  
    if (phone.length === 14 && phone.includes('+5521')) {
      setShowMethods(true)

      const buyerData = {
        name: name,
        email: email,
        phone: phone,
        zipcode: zipcode,
        city: city,
        street: street,
        number: number,
        complement: complement,
        ordenNumber: data.ordenNumber,
        deliver: data.delivery,
        orden: data.purchase
      }
      
      setInputDisabled(true)
      setButtonDisabled(true)
      ////////////

      setUserData(buyerData)
      
      // console.log(buyerData)
     ////////////////

    } else {
      setShowMethods(false)
      alert('Favor digite o numero de telefone com DDD de RJ, exemplo (21) 21212-2121')
      setPhone()
    }
  }
  
  return(
    <div className="purchase">
      <h2 className="purchase__title">Por favor preencher seus dados:</h2>
      <div className="purchase__form">
        <form
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="senderName"
            title="Seu nome"
            placeholder="nome"
            minLength="3"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={inputDisabled}
          />
          <input 
            type="email"
            title="exemplo@exemplo.com"
            name="senderEmail" 
            placeholder="email" 
            required
            autoComplete="off"
            value={email}
            disabled={inputDisabled}
            onChange={(event) => setEmail(event.target.value)} 
          />
          <PhoneInput 
            name="senderPhone" 
            placeholder="telefone"
            title="(21) 21212-2121"
            maxLength="15"
            minLength="15"
            country="BR"
            autoComplete="off"
            value={phone}
            onChange={setPhone}
            type="tel"  
            required
            disabled={inputDisabled}
          />
          
          {data.delivery !== 0 && 
            <>
              <h3 className="purchase__subtitle">Endereço de Entrega:</h3> 
              <input 
                name="shippingAddressPostalCode" 
                pattern="\d{5}[\-]?\d{3}" 
                type="text" 
                placeholder="CEP"
                title="22222-222"
                maxLength="9"
                onChange={(event) => setZipcode(event.target.value)}
                required
                disabled={inputDisabled}
              />
              <input 
                name="shippingAddressCity" 
                type="text" 
                placeholder="cidade" 
                required
                minLength="3"
                onChange={(event) => setCity(event.target.value)}
                disabled={inputDisabled} 
              /> 
              <input 
                name="shippingAddressStreet" 
                type="text" 
                placeholder="rua"
                minLength="5" 
                required
                onChange={(event) => setStreet(event.target.value)}
                disabled={inputDisabled}
              />  
              <input 
                name="shippingAddressNumber" 
                type="number"        
                placeholder="número" 
                required
                onChange={(event) => setNumber(event.target.value)}
                disabled={inputDisabled}
              />  
              <input 
                name="shippingAddressComplement" 
                type="text" placeholder="complemento"
                onChange={(event) => setComplement(event.target.value)}
                disabled={inputDisabled} 
              />
            </>   
          }
          <button 
            className="btn" 
            disabled={buttonDisabled}
            title="Pagar"
          >
            Pronto!
          </button>
        </form>
        {showMethods && <FormFilled data={userData} />}
      </div>
    </div>
  )
}

export default PurchaseForm

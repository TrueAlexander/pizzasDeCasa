import { useState } from "react"

const Delivery = (props) => {

  const costOfDelivery = 50 
  const [deliveryCost, setDeliveryCost] = useState(0)
  const deliverySetZero = () => {
    setDeliveryCost(0)
    props.changeDel(0)
  } 
  const deliverySetCost = () => {
    setDeliveryCost(costOfDelivery)
    props.changeDel(costOfDelivery)
  }

  // props.func(deliveryCost)

  return (
    <div>
      <h3>Choose the delivery option</h3>
      <div className="delivery__row">
          <div className="delivery__options">
            <div className="delivery__input">
              <label htmlFor="delivery1">Retirar de Quiches em Casa (endereço...)</label>
              <input onChange={deliverySetZero} type="radio" name="optionsDelivery" value="1" defaultChecked={true} />  
            </div>
            <div className="delivery__input">
              <label htmlFor="delivery2">Entrega no Rio de Janeiro. Consulta o CEP</label>
              <input onChange={deliverySetCost} type="radio" name="optionsDelivery" value="2" />
            </div>
          </div>
          <div className="delivery__cost">
            <span>Valor de entrega:  </span>
            <span>{deliveryCost} Rs</span>    
          </div>
  
        </div>
    </div>
  )
}

export default Delivery
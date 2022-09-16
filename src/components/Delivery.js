import { useState } from "react"
import { changeCostDelivery, addDelivery, removeDelivery } from "../features/deliverySlice"
import { useDispatch, useSelector } from "react-redux"

const Delivery = ({ disabled }) => {
  
  const dispatch = useDispatch()
  const actualCost = useSelector((state) => state.delivery.delivery)
 
  const [deliveryZero, setDeliveryZero] = useState(true)
  const [zone, setZone] = useState("Centro")

  return (
    <div>
      <h3>Escolhe uma opção de frete</h3>
      <div className="delivery__row">
          <div className="delivery__options">
            <div className="delivery__input">
              <label htmlFor="delivery1">Retirar de Pizzas de Casa   <small>(Av. R. Branco, 888, art. 1401)</small></label>
              <input
                onChange={() => {
                  dispatch(removeDelivery())
                  setDeliveryZero(true)
                  setZone("Centro")
                }}
                disabled={disabled} 
                type="radio" 
                name="optionsDelivery" 
                value="1" 
                checked={deliveryZero === true}           
              />  
            </div>
            <div className="delivery__input">
              <label htmlFor="delivery2">Entrega no Rio de Janeiro. Consulta o valor para: </label> 
              <select 
                name="zone" 
                disabled={deliveryZero === true || disabled}
                value={zone}
                onChange={(e) => {
                  setZone(e.target.value)
                  dispatch(changeCostDelivery(e.target.value))
                }}
              >
                <option>Centro</option>
                <option>Zona Sul</option>
                <option>Zona Norte</option>
              </select>
              <input 
                onChange={() => {
                  dispatch(addDelivery())
                  setDeliveryZero(false)
                  setZone("Centro")
                }} 
                type="radio"
                value="2" 
                name="optionsDelivery"  
                checked={deliveryZero === false}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="delivery__cost">
            <span>Valor de entrega:  </span>
            <span>{disabled ? 0 : actualCost} Rs</span>    
          </div>
      </div>
    </div>
  )
}

export default Delivery
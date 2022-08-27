import { useState } from "react"
import { changeCostDelivery, zeroCostDelivery } from "../features/deliverySlice"
import { useDispatch, useSelector } from "react-redux"

const Delivery = ({ active }) => {

  // const [deliveryCost, setDeliveryCost] = useState(0)
  // const [zoneDisabled, setZoneDisabled] = useState(true)
  // const [zoneCost, setZoneCost] = useState(20)
  const [zone, setZone] = useState("Centro")

  // const deliverySetZero = () => {
  //   setDeliveryCost(0)
  //   setZoneDisabled(true) 
  //   // props.changeDel(0)
  // } 

  // const deliverySetCost = () => {
  //   setZoneDisabled(false)
  //   setDeliveryCost(zoneCost)
  //   // props.changeDel(zoneCost)

  // }

  // const deliveryZone = (e) => {
  //   setDeliveryCost(+e.target.value)
  //   setZoneCost(+e.target.value)
  //   // props.changeDel(+e.target.value)
  // }

  const dispatch = useDispatch()
  const actualCost = useSelector((state) => state.delivery.delivery)
  // console.log(actualCost);
  return (
    <div>
      <h3>Escolhe uma opção de frete</h3>
      <div className="delivery__row">
          <div className="delivery__options">
            <div className="delivery__input">
              <label htmlFor="delivery1">Retirar de Pizzas de Casa   <small>(Av. R. Branco, 888, art. 1401)</small></label>
              <input
                onChange={() => dispatch(zeroCostDelivery())} 
                type="radio" 
                name="optionsDelivery" 
                // value="1" 
                checked={actualCost === 0} 
              />  
            </div>
            <div className="delivery__input">
              <label htmlFor="delivery2">Entrega no Rio de Janeiro. Consulta o valor para: </label> 
              <select 
                name="zona" 
                disabled={actualCost === 0}
                // value={"Centro"}
                onChange={(e) => console.log(e.target.value)} 
              >
                <option 
                  // value="20"
                >Centro</option>
                <option 
                  // value="50"
                >Zona Sul</option>
                <option 
                  // value="60"
                >Zona Norte</option>
              </select>
              <input 
                onChange={() => dispatch(changeCostDelivery(zone))} 
                type="radio" 
                name="optionsDelivery"  
                checked={actualCost !== 0}
              />
            </div>
          </div>
          <div className="delivery__cost">
            <span>Valor de entrega:  </span>
            <span>{actualCost} Rs</span>    
          </div>
  
      </div>
    </div>
  )
}

export default Delivery
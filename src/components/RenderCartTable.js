import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../features/cartSlice"
import { useEffect } from "react"


const RenderCartTable = ({setDisabled}) => {
  
  const dispatch = useDispatch()
  const arrToRender = useSelector((state) => state.cart.cart)
  

  const totalQuantity = () => {
    let res = 0
    for(let item of arrToRender) {
      res += item.quantity
    }
    return res
  }

  const totalCost = () => {
    let res = 0
    for(let item of arrToRender) {
      res += item.cost
    }
    return res
  }


  const excluir = (event) => {
    const titleToRemove = event.target.parentNode.innerText.slice(0, -8)
    dispatch(removeItem(titleToRemove))    
  }

  useEffect(() => {
      if (arrToRender.length < 1) {
      setDisabled(true) 
    }
    
  }, [arrToRender])


  const renderLine = () => {
    
    return arrToRender.length > 0 ? arrToRender.map((el) => {
      
        return (
          <div className="cart__row" key={el.id}>
            <div className="cart__item">{el.title}<button onClick={excluir} className="btn btn_small">excluir</button></div>
            <div className="cart__item">{el.quantity}</div>
            <div className="cart__item">{el.price}</div>
            <div className="cart__item">{el.cost}</div>
          </div>
        )   
      }    
    ) : <div className="cart__empty" key="empty">Sua cesta está vazia!</div>
  }
  
  return (
    <div className="cart__container">
      <div className="cart__row">
        <div className="cart__item">Nome</div>
        <div className="cart__item">Quant.</div>
        <div className="cart__item">Preço, Rs</div>
        <div className="cart__item">Valor, Rs</div>
      </div>
      {renderLine()}
      <div className="cart__row">
        <div className="cart__item"></div>
        <div className="cart__item"></div>
        <div className="cart__item"></div>
        <div className="cart__item"></div>
      </div>  
      <div className="cart__row">
        <div className="cart__item">Total Valor</div>
        <div className="cart__item">
          {totalQuantity()}
        </div>
        <div className="cart__item"></div>
        <div className="cart__item">
          {totalCost()}
        </div>
      </div>          
    </div>
  )
  
}

export default RenderCartTable
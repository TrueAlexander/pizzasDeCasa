import { useState } from "react"

const RenderCartTable = (props) => {
 
  props.clearCart()
  //get Array for Rending
  const getNewArrToRender = () => {
  
    let arrItemsGrupped = []
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "cartItems")
      arrItemsGrupped.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    let arrToRender = arrItemsGrupped.map((item) => {
      let q = 0
      for (let i in item) q += item[i].quantity.quantity;
      return {
        name: item[0].title,
        quantity: q,
        price: item[0].price,
        id: item[0].id,
        cost: q * item[0].price
      }
    })
    return arrToRender  
  }
  
  const [arrToRender, setArrToRenderArr] = useState(getNewArrToRender())

 
  /// count Total Q and Total Valor
  let totalQ = 0
  const countTotalQ = () => {
    for (let item in arrToRender) totalQ += arrToRender[item].quantity;
    return totalQ
  }
  
  let totalValor = 0
  const countTotalValor = () => {
    for (let item in arrToRender) {
      totalValor += arrToRender[item].price * arrToRender[item].quantity
      
    } 
    return totalValor
  }
  let valorToCart = countTotalValor() 
  let qToCart = countTotalQ()
////////////////////////////////////////////////////
  // props.renderedCost(() => totalValor)
  const functionHandler = (data) => {
    props.passChildData(data);
  }
  functionHandler(totalValor)
  const functionHandler1 = (arr) => {
    props.passArrToRender(arr)
  }
  functionHandler1(arrToRender)

  const excluir = (event) => {

    //1 eliminate excluded product from localStorage

    const clickedProduct = event.target.parentNode.parentNode
    const clickedProductTitle = clickedProduct.textContent.slice(0, clickedProduct.textContent.length - 15)
    localStorage.removeItem(clickedProductTitle)

    setArrToRenderArr(getNewArrToRender())
    
    //2 eliminate excluded products from setItems 

    let currentCartItemsArr = JSON.parse(localStorage.getItem("cartItems"))
    let updatedCartItemsArr = currentCartItemsArr.filter(e => e.title !== clickedProductTitle)
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItemsArr))
    //

    if (localStorage.length < 2) {
      localStorage.clear()
    }
  }

 
  const renderLine = () => {
    
    return localStorage.getItem("cartItems") ? arrToRender.map((el) => {
      
        return (
          <div className="cart__row" key={el.id}>
            <div className="cart__item">{el.name} <button onClick={excluir} className="btn btn_small">excluir</button></div>
            <div className="cart__item">{el.quantity}</div>
            <div className="cart__item">{el.price}</div>
            <div className="cart__item">{el.cost}</div>
          </div>
        )   
      }    
    ) : <div className="cart__empty" key="empty">Sua Cesta está vazia</div>
  }
  
  return (
    <div className="cart__container">
      <div className="cart__row">
        <div className="cart__item">Nome</div>
        <div className="cart__item">Quantidade</div>
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
          {localStorage.length > 1 ? totalQ : 0}
        </div>
        <div className="cart__item"></div>
        <div className="cart__item">
          {localStorage.length > 1 ? totalValor : 0}
        </div>
      </div>          
    </div>
  )
  
}

export default RenderCartTable
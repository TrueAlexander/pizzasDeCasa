

const RenderCartTable = () => {


  const storageCart = localStorage.getItem("cartItems")

 ///////
  const storageCartArr = JSON.parse(storageCart)
  // console.log(storageCartArr)
  
  ///if id===id && price === price => sum

 
 

 ////// 
  const renderLine = () => {

    return storageCart ? JSON.parse(storageCart).map((el) => {
      
      return (
        <div className="cart__row" key={(el.id + el.price).toString()}>
          <div className="cart__item">{el.title}</div>
          <div className="cart__item">{el.quantity.quantity}</div>
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
        <div className="cart__item">0</div>
        <div className="cart__item"></div>
        <div className="cart__item">0</div>
      </div>          
    </div>
  )
}

export default RenderCartTable


const RenderCartTable = () => {


  const storageCart = localStorage.getItem("cartItems")


  let storageArr = () => {
    let res = []
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "cartItems")
      res.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    return res
  }
  let resArr = storageArr()
  
  let splitted = []
  const splitArr = (resArr) => resArr.forEach((el) => {

    let res = {}
    let q = 0
    for (let item in el) q += el[item].quantity.quantity;
   
    res = {
        name: el[0].title,
        quantity: q,
        price: el[0].price,
        id: el[0].id
      }
   
    splitted.push(res)
   return res
  })

  splitArr(resArr)

  
  let totalQ = 0
  const countTotalQ = () => {
    for (let item in splitted) totalQ += splitted[item].quantity;
    return totalQ
  }
  
  let totalValor = 0
  const countTotalValor = () => {
    for (let item in splitted) totalValor += splitted[item].price * splitted[item].quantity
    return totalValor
  }

  const excluir = (event) => {

    const clickedProduct = event.target.parentNode.parentNode
    clickedProduct.remove()
    const clickedProductTitle = clickedProduct.textContent.slice(0, clickedProduct.textContent.length - 15)
    localStorage.removeItem(clickedProductTitle);
    
    let cartItemsArr = JSON.parse(localStorage.getItem("cartItems"))

    let newCartItemsArr = cartItemsArr.filter(e => e.title !== clickedProductTitle)
    console.log(newCartItemsArr);

    // cartItemsArr !== [] ? console.log('still') : console.log('nothing')
    if (newCartItemsArr.length < 1) {
      localStorage.clear()
      window.location.reload()
    } else {
      localStorage.setItem("cartItems", JSON.stringify(newCartItemsArr))
    }
    //////// change total quantity
    /////// change total Valor
  }
  
    
  
//  ////// 
  const renderLine = () => {

    return localStorage.getItem("cartItems") ? splitted.map((el) => {
      
        return (
          <div className="cart__row" key={el.id}>
            <div className="cart__item">{el.name} <button onClick={excluir} className="btn btn_small">excluir</button></div>
            <div className="cart__item">{el.quantity}</div>
            <div className="cart__item">{el.price}</div>
            <div className="cart__item">{el.quantity * el.price}</div>
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
        <div className="cart__item">{countTotalQ()}</div>
        <div className="cart__item"></div>
        <div className="cart__item">{countTotalValor()}</div>
      </div>          
    </div>
  )
}

export default RenderCartTable
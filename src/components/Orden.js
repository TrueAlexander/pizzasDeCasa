
const Orden = (orden) => {
  console.dir(orden)

  // const FillOrden = () => {
  //   return orden.map((el) => {
  //       return (<div key={el.id} className="">
  //         <Product title={el.title} alt={el.alt} descr={el.description}  priceBig ={el.price_grande} priceCombo ={el.price_combo} img={el.img} id={el.id}/>
  //       </div>)
  //   })
  // }
  const PurchaseProduct = ({name, qty }) => {
    return (
      <>
        <h3>{name + "     " + qty + " un."}</h3>
      </>
    )
  }

  const FillOrden = (orden) => {
    return orden.map((el) => {
      return(
        <div key={el.id}>
          <PurchaseProduct name={el.name} qty={el.quantity}/>
        </div>
      )
    })
  }

  return (
    <>
      <FillOrden orden={orden}/>
      
    </>
  )
}

export default Orden
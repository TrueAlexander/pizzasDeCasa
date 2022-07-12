import { useLocation } from "react-router-dom"
import Header from "../components/Header"




const Pix = () => {

  const location = useLocation()
  
  
  const data = location.state
  console.dir(data);
  return (
    <>
       <Header
          cost={0}
          qty={0}
          visibility={false}
        />
        <div className="container">
          <h3>Cliente: {data.name}</h3>
          <h3>Telefone: {data.phone}</h3>
          <h3>Email: {data.email}</h3>
        </div>
        <div>
          <h3>Endereço de Entrega: {data.delivery} </h3>
        </div>
        <h3>Número de Pedido: {data.ordenNumber}</h3>
        <h3>Total a pagar: {data.total} Rs</h3>
        <h2>A chave de PIX de Pizzas De Casa: </h2>
        <h3>777.777.77-77</h3>  
    </>
   
  )
}

export default Pix
import { useLocation, Link } from "react-router-dom"
import Header from "../components/Header"
import Orden from "../components/Orden"

const Pix = () => {

  const location = useLocation()
  
  
  const data = location.state
  console.dir(data.purchase);
  return (
    <div className="pix">
       <Header
          cost={0}
          qty={0}
          visibility={false}
        />
        <div className="container pix__container">
          <h2>Pague agora e desfrute de uma deliciosa pizza caseira</h2>
          <h3>Cliente: {data.name}</h3>
          <h3>Telefone: {data.phone}</h3>
          <h3>Email: {data.email}</h3>
          <h3>Endereço de Entrega: {data.zipcode + " " + data.address} </h3>
          <h3>Número de Pedido: {data.ordenNumber}</h3>
          <h3>Seu pedido: {<Orden orden={data.purchase} />}</h3>
          <h3>Total a pagar: {data.total} Rs</h3>
          <h3>Valor de entrega: {data.delivery} Rs</h3>
          <h2>A chave de PIX de Pizzas De Casa: </h2>
          <h3>777.777.77-77</h3>
          <Link
            to="/Cart"
            className="btn"
            >
              Voltar a cesta
          </Link>
        </div>
    </div>
   
  )
}

export default Pix
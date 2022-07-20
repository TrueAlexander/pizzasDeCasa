import { useLocation, Link } from "react-router-dom"
import Header from "../components/Header"
import PurchaseForm from "../components/PurchaseForm"



const Payment = () => {

  const location = useLocation()

  console.log(location.state);

  return (
    <div className="payment">
      <Header
          cost={0}
          qty={0}
          visibility={false}
        />   
      <PurchaseForm
        data={location.state}
      />
      <Link
        to="/Cart"
        className="btn"
      >Voltar a cesta</Link>
    </div>   
  )
}

export default Payment
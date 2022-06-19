import { useLocation, Link } from "react-router-dom"
import Header from "../components/Header"
import PurchaseForm from "../components/PurchaseForm"



const Payment = () => {

  const location = useLocation()
  
  //our array of purchase and a delivery cost
  // console.dir(location.state)

  return (
    <>
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
    </>
   
  )
}

export default Payment
import { useLocation, Link } from "react-router-dom"
import Header from "../components/Header"
import PurchaseForm from "../components/PurchaseForm"
import { useDispatch } from "react-redux"
import { removeDelivery } from "../features/deliverySlice"



const Payment = () => {

  const dispatch = useDispatch()
  // const location = useLocation()

  // console.log(location.state);


  return (
    <div className="payment">
      <Header
          cost={0}
          qty={0}
          visibility={false}
        />   
      <PurchaseForm
        // data={location.state}
      />
      <Link
        to="/home"
        onClick={() => dispatch(removeDelivery())}
        className="btn"
      >Voltar a Menu</Link>
    </div>   
  )
}

export default Payment
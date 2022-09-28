import { Link } from "react-router-dom"
import Header from "../components/Header"
import PurchaseForm from "../components/PurchaseForm"
import { useDispatch } from "react-redux"
import { removeDelivery } from "../features/deliverySlice"



const Payment = () => {

  const dispatch = useDispatch()

  return (
    <div className="payment">
      <Header visibility={false} />
      <div className="payment__box">
        <PurchaseForm />
        <Link
          to="/home"
          onClick={() => dispatch(removeDelivery())}
          className="btn"
        >Voltar a Menu</Link>
      </div>     
    </div>   
  )
}

export default Payment
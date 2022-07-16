import { Link } from "react-router-dom"

const Initial = () => {

  localStorage.clear()


  return (
    <div className="initial">
      <h3 className="initial__subtitle">Cardápio virtual</h3>
      <h1 className="initial__title">PIZZAS DE CASA</h1>
      <Link className="btn" to="./Home" >Ir ao Menu!</Link>
    </div>
  )
}

export default Initial
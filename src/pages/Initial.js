import { Link } from "react-router-dom"

const Initial = () => {

  localStorage.clear()


  return (
    <div className="initial">
      <h1 className="initial__title">PIZZAS DE CASA</h1>
      <Link className="btn" to="./Home" >Ir ao Menu!</Link>
    </div>
  )
}

export default Initial
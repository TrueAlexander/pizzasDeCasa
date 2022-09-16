import Header from "../components/Header"
import FillMenu from "../components/FillMenu"

const Home = () => {

  return (
    <div>
      <Header 
        visibility = {true}   
      />
      <div className="home">
        <div className="container">
          <h2>Nosso cardápio</h2>
          <div className="home__container">
            {<FillMenu/>}
          </div>
        </div>    
      </div>     
    </div>
  )

}

export default Home
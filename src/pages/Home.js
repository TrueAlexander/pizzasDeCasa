import Header from "../components/Header"
import Product from "../components/Product"
import logo1 from "../images/autodevistoria.jpg"
import logo2 from "../images/construcoes.jpg"
import logo3 from "../images/impermeabilizacoes.jpg"


const Home = () => {

  const addImage = (ind) => {
    const arrImages = []
    arrImages.push(logo1, logo2, logo3)
    return arrImages[ind]
  }

  const products = [
    {
      title: "Abobrinha",
      img: addImage(0),
      alt: "abobrinha_image",
      description: "Abobrinha gostosinha. Abobrinha gostosinha.Abobrinha gostosinha.Abobrinha gostosinha. Abobrinha gostosinha.Abobrinha gostosinha. Abobrinha gostosinha. Abobrinha gostosinha. Abobrinha gostosinha.Abobrinha gostosinha.",
      shipment_time: 24,
      price_grande: 100,
      price_combo: 110,
      id: 0
    },
    {
      title: "Camarões",
      img: addImage(1),
      alt: "camarões_image",
      description: "Camarões gostosinhos.  gostosinha. Camarões gostosinhos .Camarões gostosinhos.Camarões gostosinhos .Camarões gostosinhos. Camarões gostosinhos .Camarões gostosinhos. Camarões gostosinhos.Camarões gostosinhos..A",
      shipment_time: 48,
      price_grande: 120,
      price_combo: 140,
      id: 1
    },
    {
      title: "4 Quiejos",
      img: addImage(2),
      alt: "4_quejos_image",
      description: "4 Quiejos gostosinhos.  gostosinha. 4 Quiejos gostosinhos. 4 Quiejos gostosinhos. 4 Quiejos gostosinhos.4 Quiejos gostosinhos. 4 Quiejos gostosinhos. 4 Quiejos gostosinhos. 4 Quiejos gostosinhos. 4 Quiejos gostosinhos..A",
      shipment_time: 24,
      price_grande: 115,
      price_combo: 125,
      id: 2
    },
  ]

  const FillMenu = () => {
    return products.map((el) => {
        return (<div key={el.id} className="home__card">
          <Product title={el.title} alt={el.alt} descr={el.description}  priceBig ={el.price_grande} priceCombo ={el.price_combo} img={el.img} />
        </div>)
    })
  }

  return (
    <div>
      <Header/>
      <div className="home">
        <div className="container">
          <h2>Nossos produtos</h2>
          <div className="home__container">
            {<FillMenu/>}
          </div>
        </div>    
      </div>     
    </div>
  )

}

export default Home
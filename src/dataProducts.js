import logo1 from "./images/margarita.jpg"
import logo2 from "./images/shrimps.jpg"
import logo3 from "./images/4cheese.jpg"


const addImage = (ind) => {
  const arrImages = []
  arrImages.push(logo1, logo2, logo3)
  return arrImages[ind]
}

const dataProducts = [
  {
    title: "Margarita",
    img: addImage(0),
    alt: "margarita_image",
    description: "Pizza Margarita gostosinha. Pizza Margarita gostosinha. Pizza Margarita gostosinha. Pizza Margarita gostosinha. Pizza Margarita gostosinha. Pizza Margarita gostosinha. Pizza Margarita gostosinha. Pizza Margarita gostosinha. ",
    shipment_time: 24,
    price_grande: 100,
    price_combo: 110,
    id: 0
  },
  {
    title: "Camarões",
    img: addImage(1),
    alt: "camarões_image",
    description: "Pizza Camarões gostosinha. Pizza Camarões gostosinha.Pizza Camarões gostosinha.Pizza Camarões gostosinha.Pizza Camarões gostosinha.Pizza Camarões gostosinha.Pizza Camarões gostosinha.Pizza Camarões gostosinha.Pizza Camarões gostosinha.",
    shipment_time: 48,
    price_grande: 120,
    price_combo: 140,
    id: 1
  },
  {
    title: "4 Quiejos",
    img: addImage(2),
    alt: "4_quejos_image",
    description: "Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. Pizza 4 Quiejos gostosinha. ",
    shipment_time: 24,
    price_grande: 115,
    price_combo: 125,
    id: 2
  },
]

export default dataProducts
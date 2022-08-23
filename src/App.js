import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Item from "./pages/Item"
import Cart from "./pages/Cart"
import Initial from "./pages/Initial"
import Payment from "./pages/Payment"
import Pix from "./pages/Pix"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/item" element={<Item/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/pix" element={<Pix/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

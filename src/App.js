import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Item from "./pages/Item"
import Cart from "./pages/Cart"
import Initial from "./pages/Initial"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Item" element={<Item/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

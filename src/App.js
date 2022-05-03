import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Item from "./pages/Item"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Item" element={<Item/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

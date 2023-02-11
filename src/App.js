import {Routes, Route} from "react-router-dom"
import Products from "./routes/Products"
import NoMatch from "./routes/NoMatch"
import Basket from "./routes/Basket"
import Home from "./routes/Home"
import basket from "./basket"
import menu from './menu'
import './css/App.css'

function App() {
  console.log(window.location)
  return (
      <div className="middle-container">
        <Routes>
          <Route index element={<Home groups={menu}/>} />
          <Route path="/" element={<Home groups={menu}/>} />
          <Route path="products" element={<Products />}/>
          <Route path="basket" element={<Basket />}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </div>
  );
}

export default App;

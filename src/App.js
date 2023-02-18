import {Routes, Route} from "react-router-dom"
import Products from "./routes/Products"
import NoMatch from "./routes/NoMatch"
import Basket from "./routes/Basket"
import Home from "./routes/Home"
import menu from './menu'
import './css/App.css'

function App() {
  return (
    <>
      <div id="image-loader" onClick={event => {
        event.target.style.display = 'none'
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        event.target.style.backgroundImage = 'none'
        }}></div>
      <div className="middle-container">
        <Routes>
          <Route index element={<Home groups={menu}/>} />
          <Route path="/" element={<Home groups={menu}/>} />
          <Route path="products" element={<Products />}/>
          <Route path="basket" element={<Basket />}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

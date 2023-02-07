import Home from "./routes/Home"
import Products from "./routes/Products"
import Basket from "./routes/Basket"
import NoMatch from "./routes/NoMatch"
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Frost-Tasty-React" element={<Home />} />
      <Route path="Frost-Tasty-React/products" element={<Products />}/>
      <Route path="Frost-Tasty-React/basket" element={<Basket />}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
  );
}

export default App;

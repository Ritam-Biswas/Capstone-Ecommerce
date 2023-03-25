import Home from "./Routes/Home/home.component";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.component";
import Shop from "./Routes/Shop/shop.component";
import Checkout from "./Routes/Checkout/checkout.component";
import Authentication from "./Routes/Authentication/authentication.component";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="sign-in" element={<Authentication/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;




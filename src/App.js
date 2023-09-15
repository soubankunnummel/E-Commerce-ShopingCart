import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Productcontext } from "./Context";
import Navebar from "./componets/Navebar";
import { Products } from "./componets/Products";
import { BedroomProducts } from "./componets/catogerys/BedroomProdu";
import { DinigRoom } from "./componets/catogerys/Dinigroom";
import {Livinroom} from './componets/catogerys/LiviroomProduct'
import Home from "./pages/Home";
import Login from "./user/Login";
import Register from "./user/Register";
import { useState } from "react";
import Footer from "./componets/Footer";
import Cart from "./pages/Cart";
import View from "./pages/View";
import Bedroom from "./componets/catogerys/Bedroom";
import DiningRoom from "./componets/catogerys/DiningRoom";
import LivingRoom from "./componets/catogerys/LivingRoom";
import Pymetn from "./pages/Pyment";
import Pyment from "./pages/Pyment";
import Serch from "./componets/Serch";

function App() {
  const handlClick = (item) => {
    console.log(item);
  };
  const [itemCount, setItemCount] = useState([]);
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);
  const [userName, setUerName] = useState([]);
  const [serchTerm,setSerchTerm] = useState('')
  return (
    <div className="App">
      <Productcontext.Provider
        value={{
          serchTerm,
          setSerchTerm,
          setCart,
         Livinroom,
          DinigRoom,
          BedroomProducts,
          Products,
          cart,
          setCart, 
          user,
          setUser,
          userName,
          setUerName,
          itemCount,
          setItemCount,
        }}
      >
        
        <Navebar size={cart.length} userName={userName} />
        <Routes>
          if (BedroomProducts) {
            <Route path="/Bedroom" element={<Bedroom/>}/>
          }
          if (DinigRoom) {
            <Route path="/DinigRoom" element={<DiningRoom/>}/>
          }
          if (LivingRoom) {
          <Route path="/LivingRoom" element={<LivingRoom/>}/>

            
          }
         
          <Route path="/" element={<Home handlClick={handlClick} />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Register" element={<Register />} />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/Pyment" element={<Pyment />} />
          <Route path="/View/:id" element={<View />} />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </Productcontext.Provider>
    </div>
  );
}

export default App;

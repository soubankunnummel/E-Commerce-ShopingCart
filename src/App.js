import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Productcontext } from "./Context";

import { Products } from "./componets/Products";
import { BedroomProducts } from "./componets/catogerys/BedroomProdu";
import { DinigRoom } from "./componets/catogerys/Dinigroom";
import { Livinroom } from "./componets/catogerys/LiviroomProduct";
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

import Pyment from "./pages/Pyment";

import AllProducts from "./componets/AllProducts";
import { userList } from "./user/UserList";
import AdminLogin from "./componets/Admin/Admin-login";
import { AdminDetails } from "./componets/Admin/AdminDetail";

import ViewPoduct from "./componets/Admin/ViewProduct";
import Editporaduct from "./componets/Admin/Editporaduct";
import Addproduct from "./componets/Admin/Addproduct";
import ViewUsers from "./componets/Admin/ViewUsers";
import ViewMoredetail from "./componets/Admin/ViewMoredetail";
import Allproducts from "./componets/Admin/Allproducts";
import Alloders from "./componets/Admin/Alloders";
import Paypal from "./componets/Pypal";

function App() {
  const handlClick = (item) => {
    console.log(item);
  };
  const [itemCount, setItemCount] = useState([]);
  const [productss,setProductss] = useState(Products)
  const [BedroomProductss,setBedroomProductss] = useState(BedroomProducts)
  const [DinigRooms,setDinigRoom] = useState(DinigRoom)
  const [LivingRooms,setLivingRooms] = useState(Livinroom)
  const [admin,setAdmin] = useState(AdminDetails)


  const [user, setUser] = useState([]); 
  const [cart, setCart] = useState([]);
  const [userName, setUerName] = useState([]);
  const [serchTerm, setSerchTerm] = useState("");
  const [login,setLogin] = useState(userList)
  return (
    <div className="App">
      <Productcontext.Provider
        value={{
          admin,setAdmin,
          login,setLogin,
          serchTerm,
          setSerchTerm,
          setCart,
          LivingRooms,
          DinigRooms,
          BedroomProductss,
          productss,setProductss,
          
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
        
        <Routes>
          if (BedroomProducts) {<Route path="/Bedroom" element={<Bedroom />} />}
          if (DinigRoom) {<Route path="/DinigRoom" element={<DiningRoom />} />}
          if (LivingRoom){" "}
          {<Route path="/LivingRoom" element={<LivingRoom />} />}
          <Route path="/" element={<Home handlClick={handlClick} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/All" element={<AllProducts />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Pyment" element={<Pyment />} />
          <Route path="/View/:id" element={<View />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/ViewProduct" element={<ViewPoduct/>}/>
          <Route path="/EditProduct/:id" element={<Editporaduct/>}/>
          <Route path="/Addproducts" element={<Addproduct/>}/>
          <Route path="/Users" element={<ViewUsers/>}/>
          <Route path="/More/:id" element={<ViewMoredetail/>}/>
          <Route path="/Allproduct" element={<Allproducts/>}/>
          <Route path="/Alloerders" element={<Alloders/>}/>
          <Route path="/pypal" element={<Paypal/>}/>
        


        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </Productcontext.Provider>
    </div>
  );
}

export default App;

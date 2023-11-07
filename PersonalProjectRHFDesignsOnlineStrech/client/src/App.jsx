import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShopInventory from "./components/ShopInventory";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Nav from "./components/Nav";
import Company from "./components/Company";
import View from "./components/View";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Login from "./components/Login";

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [allJewelry, setAllJewelry] = useState([]);

  const getAllJewelry = () => {
    axios
      .get(`http://localhost:8000/api/jewelry`)
      .then((response) => {
        console.log("I am get all jewelry!!!");
        setAllJewelry(response.data.allJewelry);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getLoggedUser", { withCredentials: true })
      .then((res) => {
        setLoggedUser(res.data.user), console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllJewelry();
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route
              path="/shopInventory"
              element={
                <ShopInventory
                  allJewelry={allJewelry}
                  setAllJewelry={setAllJewelry}
                  loggedUser={loggedUser}
                  setLoggedUser={setLoggedUser}
                />
              }
            />
            <Route
              path="/create"
              element={
                <Create loggedUser={loggedUser} setAllJewelry={setAllJewelry} />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <Edit loggedUser={loggedUser} getAllJewelry={getAllJewelry} />
              }
            />
            <Route
              path="/view/:id"
              element={
                <View loggedUser={loggedUser} getAllJewelry={getAllJewelry} />
              }
            />
            <Route path="/company" element={<Company />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login setLoggedUser={setLoggedUser} />}
            />
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

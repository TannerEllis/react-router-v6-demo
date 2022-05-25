import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Error from "./Error";
import Products from "./Components/Products";
import Search from "./Components/Search";
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import DisplayProduct from "./Components/DisplayProduct";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ProductList />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<DisplayProduct />} />
        </Route>
          <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

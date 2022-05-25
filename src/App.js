import './App.css'; 
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Products from './Components/Products';
import Search from './Components/Search';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import DisplayProduct from './Components/DisplayProduct';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/add' > Add </Link>
        <Link to='/home' > Home </Link>
        <Link to='/products/search' > Products</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Login/>} /> 
        <Route path='/home' element={<Home/>} /> 
        <Route path='/products' element={<Products/>}> 
        <Route path='search' element={<Search/>} /> 
        <Route path='list' element={<ProductList/>} /> 
        <Route path='add' element={<AddProduct/>} /> 
        <Route path=':id' element={<DisplayProduct/>} />
        </Route> 
      </Routes>
    </div>
  );
}

export default App;

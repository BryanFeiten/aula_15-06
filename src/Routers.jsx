import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
            </Routes>
        </BrowserRouter>
    );
}
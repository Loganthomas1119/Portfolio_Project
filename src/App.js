import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';
import { fetchProducts } from "./features/products/ProductsSlice";





function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route
                    path='directory/:productId'
                    element={<ProductDetailPage />}
                />
                <Route path='about' element={<AboutPage />} />
            </Routes>
        </div>
    );
}

export default App;


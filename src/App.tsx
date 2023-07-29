import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Alta from './pages/Alta';
import Contact from './pages/Contact';
import About from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import CheckOut from './pages/Checkout';
import ShopppingCartProvider from "./context/ShopCartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/alta",
    element: <Alta />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/nosotros",
    element: <About />,
  },
  {
    path: "/detalle/:id",
    element: <ProductDetail />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);

function App() {
  return (
    <ShopppingCartProvider>
      <RouterProvider 
        router={router} 
        fallbackElement={<Home />}
      />
    </ShopppingCartProvider>
  );
}

export default App;

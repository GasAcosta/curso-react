import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

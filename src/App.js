import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Gastón"} />
      <Footer />
    </div>
  );
}

export default App;

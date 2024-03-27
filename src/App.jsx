import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a MC - su tienda de instrumentos musicales." />
    </>
  );
}

export default App;

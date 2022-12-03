import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

//part
import Header from "./parts/header";
import Footer from "./parts/footer";

//pages
import ProductList from "./pages/products/ProductList";
import ProductDetail from "./pages/products/ProductDetail";
import ProductAdd from "./pages/products/ProductAdd";

function App() {
  return (
    <>
      <Router>
        <div className="App-header">
          <Header></Header>
        </div>

        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/:productId" element={<ProductDetail />} />
          <Route exact path="/create" element={<ProductAdd />} />
        </Routes>

        <div className="App-footer d-flex justify-content-center">
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;

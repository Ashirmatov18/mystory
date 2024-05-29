import "./App.css";
import Dino from "./comp/Dino";
import ImageUploader from "./comp/ImageUploader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./comp/Reviews";
import Checkout from "./comp/payment/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dino />} />
          <Route path="/swapper" element={<ImageUploader />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/payment" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

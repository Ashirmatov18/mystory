import "./App.css";
import Dino from "./comp/Dino";
import ImageUploader from "./comp/ImageUploader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StripeCheckout from "./comp/stripe/StripeCheckout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dino />} />
          <Route path="/swapper" element={<ImageUploader />} />
          <Route path="/payment" element={<StripeCheckout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

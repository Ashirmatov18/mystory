import "./App.css";
import Dino from "./comp/Dino";
import ImageUploader from "./comp/ImageUploader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StripeCheckout from "./comp/payment/StripeCheckout";
import Reviews from "./comp/Reviews";
import Personalize from "./comp/personalize/Personalize";
import Checkout from "./comp/payment/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Personalize />} />
          <Route path="/swapper" element={<ImageUploader />} />
          <Route path="/payment" element={<StripeCheckout />} />
          <Route path="/review" element={<Reviews />} />
          {/* <Route path="/personalize" element={<Personalize />} /> */}
          <Route path="/payment" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

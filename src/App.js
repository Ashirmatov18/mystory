import "./App.css";
import Dino from "./comp/Dino";
import ImageUploader from "./comp/ImageUploader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import StripeCheckout from "./comp/payment/StripeCheckout";
import Reviews from "./comp/Reviews";
import Personalize from "./comp/personalize/Personalize";
=======
import Reviews from "./comp/Reviews";
import Checkout from "./comp/payment/Checkout";
>>>>>>> 939a33bb5541d03181323bdfc001b69c439253ae

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dino />} />
          <Route path="/swapper" element={<ImageUploader />} />
<<<<<<< HEAD
          <Route path="/payment" element={<StripeCheckout />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/personalize" element={<Personalize />} />
=======
          <Route path="/review" element={<Reviews />} />
          <Route path="/payment" element={<Checkout />} />
>>>>>>> 939a33bb5541d03181323bdfc001b69c439253ae
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

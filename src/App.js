import "./App.css";
import Dino from "./comp/Dino";
import ImageUploader from "./comp/ImageUploader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import StripeCheckout from "./comp/stripe/StripeCheckout";
import Reviews from "./comp/Reviews";
=======
import Checkout from "./comp/payment/Checkout";
>>>>>>> 98135f66884f6d429a8ec51a36f71abca11ebf0d

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
=======
          <Route path="/payment" element={<Checkout />} />
>>>>>>> 98135f66884f6d429a8ec51a36f71abca11ebf0d
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

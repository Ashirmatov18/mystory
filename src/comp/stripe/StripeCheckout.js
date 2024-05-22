import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./StripeCheckout.css";

const stripePromise = loadStripe("your-public-key");

const StripeCheckout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default StripeCheckout;

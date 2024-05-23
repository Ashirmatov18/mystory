import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./StripeCheckout.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const StripeCheckout = () => {
  const appearance = {
    theme: "flat",
    labels: "floating",
  };
  const options = {
    appearance,
    mode: "setup",
    currency: "usd",
    paymentMethodCreation: "manual",
    paymentMethodTypes: ["card"],
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default StripeCheckout;

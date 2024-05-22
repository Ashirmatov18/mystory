import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
    } else {
      console.log("Payment Method:", paymentMethod);
      setError(null);
      setIsProcessing(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-container">
        <CardElement />
      </div>
      <button
        className="button"
        type="submit"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing…" : "Pay"}
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default CheckoutForm;

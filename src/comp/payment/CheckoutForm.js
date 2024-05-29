import React, { useCallback, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { Button, Grid } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Confirm3DS } from "./Confirm3DS";
import axios from "axios";

const CheckoutForm = ({ clientData, handleNext, handleBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentId, setPaymentId] = useState();
  const [redirectUrl, setRedirectUrl] = useState();

  const buyBook = async (paymentMethodId) => {
    try {
      const paymentResponse = await axios(
        `${process.env.REACT_APP_ASIA_API_URL}api/books/buy`,
        {
          method: "POST",
          data: {
            paymentMethodId,
            ...clientData,
            orderedBook: "encyclopedia_dino_girl_6_shaten_white_1_ru",
          },
        }
      );

      return paymentResponse;
    } catch (e) {
      setError(e.message);
      setIsProcessing(false);
    }

    return undefined;
  };

  const confirm3DS = useCallback(
    async (paymentMethodId) => {
      if (!stripe) return;

      try {
        const paymentResponse = await buyBook(paymentMethodId);

        if (!paymentResponse) {
          return;
        }

        if (
          !paymentResponse?.data.actionRequired &&
          !paymentResponse.data.clientSecret
        ) {
          handleNext();

          return;
        }

        const {
          redirectUrl: paymentIntentUrl,
          id,
          clientSecret,
        } = paymentResponse.data;

        if (!paymentIntentUrl || clientSecret) {
          const confirmResponse = await stripe?.confirmCardPayment(
            clientSecret
          );

          if (confirmResponse?.error) {
            setError(confirmResponse.error?.message);
            setIsProcessing(false);

            return;
          }

          if (confirmResponse.paymentIntent?.id) {
            await axios(
              `${process.env.REACT_APP_ASIA_API_URL}api/payments/${confirmResponse.paymentIntent.id}/check`,
              {
                method: "POST",
              }
            );
          }

          handleNext();

          return;
        }

        setPaymentId(id);
        setRedirectUrl(paymentIntentUrl);
      } catch (e) {
        setError(e.response?.data.message);
        setIsProcessing(false);
      }
    },
    [stripe, handleNext]
  );

  const handleSubmit = async (event) => {
    if (!stripe || !elements) return;

    event.preventDefault();
    setIsProcessing(true);

    await elements?.submit();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      elements,
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
    } else {
      await confirm3DS(paymentMethod?.id);
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
    paymentMethodOrder: ["card"],
  };

  if (!paymentId)
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
        </div>

        <Grid gap={1} display="flex" flexDirection="column">
          <Button
            type="submit"
            variant="contained"
            disabled={!stripe || isProcessing}
            fullWidth
          >
            {isProcessing ? "Processing…" : "Pay"}
          </Button>

          <Button
            startIcon={<ChevronLeftRoundedIcon />}
            onClick={handleBack}
            variant="outlined"
            fullWidth
          >
            Previous
          </Button>
        </Grid>
        {error && <div className="error-message">{error}</div>}
      </form>
    );

  return (
    <Confirm3DS
      redirectUrl={redirectUrl}
      paymentId={paymentId}
      onSuccess={handleNext}
      onFailure={() => {
        setError(null);
        setIsProcessing(false);
      }}
      onClose={() => {
        setPaymentId(undefined);
        setRedirectUrl(undefined);
      }}
    />
  );
};

export default CheckoutForm;

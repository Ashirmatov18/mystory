import React from "react";
import { useCallback } from "react";

import { useWindowEvent } from "../../hooks/useWindowEvent";
import axios from "axios";

export const Confirm3DS = (props) => {
  const { onSuccess, onFailure, paymentId, redirectUrl } = props;

  const on3DSComplete = useCallback(async () => {
    if (!paymentId) return;

    try {
      const { status, isError, message } = await axios(
        `${process.env.REACT_APP_ASIA_API_URL}api/payments/${paymentId}/check`,
        {
          method: "POST",
        }
      );

      if (isError) {
        onFailure?.(message);

        return;
      }

      if (status === "Complete") {
        onSuccess();
      }
    } catch (e) {
      onFailure?.(e.response?.data.message);
    }
  }, [paymentId]);

  useWindowEvent("message", (event) => {
    if (event.data === "3DS-authentication-complete") {
      on3DSComplete();
    }
  });

  if (!paymentId || !redirectUrl) return null;

  return (
    <iframe src={redirectUrl} title="confirm3ds" width="100%" height="100%" />
  );
};

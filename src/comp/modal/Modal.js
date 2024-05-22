import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=Fv0y1oXMRVY_A3hadXFv60kGGYJVQI0ZYlqLV5kh4BLD-8-q9l75zQcLgfwHvl1QEcuvibpyRcdUHiXlRH10OTBCyTtqTXt-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAJtPzhxc5Fc1Nfgm8yz7NeGVf1ZcM1d6iTF55SqtcfcjTD97KSr-Rjp5eNVUmSINH3UuETUjvyIG4W1TsyMhSSvr6rBR_mpHQ&lib=MCUziQYwuI8DGvtO_j-l0YvSAmiWWKILr",
        {
          method: "POST",
          body: JSON.stringify({ name, email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.status === "success") {
        setMessage("Your information has been successfully sent!");
      } else {
        console.log(response);
        console.log(result);
        setMessage("There was an error sending your information.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error sending your information.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>We'll contact you soon to personalize your book.</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="emailinput"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="emailinput"
            />
          </label>
          <button className="submitbut" type="submit">
            Submit
          </button>
        </form>
        {message && <p className="error_mes">{message}</p>}
      </div>
    </div>
  );
};

export default Modal;

import * as React from "react";

import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm({ handleNext, setClientData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    setClientData(entries);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <FormGrid item xs={12} md={6}>
          <FormLabel htmlFor="clientFirstName" required>
            First name
          </FormLabel>
          <OutlinedInput
            id="clientFirstName"
            name="clientFirstName"
            type="name"
            placeholder="John"
            autoComplete="first name"
            required
          />
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <FormLabel htmlFor="clientLastName" required>
            Last name
          </FormLabel>
          <OutlinedInput
            id="clientLastName"
            name="clientLastName"
            type="last-name"
            placeholder="Snow"
            autoComplete="last name"
            required
          />
        </FormGrid>
        <FormGrid item xs={12}>
          <FormLabel htmlFor="clientAddress" required>
            Address
          </FormLabel>
          <OutlinedInput
            id="clientAddress"
            name="clientAddress"
            type="address"
            placeholder="Street name and number, apartment, suite, unit, etc."
            autoComplete="shipping address"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="clientPhoneNumber" required>
            Phone number
          </FormLabel>
          <OutlinedInput
            id="clientPhoneNumber"
            name="clientPhoneNumber"
            type="phone"
            placeholder="Phone number with country code"
            autoComplete="phone number"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="clientEmail" required>
            Email
          </FormLabel>
          <OutlinedInput
            id="clientEmail"
            name="clientEmail"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="clientCity" required>
            City
          </FormLabel>
          <OutlinedInput
            id="clientCity"
            name="clientCity"
            type="city"
            placeholder="New York"
            autoComplete="City"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="clientState" required>
            State
          </FormLabel>
          <OutlinedInput
            id="clientState"
            name="clientState"
            type="state"
            placeholder="NY"
            autoComplete="State"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="zipCode" required>
            Zip / Postal code
          </FormLabel>
          <OutlinedInput
            id="zipCode"
            name="zipCode"
            type="zip"
            placeholder="12345"
            autoComplete="shipping postal-code"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="clientCountry" required>
            Country
          </FormLabel>
          <OutlinedInput
            id="clientCountry"
            name="clientCountry"
            type="country"
            placeholder="United States"
            autoComplete="shipping country"
            required
          />
        </FormGrid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        endIcon={<ChevronRightRoundedIcon />}
        sx={{
          width: { xs: "100%" },
          marginTop: { xs: "50px" },
        }}
      >
        Next
      </Button>
    </form>
  );
}

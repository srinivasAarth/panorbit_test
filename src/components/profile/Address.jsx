import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import InfoTypo from "../../libs/Typo/InfoTypo";
import Map from "./Map";
import { fontFamily } from "../../constants/TypoStyles";

const AddressRoot = styled(Box)`
  height: auto;
  flex: 1;
  padding: 0 1rem;
`;
const AddressDetails = styled(Box)`
  width: 300px;
`;
const Address = () => {
  return (
    <AddressRoot>
      <Typography sx={{ py: 1, fontFamily: fontFamily }} variant="h6">
        Address
      </Typography>
      <AddressDetails>
        <InfoTypo Key="Username" value="nice to meet you" />
        <InfoTypo Key="E-main" value="nice to meet you" />
        <InfoTypo Key="Phone" value="nice to meet you" />
        <InfoTypo Key="Website" value="nice to meet you " />
      </AddressDetails>
      <Map />
    </AddressRoot>
  );
};

export default Address;

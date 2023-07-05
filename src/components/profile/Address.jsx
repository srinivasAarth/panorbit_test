import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import InfoTypo from "../../libs/Typo/InfoTypo";
import Map from "./Map";
import { fontFamily } from "../../constants/TypoStyles";
import { valueColor } from "../../constants/colors";

const AddressRoot = styled(Box)`
  height: auto;
  flex: 1;
  padding: 0 1rem;
`;
const AddressDetails = styled(Box)`
  width: 300px;
`;
const Address = ({ data = {} }) => {
  const { address = {} } = data;
  return (
    <AddressRoot>
      <Typography
        sx={{ py: 1, fontFamily: fontFamily, color: valueColor }}
        variant="h6"
      >
        Address
      </Typography>
      <AddressDetails>
        <InfoTypo Key="Street" value={address?.street} />
        <InfoTypo Key="Suit" value={address?.suite} />
        <InfoTypo Key="City" value={address?.city} />
        <InfoTypo Key="Zipcode" value={address?.zipcode} />
      </AddressDetails>
      <Map geo={address?.geo || {}} />
    </AddressRoot>
  );
};

export default Address;

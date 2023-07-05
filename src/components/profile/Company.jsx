import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import InfoTypo from "../../libs/Typo/InfoTypo";
import { fontFamily } from "../../constants/TypoStyles";
import { valueColor } from "../../constants/colors";
const Root = styled(Box)`
  height: auto;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Company = ({ data = {} }) => {
  const { company = {} } = data;
  return (
    <Root>
      <Typography
        sx={{ py: 1, fontFamily: fontFamily, color: valueColor }}
        variant="h6"
      >
        Company
      </Typography>
      <InfoTypo Key="Name" value={company?.name} />
      <InfoTypo Key="catchphrase" value={company?.catchPhrase} />
      <InfoTypo Key="bs" value={company?.bs} />
    </Root>
  );
};

export default Company;

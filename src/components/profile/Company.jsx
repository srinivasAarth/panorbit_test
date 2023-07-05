import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import InfoTypo from "../../libs/Typo/InfoTypo";
import { fontFamily } from "../../constants/TypoStyles";
const Root = styled(Box)`
  height: auto;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Company = () => {
  return (
    <Root>
      <Typography sx={{ py: 1, fontFamily: fontFamily }} variant="h6">
        Company
      </Typography>
      <InfoTypo Key="Username" value="nice to meet you" />
      <InfoTypo Key="E-main" value="nice to meet you" />
      <InfoTypo Key="Phone" value="nice to meet you" />
      <InfoTypo
        Key="Website"
        value="nice to meet you jdsjfsdklksd hdkjfgjdfjk jkdsfhgj"
      />
    </Root>
  );
};

export default Company;

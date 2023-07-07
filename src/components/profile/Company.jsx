import styled from "@emotion/styled";
import { Box } from "@mui/material";
import InfoTypo from "../../libs/Typo/InfoTypo";
import { valueColor } from "../../constants/colors";
import Text from "../../libs/typo/Typography";
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
      <Text text="Company" sx={{ py: 1, color: valueColor }} variant="h6" />
      <InfoTypo Key="Name" value={company?.name} />
      <InfoTypo Key="catchphrase" value={company?.catchPhrase} />
      <InfoTypo Key="bs" value={company?.bs} />
    </Root>
  );
};

export default Company;

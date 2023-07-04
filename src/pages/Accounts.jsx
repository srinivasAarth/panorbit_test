import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Wave from "../libs/animation/Wave";
import AccountsList from "../components/account/AccountsList";

const Root = styled(Box)`
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Accounts = () => {
  return (
    <Root>
      <Wave />
      <AccountsList />
    </Root>
  );
};

export default Accounts;

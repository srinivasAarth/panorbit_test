import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
const HeaderRoot = styled(Box)`
  width: calc(100% - 3rem);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: yellow;
`;
const Header = () => {
  return (
    <HeaderRoot>
      <Typography>Profile</Typography>
      <Typography>Profile</Typography>
    </HeaderRoot>
  );
};

export default Header;

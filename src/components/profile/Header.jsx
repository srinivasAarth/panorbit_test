import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Text from "../../libs/Typo/Typography";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const HeaderRoot = styled(Box)`
  width: calc(100% - 3rem);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Dropdown = styled(Box)`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
`;
const Image = styled("img")`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
`;
const Header = () => {
  const { accounts, userId } = useSelector((state) => state.accounts);
  const value = useLocation().pathname.split("/")[2];
  const { name, profilepicture } =
    accounts?.find(({ id }) => id === userId) || {};

  return (
    <HeaderRoot>
      <Text text={value} sx={{ textTransform: "capitalize" }} />
      <Dropdown>
        <Image src={profilepicture} />
        <Text sx={{ pl: 1 }} text={name} />
      </Dropdown>
    </HeaderRoot>
  );
};

export default Header;

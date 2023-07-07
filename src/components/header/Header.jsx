import styled from "@emotion/styled";
import { Box, Menu } from "@mui/material";
import Text from "../../libs/typo/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setOpen } from "../../redux/slice/accountsSlice";
import ViewProfile from "./ViewProfile";
const HeaderRoot = styled(Box)`
  width: calc(100% - 3rem);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Dropdown = styled(Box)`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;
const Image = styled("img")`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
`;
const Header = () => {
  const dispatch = useDispatch();
  const { accounts, userId, open } = useSelector((state) => state.accounts);
  const value = useLocation().pathname.split("/")[2];
  const { name, profilepicture, email } =
    accounts?.find(({ id }) => id === userId) || {};
  return (
    <>
      <HeaderRoot>
        <Text
          text={value}
          variant="h6"
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
        />
        <Dropdown onClick={() => dispatch(setOpen(!open))}>
          <Image src={profilepicture} />
          <Text sx={{ pl: 1 }} text={name} />
        </Dropdown>
        <ViewProfile name={name} pc={profilepicture} email={email} />
      </HeaderRoot>
    </>
  );
};

export default Header;

import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Text from "../../libs/typo/Typography";
import { dividerColor, keyColor, paper } from "../../constants/colors";
import { BiChevronRight } from "react-icons/bi";
const NavRoot = styled(Stack)`
  height: 100%;
  width: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(to bottom, #474fc8, #702cc8);
  position: sticky;
  top: 0;
`;
const NavItem = styled(Box)`
  width: auto;
  display: inline-flex;
  align-items: center;
  position: relative;
`;
const IconBox = styled(Box)`
  height: 2rem;
  width: 2rem;
  background: ${paper};
  border-radius: 50% 0 0 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  position: relative;

  &:: before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;

    top: -1rem;
    right: 0rem;
    border-bottom-right-radius: 50%;
    box-shadow: 13px 14px 0px 12px ${paper};
  }
  &:: after {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    bottom: -1rem;
    right: 0rem;
    border-top-right-radius: 50%;
    box-shadow: 13px -14px 0px 12px ${paper};
  }
`;
const Navbar = () => {
  const { userId } = useSelector((state) => state.accounts);
  const page = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  const Controls = [
    { name: "Profile", route: `profile/${userId}` },
    { name: "Posts", route: "posts" },
    { name: "Gallary", route: "gallary" },
    { name: "Todo", route: "todo" },
  ];

  return (
    <NavRoot spacing={0.3} sx={{ borderRadius: 6 }}>
      {Controls?.map(({ name, route }, i) => (
        <NavItem onClick={() => navigate(route)} key={route || i}>
          <Text
            sx={{
              color: page === name.toLowerCase() ? paper : keyColor,
              ml: "3rem",
              mr: "1rem",
              width: "10rem",
              py: 1.9,
              ...(Controls.length - 1 !== i && {
                borderBottom: `.05rem solid ${dividerColor}`,
              }),
            }}
            text={name}
            variant="body1"
          />
          <IconBox show={page === name.toLowerCase()}>
            <BiChevronRight
              style={{ width: "auto", zIndex: 100 }}
              size={"1.5rem"}
              color={dividerColor}
            />
          </IconBox>
        </NavItem>
      ))}
    </NavRoot>
  );
};

export default Navbar;

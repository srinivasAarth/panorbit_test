import styled from "@emotion/styled";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NavRoot = styled(Stack)`
  height: 100%;
  width: 200px;
  background: red;
  position: relative;
  padding: 0 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NavItem = styled(Box)`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Navbar = () => {
  const navigate = useNavigate();
  const Controls = [
    { name: "Profile", route: "profile" },
    { name: "Posts", route: "posts" },
    { name: "Gallary", route: "gallary" },
    { name: "Todo", route: "todo" },
  ];

  return (
    <NavRoot
      spacing={0.3}
      sx={{ borderRadius: 6 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {Controls?.map(({ name, route }, i) => (
        <NavItem onClick={() => navigate(route)} key={route || i}>
          <Typography variant="body1">{name}</Typography>
        </NavItem>
      ))}
    </NavRoot>
  );
};

export default Navbar;

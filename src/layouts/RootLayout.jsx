/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Box, Container, Divider, Stack } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../components/profile/Header";
const AppRoot = styled(Container)`
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const BodyRoot = styled(Stack)`
  height: 100%;
  flex: 1;
  background: white;
  display: flex;
  margin-left: 1rem;
`;
const ContentBox = styled(Box)`
  flex-grow: 1;
  width: 100%;
`;
const RootLayout = ({ children }) => {
  return (
    <AppRoot>
      <Navbar />
      <BodyRoot divider={<Divider orientation="horizontal" flexItem />}>
        <Header />
        <ContentBox>
          {children}
          <Outlet />
        </ContentBox>
      </BodyRoot>
    </AppRoot>
  );
};

export default RootLayout;

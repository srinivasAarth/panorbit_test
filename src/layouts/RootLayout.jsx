/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Box, Container, Divider, Stack } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../components/profile/Header";
const AppRoot = styled(Container)`
  height: 100vh;
  background: green;
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
`;
const ContentBox = styled(Box)`
  flex-grow: 1;
  width: 100%;
  background: blue;
`;
const RootLayout = ({ children }) => {
  return (
    <AppRoot maxWidth="lg">
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

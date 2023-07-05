import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
const ModelRoot = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadAndError = ({ content, status, error }) => {
  return (
    <>
      {status && <ModelRoot>Loading...</ModelRoot>}
      {error && <ModelRoot>Got Error</ModelRoot>}
      {!status && !error && content}
    </>
  );
};

export default LoadAndError;

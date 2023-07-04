import { Box } from "@mui/material";
import "./app.css";
import Wave from "./libs/animation/Wave";
import styled from "@emotion/styled";
import Accounts from "./pages/Accounts";

const Root = styled(Box)`
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const App = () => {
  return (
    <Root>
      <Wave />
      <Accounts />
    </Root>
  );
};

export default App;

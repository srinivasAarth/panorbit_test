import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Text from "../libs/Typo/Typography";
import { keyColor } from "../constants/colors";
const Root = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Todo = () => {
  return (
    <Root>
      <Text
        variant="h1"
        text="Coming Soon"
        sx={{ color: keyColor, fontWeight: 500 }}
      />
    </Root>
  );
};

export default Todo;

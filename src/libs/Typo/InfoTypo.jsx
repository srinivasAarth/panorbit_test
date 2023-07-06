import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { keyColor, valueColor } from "../../constants/colors";
import Text from "./Typography";
const InfoBox = styled(Box)`
  width: 100%;
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.6rem 0;
`;
const KeyText = styled(Box)`
  text-align: right;
  width: 100px;
  color: ${keyColor};
`;
const Colon = styled(Box)`
  text-align: center;
  flex: 0 0 20px;
`;
const Value = styled(Box)`
  text-align: left;
  width: 200px;
  color: ${valueColor};
`;
const InfoTypo = ({ Key, value }) => {
  return (
    <InfoBox>
      <KeyText>
        <Text text={Key} variant="body1" />
      </KeyText>
      <Colon>
        <Text text=":" variant="body1" />
      </Colon>
      <Value>
        <Text sx={{ fontWeight: 600 }} variant="body1" text={value} />
      </Value>
    </InfoBox>
  );
};

export default InfoTypo;

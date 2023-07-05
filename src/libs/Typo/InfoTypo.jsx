import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { keyColor, valueColor } from "../../constants/colors";
import { fontFamily } from "../../constants/TypoStyles";
const InfoBox = styled(Box)`
  width: 100%;
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const KeyText = styled(Box)`
  text-align: right;
  width: 150px;
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
        <Typography sx={{ fontFamily: fontFamily }} variant="body1">
          {Key}
        </Typography>
      </KeyText>
      <Colon>
        <Typography sx={{ fontFamily: fontFamily }} variant="body1">
          :
        </Typography>
      </Colon>
      <Value>
        <Typography
          sx={{ fontWeight: 600, fontFamily: fontFamily }}
          variant="body1"
        >
          {value}
        </Typography>
      </Value>
    </InfoBox>
  );
};

export default InfoTypo;

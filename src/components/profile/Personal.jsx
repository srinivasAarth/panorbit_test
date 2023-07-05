import styled from "@emotion/styled";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Company from "./Company";
import InfoTypo from "../../libs/Typo/InfoTypo";
import { fontFamily } from "../../constants/TypoStyles";

const PersonalRoot = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;
const Image = styled("img")`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;
const Details = styled(Box)`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 0.5rem;
`;
const Personal = () => {
  return (
    <PersonalRoot divider={<Divider orientation="horizontal" flexItem />}>
      <Details>
        <Image />
        <Typography sx={{ py: 1, fontFamily: fontFamily }} variant="h6">
          Leanne Graham
        </Typography>
        <InfoTypo Key="Username" value="chary" />
        <InfoTypo Key="E-main" value="chary" />
        <InfoTypo Key="Phone" value="chary" />
        <InfoTypo Key="Website" value="chary" />
      </Details>
      <Company />
    </PersonalRoot>
  );
};

export default Personal;

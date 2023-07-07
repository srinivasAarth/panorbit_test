import styled from "@emotion/styled";
import { Box, Divider, Stack } from "@mui/material";
import Company from "./Company";
import InfoTypo from "../../libs/Typo/InfoTypo";
import { valueColor } from "../../constants/colors";
import Text from "../../libs/typo/Typography";

const PersonalRoot = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  padding: 0 1rem;
  ${({ theme }) => theme.breakpoints.only("md")} {
    flex-direction: row;
  }
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
const Personal = ({ data = {} }) => {
  const { username, name, phone, website, email, profilepicture } = data;
  return (
    <PersonalRoot divider={<Divider orientation="horizontal" flexItem />}>
      <Details>
        <Image src={profilepicture} alt="photo" />
        <Text sx={{ py: 1, color: valueColor }} variant="h6" text={name} />
        <InfoTypo Key="Username" value={username} />
        <InfoTypo Key="E-main" value={email} />
        <InfoTypo Key="Phone" value={phone} />
        <InfoTypo Key="Website" value={website} />
      </Details>
      <Company data={data} />
    </PersonalRoot>
  );
};

export default Personal;

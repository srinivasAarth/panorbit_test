import styled from "@emotion/styled";
import { Box, Divider, Stack } from "@mui/material";
import Personal from "../components/profile/Personal";
import Address from "../components/profile/Address";
const ProfileRoot = styled(Stack)`
  height: auto;
  width: 100%;
  background: yellow;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Profile = () => {
  return (
    <ProfileRoot divider={<Divider orientation="vertical" flexItem />}>
      <Personal />
      <Address />
    </ProfileRoot>
  );
};

export default Profile;

import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import Personal from "../components/profile/Personal";
import Address from "../components/profile/Address";
const ProfileRoot = styled(Stack)`
  height: auto;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 1rem 0;
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

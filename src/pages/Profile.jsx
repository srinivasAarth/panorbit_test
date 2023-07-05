/* eslint-disable no-extra-boolean-cast */
import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import Personal from "../components/profile/Personal";
import Address from "../components/profile/Address";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const { accounts, userId } = useSelector((state) => state.accounts);
  const { uid } = useParams();
  const object = accounts?.find(({ id }) => id === +uid) || {};
  if (!userId) {
    return <Navigate to="/" />;
  }
  return (
    <ProfileRoot divider={<Divider orientation="vertical" flexItem />}>
      <Personal data={object} />
      <Address data={object} />
    </ProfileRoot>
  );
};

export default Profile;

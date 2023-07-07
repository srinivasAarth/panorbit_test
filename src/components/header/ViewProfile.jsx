import styled from "@emotion/styled";
import { Box, Button, Divider, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Text from "../../libs/typo/Typography";
import { Item, Image } from "../account/AccountsList";
import {
  dividerColor,
  keyColor,
  paper,
  signOutBgColor,
} from "../../constants/colors";
import {
  attachUserId,
  setOpen,
  setUserId,
} from "../../redux/slice/accountsSlice";
import { useNavigate } from "react-router-dom";
const ProfileRoot = styled(Box)`
  height: auto;
  width: calc(19rem - 4rem);
  background: ${paper};
  position: absolute;
  outline: none;
  top: 5rem;
  right: 3rem;
  z-index: 10;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Img = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;
const ShiftImg = styled(Image)`
  width: 2.2rem;
  height: 2.2rem;
`;
const SignOut = styled(Button)`
  margin-top: 0.5rem;
  background: ${signOutBgColor};
  box-shadow: none;
  &: hover {
    background: ${signOutBgColor};
    opacity: 0.9;
  }
`;

const ViewProfile = ({ name, pc, email }) => {
  const { open, accounts } = useSelector((s) => s.accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getRandomNumbers = () => {
    const id1 = Math.floor(Math.random() * 10) + 1;
    const id2 = Math.floor(Math.random() * 10) + 1;
    return [id1, id2];
  };
  const [id1, id2] = getRandomNumbers();

  const shiftAccount = (id) => {
    console.log("clicked", id);
    dispatch(attachUserId(id + 1, navigate));
    dispatch(setOpen(false));
  };
  return (
    <ProfileRoot sx={{ borderRadius: 5, display: open ? "flex" : "none" }}>
      <Img src={pc} alt="-" />
      <Text sx={{ py: 1 }} text={name} />
      <Text sx={{ pb: 1, color: keyColor }} text={email} />
      <Divider
        orientation="horizontal"
        sx={{ bgcolor: dividerColor }}
        flexItem
      />
      <Item
        onClick={() => shiftAccount(id1)}
        direction="row"
        sx={{ width: "100% !important", justifyContent: "center", py: 0.5 }}
      >
        <ShiftImg alt="_" src={accounts?.[id1]?.profilepicture} />
        <Text sx={{ pl: 2 }} text={accounts?.[id1]?.name} />
      </Item>
      <Item
        onClick={() => shiftAccount(id2)}
        direction="row"
        sx={{
          width: "100% !important",
          justifyContent: "center",
          py: 0.5,
          borderBottom: "none !important",
        }}
      >
        <ShiftImg alt="_" src={accounts?.[id2]?.profilepicture} />
        <Text sx={{ pl: 2 }} text={accounts?.[id2]?.name} />
      </Item>
      <SignOut
        onClick={() => {
          dispatch(setUserId(null));
          dispatch(setOpen(false));
        }}
        sx={{ borderRadius: 5 }}
        variant="contained"
      >
        Sign out
      </SignOut>
    </ProfileRoot>
  );
};

export default ViewProfile;

import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import {
  accountTitleBackground,
  dividerColor,
  keyColor,
  paper,
} from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { attachUserId } from "../../redux/slice/accountsSlice";
import Text from "../../libs/typo/Typography";
const AccountsRoot = styled(Box)`
  height: 500px;
  width: 650px;
  background: ${paper};
  z-index: 3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`;
const FlexBox = styled(Box)`
  width: 100%;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  background: ${({ bg }) => bg};
  flex-direction: column;
  overflow-y: ${({ flow }) => flow};
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: ${paper};
  }
  &::-webkit-scrollbar-thumb {
    background: ${keyColor};
    border-radius: 0.5rem;
  }
`;
export const Item = styled(Stack)`
  height: 3.3rem;
  width: calc(100% - 4rem);
  border-bottom: 0.05rem solid ${dividerColor};
  align-items: center;
  margin: 0 2rem;
  cursor: pointer;
`;
export const Image = styled("img")`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
`;
const AccountsList = () => {
  const { accounts } = useSelector((state) => state.accounts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <AccountsRoot sx={{ borderRadius: 6, boxShadow: 12 }}>
      <FlexBox
        justify="center"
        sx={{ height: "7rem", display: "flex" }}
        bg={accountTitleBackground}
        flow="none"
      >
        <Text text="Select an Account" variant="h5" sx={{ fontWeight: 600 }} />
      </FlexBox>
      <FlexBox
        justify="flex-start"
        flow="scroll"
        bg={paper}
        sx={{ height: "auto" }}
      >
        {accounts?.map(({ profilepicture, name, id }, i) => (
          <Item
            onClick={() => dispatch(attachUserId(id, navigate))}
            key={id || i}
            direction="row"
            spacing={2}
          >
            <Image src={profilepicture} alt="user" />
            <Text text={name} variant="body1" />
          </Item>
        ))}
      </FlexBox>
    </AccountsRoot>
  );
};

export default AccountsList;

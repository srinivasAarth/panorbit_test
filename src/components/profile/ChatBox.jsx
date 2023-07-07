import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import React from "react";
import {
  dividerColor,
  gradientPrimary,
  paper,
  valueColor,
} from "../../constants/colors";
import Text from "../../libs/typo/Typography";
import { BiMessage } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import { useSelector } from "react-redux";
const Root = styled(Box)`
  height: 18rem;
  width: 16rem;
  background: ${paper};
  position: fixed;
  bottom: ${({ hide }) => (hide ? "-15rem" : "0rem")};
  right: 5rem;
  z-index: 7;
  transition: 0.5s ease-in-out;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  overflow: hidden;
  border: 0.05rem solid ${gradientPrimary};
`;
const Header = styled(Box)`
  height: 3rem;
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${paper};
  padding: 0rem 1rem;
  cursor: pointer;
`;
const Title = styled(Stack)`
  flex-direction: row;
  align-items: center;
  color: ${paper};
`;
const FlexBox = styled(Box)`
  width: 100%;
  flex: 1;
  background: green;
  overflow-y: scroll;
  padding: 0rem 0rem;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: ${paper};
  }
  &::-webkit-scrollbar-thumb {
    background: ${dividerColor};
    border-radius: 0.5rem;
  }
`;
const Img = styled("img")`
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
`;
const ChatBox = () => {
  const { accounts = [] } = useSelector((s) => s.accounts);
  const [hide, setHide] = React.useState(true);
  const Icon = hide ? FiChevronDown : FiChevronUp;
  return (
    <Root hide={hide}>
      <Header
        onClick={() => setHide((p) => !p)}
        sx={{ bgcolor: gradientPrimary }}
      >
        <Title>
          <BiMessage size={"1rem"} />
          <Text text="Chat" sx={{ pl: 1 }} />
        </Title>
        <Icon style={{ width: "auto", fontWeight: "bolder" }} size={"1rem"} />
      </Header>
      <FlexBox>
        {accounts?.map(({ id, name, profilepicture }, i) => (
          <Header sx={{ bgcolor: paper }} key={id || i}>
            <Title sx={{ py: 0.2, color: `${valueColor} !important` }}>
              <Img src={profilepicture} alt="_" />
              <Text sx={{ fontSize: 12, pl: 1, width: "10rem" }} text={name} />
            </Title>
            <RxDotFilled color="green" size="2rem" />
          </Header>
        ))}
      </FlexBox>
    </Root>
  );
};

export default ChatBox;

import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { accountTitleBackground, paper } from "../../constants/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fontFamily } from "../../constants/TypoStyles";
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
`;
const Item = styled(Stack)`
  height: 3.3rem;
  width: calc(100% - 4rem);
  border-bottom: 0.05rem solid #dadada;
  align-items: center;
  margin: 0 2rem;
  cursor: pointer;
`;
const Image = styled("img")`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
`;
const AccountsList = () => {
  const { accounts } = useSelector((state) => state.accounts);
  const navigate = useNavigate();
  return (
    <AccountsRoot sx={{ borderRadius: 6, boxShadow: 12 }}>
      <FlexBox
        justify="center"
        sx={{ height: "7rem", display: "flex" }}
        bg={accountTitleBackground}
      >
        <Typography component="h5" variant="h5" sx={{ fontWeight: 600 }}>
          Select an Account
        </Typography>
      </FlexBox>
      <FlexBox
        justify="flex-start"
        bg={paper}
        sx={{ height: "auto", overflowY: "scroll" }}
      >
        {accounts?.map(({ profilepicture, name }, i) => (
          <Item
            onClick={() => navigate(`details/profile/${i}`)}
            key={name || i}
            direction="row"
            spacing={2}
          >
            <Image src={profilepicture} alt="user" />
            <Typography sx={{ fontFamily: fontFamily }} variant="body1">
              {name}
            </Typography>
          </Item>
        ))}
      </FlexBox>
    </AccountsRoot>
  );
};

export default AccountsList;

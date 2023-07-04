import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { accountTitleBackground, paper } from "../constants/colors";
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
  background: green;
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
`;
const Image = styled("img")`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
`;
const Accounts = () => {
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
        <Item direction="row" spacing={2}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&usqp=CAU"
            alt="user"
          />
          <Typography>Lenne Graham</Typography>
        </Item>
      </FlexBox>
    </AccountsRoot>
  );
};

export default Accounts;

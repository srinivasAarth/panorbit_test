import { Typography } from "@mui/material";
import { fontFamily } from "../../constants/TypoStyles";

const Text = ({ text, variant, sx, component }) => {
  return (
    <Typography
      variant={variant}
      sx={{ fontFamily: fontFamily, ...sx }}
      component={component}
    >
      {text}
    </Typography>
  );
};

export default Text;

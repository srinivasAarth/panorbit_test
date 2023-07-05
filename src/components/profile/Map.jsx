import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const MapRoot = styled(Box)`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;
const MapContainer = styled(Box)`
  height: 18rem;
  width: 100%;
  background: green;
`;
const LongLat = styled(Box)`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  height: 1.5rem;
`;
const Map = ({ lat, long }) => {
  return (
    <MapRoot>
      <MapContainer sx={{ borderRadius: 3 }}>Hello</MapContainer>
      <LongLat spacing={2}>
        <Typography sx={{ fontSize: 10 }} variant="subtitle1">
          Lat : 1232{lat}
        </Typography>
        <Typography sx={{ pl: 2, fontSize: 10 }} variant="subtitle1">
          Long : 65tr{long}
        </Typography>
      </LongLat>
    </MapRoot>
  );
};

export default Map;

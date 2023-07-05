import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { keyColor } from "../../constants/colors";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const MapRoot = styled(Box)`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;
const MapBox = styled(Box)`
  height: 18rem;
  width: 100%;
  border: 0.05rem solid ${keyColor};
  overflow: hidden;
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

L.Marker.prototype.options.icon = DefaultIcon;
const Map = ({ geo = {} }) => {
  return (
    <MapRoot>
      <MapBox sx={{ borderRadius: 3 }}>
        <MapContainer
          center={[geo?.lat, geo?.lng]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[geo?.lat, geo?.lng]}>
            {/* <Popup>A-5, sector 33, Noida</Popup> */}
          </Marker>
        </MapContainer>
      </MapBox>
      <LongLat spacing={2}>
        <Typography sx={{ fontSize: 10 }} variant="subtitle1">
          Lat : {geo?.lat}
        </Typography>
        <Typography sx={{ pl: 2, fontSize: 10 }} variant="subtitle1">
          Long : {geo?.lng}
        </Typography>
      </LongLat>
    </MapRoot>
  );
};

export default Map;

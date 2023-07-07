import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { keyColor } from "../../constants/colors";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Text from "../../libs/typo/Typography";

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
  height: 22rem;
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
  const { lat, lng } = geo;
  return (
    <MapRoot>
      <MapBox sx={{ borderRadius: 3, zIndex: 2 }}>
        <MapContainer
          center={[22.433609512751655, 78.4422937975444]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ zIndex: "5 !important" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[22.433609512751655, 78.4422937975444]}></Marker>
        </MapContainer>
      </MapBox>
      <LongLat spacing={2}>
        <Text sx={{ fontSize: 10 }} variant="subtitle1" text={`Lat : ${lat}`} />
        <Text
          sx={{ pl: 2, fontSize: 10 }}
          variant="subtitle1"
          text={`Long : ${lng}`}
        />
      </LongLat>
    </MapRoot>
  );
};

export default Map;

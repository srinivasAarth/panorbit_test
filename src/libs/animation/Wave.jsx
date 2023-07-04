import styled from "@emotion/styled";
import {
  gradientDark,
  gradientLight,
  gradientPrimary,
} from "../../constants/colors";
import "./Wave.css";

const SvgRoot = styled("svg")`
  position: absolute;
  top: 0;
  left: 0;
`;

const Wave = () => {
  return (
    <SvgRoot viewBox="0 0 1440 700">
      <defs>
        <linearGradient id="waveGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={gradientPrimary} />
          <stop offset="100%" stopColor={gradientDark} />
        </linearGradient>
        <linearGradient id="waveGradientLight" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={gradientPrimary} />
          <stop offset="100%" stopColor={gradientLight} />
        </linearGradient>
        <path
          id="sineWaveLight"
          fill="url(#waveGradientLight)"
          fillOpacity=".9"
          d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0"
        />
        <path
          id="sineWave"
          fill="url(#waveGradient)"
          fillOpacity=".9"
          d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0"
        />
      </defs>
      <use className="wave1" href="#sineWaveLight" />
      <use className="wave1" x="-100%" href="#sineWaveLight" />
      <use className="wave" href="#sineWave" />
      <use className="wave" x="-100%" href="#sineWave" />
    </SvgRoot>
  );
};

export default Wave;

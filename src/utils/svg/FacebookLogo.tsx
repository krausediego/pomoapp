import React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

export const FacebookLogo = ({ ...props }: SvgProps): React.JSX.Element => (
  <Svg viewBox="0 0 256 256" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#1877F2"
        d="M256 128C256 57.308 198.692 0 128 0 57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445Z"
      />
      <Path
        fill="#fff"
        d="m177.825 165 5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.91 128.91 0 0 0 128 256a128.91 128.91 0 0 0 20-1.555V165h29.825Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h256v256H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

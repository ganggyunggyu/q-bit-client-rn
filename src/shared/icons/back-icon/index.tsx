import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackIcon = () => {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none">
      <Path
        d="M20 8.5L10 18L20 27.5"
        stroke="#3899E8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 18H26.5"
        stroke="#3899E8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

import React from 'react';
import { SvgProps } from './types';

const LoadingIcon: React.FC<SvgProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20px"
      height="20px"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
    >
      <path
        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        transform="rotate(275.098 25 25)"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  );
};
export default LoadingIcon;

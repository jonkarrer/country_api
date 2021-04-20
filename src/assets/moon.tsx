import React from "react";

interface MoonProp {
  fill: string;
  width: number;
}

const Moon = ({ fill, width }: MoonProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}`}
    height={`${width}`}
    viewBox="0 0 375 374.999991"
    version="1.2"
  >
    <g id="surface1">
      <path
        style={{ stroke: "none", fill: `${fill}` }}
        d="M 93.691406 95.640625 C 93.691406 60.835938 102.765625 28.144531 118.679688 -0.191406 C 50.804688 30.695312 3.605469 99.058594 3.605469 178.441406 C 3.605469 286.785156 91.527344 374.625 199.988281 374.625 C 273.609375 374.625 337.757812 334.15625 371.386719 274.277344 C 346.609375 285.550781 319.078125 291.835938 290.070312 291.835938 C 181.613281 291.824219 93.691406 203.984375 93.691406 95.640625 Z M 93.691406 95.640625 "
      />
    </g>
  </svg>
);

export default Moon;

import React from "react";

const arrow = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15px"
        height="20px"
        viewBox="0 0 37.5 30.000001"
        version="1.2"
      >
        <defs>
          <clipPath id="clip1">
            <path d="M 0.363281 5.515625 L 36.652344 5.515625 L 36.652344 23.902344 L 0.363281 23.902344 Z M 0.363281 5.515625 " />
          </clipPath>
        </defs>
        <g id="surface1">
          <g clip-path="url(#clip1)" clip-rule="nonzero">
            <path
              className="fill-current w-5"
              d="M 11.1875 7.710938 L 5.710938 13.183594 L 37.136719 13.183594 L 37.136719 16.238281 L 5.710938 16.238281 L 11.183594 21.710938 L 9.027344 23.867188 L 0.945312 15.789062 C 0.351562 15.191406 0.351562 14.226562 0.945312 13.628906 L 9.027344 5.550781 Z M 11.1875 7.710938 "
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default arrow;

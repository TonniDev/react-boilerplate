import React from 'react';

export const loading = ({fillColor}) => (
  <svg viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke={fillColor} strokeWidth="3px" fillRule="evenodd" strokeLinejoin="round">
      <path fill="none" d="M14,26 C20.627417,26 26,20.627417 26,14 C26,7.45771278 20.7645532,2.13822969 14.2547595,2.00265064 C14.1700525,2.00088646 14.0851298,2 14,2 C7.372583,2 2,7.372583 2,14" />
    </g>
  </svg>
);

// export const loading = ({fillColor}) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//     <circle cx="50" cy="50" r="30" stroke="none" fill="none" stroke="none" stroke-width="10"></circle>
//     <circle cx="50" cy="50" fill="none" r="30" stroke={fillColor} stroke-width="10" stroke-linecap="square" transform="rotate(59.8104 50 50)">
//       <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1" dur="2.0s" begin="0s" repeatCount="indefinite"></animateTransform>
//       <animate attributeName="stroke-dasharray" calcMode="linear" values="1.8849555921538759 186.6106036232337;141.3716694115407 47.12388980384688;1.8849555921538759 186.6106036232337" keyTimes="0;0.5;1" dur="2s" begin="0s" repeatCount="indefinite"></animate>
//     </circle>
//   </svg>
// );

export default loading;

import { FC } from 'react';
export interface ErrorIconProps {
  width?: number;
  height?: number;
}
const ErrorIcon: FC<ErrorIconProps> = (props) => {
  return (
    <svg
      width={props.width || '15'}
      height={props.height || '15'}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.40024 2.40909L1.13653 11.1964C1.02801 11.3844 0.970583 11.5975 0.969976 11.8145C0.969368 12.0315 1.0256 12.2449 1.13307 12.4334C1.24054 12.622 1.39551 12.7791 1.58255 12.8892C1.7696 12.9992 1.9822 13.0584 2.19922 13.0608H12.7266C12.9436 13.0584 13.1562 12.9992 13.3433 12.8892C13.5303 12.7791 13.6853 12.622 13.7928 12.4334C13.9002 12.2449 13.9565 12.0315 13.9559 11.8145C13.9553 11.5975 13.8978 11.3844 13.7893 11.1964L8.52561 2.40909C8.41482 2.22645 8.25883 2.07544 8.07269 1.97065C7.88655 1.86585 7.67654 1.81079 7.46292 1.81079C7.24931 1.81079 7.0393 1.86585 6.85315 1.97065C6.66701 2.07544 6.51102 2.22645 6.40024 2.40909V2.40909Z"
        stroke="#E64B5F"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.5 5.625V8.125" stroke="#E64B5F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10.625H7.50625" stroke="#E64B5F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ErrorIcon;

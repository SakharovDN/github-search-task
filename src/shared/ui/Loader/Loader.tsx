import { SVGProps } from 'react';

import clsx from 'clsx';

import styles from './Loader.module.scss';

interface LoaderProps extends Omit<SVGProps<SVGSVGElement>, 'height' | 'viewBox' | 'width' | 'xmlns'> {
  size?: number;
  centered?: boolean;
}

export const Loader = ({ className, size = 24, centered = false, ...props }: LoaderProps) => {
  return (
    <svg
      className={clsx(styles.loader, className, { [styles.centered]: centered })}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g>
        <circle cx="12" cy="12" fill="none" r="9.5" strokeLinecap="round" strokeWidth="2">
          <animate
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            attributeName="stroke-dasharray"
            calcMode="spline"
            dur="1.5s"
            repeatCount="indefinite"
            values="0 150;42 150;42 150;42 150"
          />
          <animate
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="1.5s"
            repeatCount="indefinite"
            values="0;-16;-59;-59"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          dur="2s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
    </svg>
  );
};

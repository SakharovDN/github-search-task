import {
  ButtonHTMLAttributes,
  cloneElement,
  DetailedHTMLProps,
  JSXElementConstructor,
  ReactElement,
  SVGProps,
} from 'react';

import clsx from 'clsx';

import { Loader } from '../Loader/Loader';

import styles from './Button.module.scss';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  block?: boolean;
  loading?: boolean;
  iconPosition?: IconPosition;
  appearance?: ButtonAppearance;
  icon?: ReactElement<SVGProps<SVGSVGElement>, JSXElementConstructor<SVGProps<SVGSVGElement>> | string>;
}

type ButtonAppearance = 'accent' | 'primary';
type IconPosition = 'end' | 'start';

export const Button = ({
  appearance = 'primary',
  iconPosition = 'start',
  className,
  children,
  disabled,
  loading,
  block,
  icon,
  ...props
}: ButtonProps) => {
  const buttonStyles = clsx(
    styles.button,
    styles[appearance],
    block && styles.block,
    loading && styles.loading,
    disabled && styles.disabled,
    iconPosition === 'end' && styles.rtl,
    className
  );

  const iconClone = icon ? cloneElement(icon, { className: clsx(styles.icon, icon.props.className) }) : null;

  return (
    <button className={buttonStyles} disabled={disabled || loading} {...props}>
      {loading && <Loader centered />}
      {iconClone}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};

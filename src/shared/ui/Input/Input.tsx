import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './Input.module.scss';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = ({ className, type, ...props }: InputProps) => {
  return <input {...props} className={clsx(styles.input, className)} />;
};

import React, { CSSProperties } from 'react';
import { InputStyled } from './styled';

interface IInput {
  style?: CSSProperties;
  col?: number;
  Icon?: any;
  label: string;
  name: string;
  value: any;
  onChange: any;
  min: number;
}

export default function Input({ style, col = 12, label, name, Icon, value, onChange, min }: IInput) {
  return (
    <InputStyled col={col} hasIcon={Icon ? true : false}>
      {Icon && <Icon />}
      <label>{label}:</label>
      <input type="number" name={name} style={style} value={value} onChange={onChange} min={min} />
    </InputStyled>
  );
}

import React from 'react';
import { ButtonStyled } from './styled';

interface IProps {
  title: string;
}

export default function Button({ title }: IProps) {
  return <ButtonStyled>{title}</ButtonStyled>;
}

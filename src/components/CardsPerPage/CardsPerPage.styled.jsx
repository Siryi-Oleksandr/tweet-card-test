import styled from 'styled-components';
import { pallete } from 'helpers/variables';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: (20/ 16);
`;

export const Select = styled.select`
  padding: 8px;
  border: 2px solid ${pallete.accent};
  border-radius: 8px;
  outline: none;
`;

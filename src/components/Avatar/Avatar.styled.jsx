import styled from 'styled-components';
import { pallete } from '../../helpers/variables';

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid ${pallete.priority};
  overflow: hidden;

  background: transparent;
`;

export const Canvas = styled.canvas`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  background: transparent;
`;

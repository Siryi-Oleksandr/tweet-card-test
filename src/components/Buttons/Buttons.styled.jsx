import styled from 'styled-components';
import { pallete, animation } from '../../helpers/variables';

export const Btn = styled.button`
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  text-align: center;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${pallete.priority};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: ${pallete.black};
  cursor: pointer;

  transition: box-shadow ${animation}, transform ${animation};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.03);
  }
`;

export const BtnGoBackStyled = styled.button`
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: transparent;
  outline: none;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: (20/ 16);

  color: ${pallete.black};
  cursor: pointer;

  transition: transform ${animation};

  &:hover {
    transform: scale(1.05);
  }
`;

export const BtnLoadMoreStyled = styled.button`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 28px;
  display: block;
  width: 196px;
  height: 50px;

  text-align: center;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${pallete.priority};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  transform: scale(1);

  color: ${pallete.black};
  cursor: pointer;

  transition: box-shadow ${animation}, transform ${animation},
    background-color ${animation};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.03);
  }

  &:active {
    background-color: ${pallete.accent};
  }
`;

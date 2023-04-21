import styled from 'styled-components';

export const Btn = styled.button`
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  text-align: center;
  border: none;
  outline: none;
  border-radius: 10px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;
  cursor: pointer;

  transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.03);
  }
`;

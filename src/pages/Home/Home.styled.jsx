import styled from 'styled-components';
import bgImg from '../../images/friends.jpg';
import { pallete } from '../../helpers/variables';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 700px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  background-image: url(${bgImg});

  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export const HomeTitle = styled.h1`
  max-width: 600px;
  font-family: 'Montserrat';
  /* font-style: normal;
  font-weight: 600; */
  font-size: 28px;
  line-height: calc(40 / 28);
`;

export const HomeDescribe = styled.p`
  max-width: 600px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(30 / 16);
`;

export const LinkStyled = styled(Link)`
  color: blue;
  text-decoration: underline;
`;

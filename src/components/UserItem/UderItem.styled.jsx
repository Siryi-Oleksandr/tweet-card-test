import styled from 'styled-components';
import bgImg from '../../images/bg-img.png';
import { pallete } from '../../helpers/variables';

export const CardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80px;
  height: 80px;
  background-color: transparent;
`;

export const InfoSection = styled.section`
  position: relative;
  width: 100%;
  height: 246px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardHeader = styled.div`
  padding: 20px;
  width: 100%;
  height: 214px;

  background-image: url(${bgImg});

  background-size: 308px 168px;
  background-position: 50% 50%;
  background-repeat: no-repeat;

`;

export const Line = styled.hr`
  padding: 0;
  margin: 0;
  width: 380px;
  height: 8px;

  background: ${pallete.priority};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserName = styled.p`
  margin-top: 42px;
  max-width: 340px;
  height: 24px;

  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;

  color: ${pallete.priority};
`;

export const Tweet = styled.p`
  margin-top: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;

  color: ${pallete.priority};
`;

export const Followers = styled.p`
  margin-top: 16px;
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;

  color: ${pallete.priority};
`;

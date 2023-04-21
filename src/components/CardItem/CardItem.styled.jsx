import styled from 'styled-components';
import bgImg from '../../images/bg-img.png';

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

export const InfoSection = styled.section`
  width: 100%;
  height: 246px;

  border: 1px solid red;
`;

export const CardHeader = styled.div`
  padding: 20px;
  width: 100%;
  height: 214px;

  background-image: url(${bgImg});

  background-size: 308px 168px;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  /* border: 2px solid orange;
  background-color: transparent; */
`;

export const Line = styled.hr`
  padding: 0;
  margin: 0;
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

import React from 'react';
import { Circle } from './Avatar.styled';
// import avatar from '../../images/avatar.png';

function Avatar({ avatar, userName }) {
  return (
    <Circle>
      <img src={avatar} alt={userName} />
    </Circle>
  );
}

export default Avatar;

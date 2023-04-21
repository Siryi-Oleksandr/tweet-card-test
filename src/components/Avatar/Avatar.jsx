import React from 'react';
import { Circle } from './Avatar.styled';
import avatar from '../../images/avatar.png';

function Avatar() {
  return (
    <Circle>
      <img src={avatar} alt="user avatar" />
    </Circle>
  );
}

export default Avatar;

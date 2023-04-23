import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from './Avatar.styled';

function Avatar({ avatar, userName }) {
  return (
    <Circle>
      <img src={avatar} alt={userName} />
    </Circle>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Avatar;

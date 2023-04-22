import React, { useState } from 'react';
import {
  AvatarWrapper,
  CardHeader,
  CardWrapper,
  Followers,
  InfoSection,
  Line,
  Tweet,
} from './CardItem.styled';

import Avatar from 'components/Avatar';
import Logo from 'components/Logo';
import Button from 'components/Button';
import { Btn } from 'components/Button/Button.styled';

function CardItem() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(prevState => !prevState);
  };

  return (
    <CardWrapper>
      <CardHeader>
        <Logo />
      </CardHeader>

      <InfoSection>
        <Line />
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>
        <Tweet>777 Tweets</Tweet>
        <Followers>100,400 Followers</Followers>
        {isFollowing ? (
          <Btn
            type="button"
            style={{ backgroundColor: '#5CD3A8' }}
            onClick={toggleFollow}
          >
            Following
          </Btn>
        ) : (
          <Btn type="button" onClick={toggleFollow}>
            Follow
          </Btn>
        )}
      </InfoSection>
    </CardWrapper>
  );
}

export default CardItem;

import React from 'react';
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
import Button from 'components/Button/Button';

function CardItem() {
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
        <Followers>100,500 Followers</Followers>
        <Button text={'Follow'} />
      </InfoSection>
    </CardWrapper>
  );
}

export default CardItem;

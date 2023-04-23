import React, { useState } from 'react';
import {
  AvatarWrapper,
  CardHeader,
  CardWrapper,
  Followers,
  InfoSection,
  Line,
  Tweet,
} from './UderItem.styled';
import { pallete } from '../../helpers/variables';

import Avatar from 'components/Avatar';
import Logo from 'components/Logo';
import { Btn } from 'components/Button/Button.styled';

function UserItem({ userInfo }) {
  // const [isFollowing, setIsFollowing] = useState(false);

  const { avatar, followers, following, id, tweets, user } = userInfo;

  const toggleFollow = () => {
    console.log('change follow func');
  };

  return (
    <CardWrapper>
      <CardHeader>
        <Logo />
      </CardHeader>

      <InfoSection>
        <Line />
        <AvatarWrapper>
          <Avatar avatar={avatar} userName={user} />
        </AvatarWrapper>
        <Tweet>{tweets} Tweets</Tweet>
        <Followers>{followers} Followers</Followers>
        {following ? (
          <Btn
            type="button"
            style={{ backgroundColor: pallete.accent }}
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

export default UserItem;

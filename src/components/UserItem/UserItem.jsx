import React, { useState } from 'react';
import {
  AvatarWrapper,
  CardHeader,
  CardWrapper,
  Followers,
  InfoSection,
  Line,
  Tweet,
  UserName,
} from './UderItem.styled';
import { pallete } from '../../helpers/variables';
import { formatFollowers } from '../../helpers/formatFollowers';
import * as API from '../../services/api';

import Avatar from 'components/Avatar';
import Logo from 'components/Logo';
import { Btn } from 'components/Button/Button.styled';

function UserItem({ userInfo }) {
  const { avatar, id, followers, following, tweets, user } = userInfo;
  const [followersState, setFollowersState] = useState(followers);
  const [followingState, setFollowingState] = useState(following);

  const subscribe = () => {
    setFollowersState(prev => prev + 1);
    setFollowingState(prev => !prev);
    API.editUser({ id, followers: followers + 1, following: true });
  };

  const unsubscribe = () => {
    setFollowersState(prev => prev - 1);
    setFollowingState(prev => !prev);
    API.editUser({ id, followers: followers - 1, following: false });
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
        <UserName>{user}</UserName>
        <Tweet>{tweets} Tweets</Tweet>
        <Followers>{formatFollowers(followersState)} Followers</Followers>
        {followingState ? (
          <Btn
            type="button"
            style={{ backgroundColor: pallete.accent }}
            onClick={unsubscribe}
          >
            Following
          </Btn>
        ) : (
          <Btn type="button" onClick={subscribe}>
            Follow
          </Btn>
        )}
      </InfoSection>
    </CardWrapper>
  );
}

export default UserItem;

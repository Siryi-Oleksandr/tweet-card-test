import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import { Btn } from 'components/Buttons/Buttons.styled';

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

UserItem.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    tweets: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;

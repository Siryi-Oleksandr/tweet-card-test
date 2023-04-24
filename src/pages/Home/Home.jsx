import React from 'react';
import {
  HomeDescribe,
  HomeTitle,
  HomeWrapper,
  LinkStyled,
} from './Home.styled';

function Home() {
  return (
    <HomeWrapper>
      <HomeTitle>Welcome to the Tweets world</HomeTitle>
      <HomeDescribe>
        Wellcome to application when you can find friends and follow them. With
        us, you will be aware of all important events in the circle of your
        friends and will not miss any of them. Go to{' '}
        <LinkStyled to="/tweets">Tweets</LinkStyled> and try how it's cool!
      </HomeDescribe>
    </HomeWrapper>
  );
}

export default Home;

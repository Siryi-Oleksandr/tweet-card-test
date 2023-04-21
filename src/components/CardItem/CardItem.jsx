import React from 'react';
import { CardHeader, CardWrapper, InfoSection, Line } from './CardItem.styled';

function CardItem() {
  return (
    <CardWrapper>
      <CardHeader></CardHeader>

      <InfoSection>
        <Line />
      </InfoSection>
    </CardWrapper>
  );
}

export default CardItem;

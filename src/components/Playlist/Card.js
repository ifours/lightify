import React from 'react';

import { Card, CardHero, CardBody, CardFooter, CardFooterItem } from 'components/Card';
import { Title, Text } from 'components/Typography';

const PlaylistCard = ({ playlist, disabled }) => {
  const { images, name, owner: { id: userId }, type, tracks: { total } } = playlist;
  const { url } = images[0];

  return (
    <Card disabled={disabled}>
      <CardHero src={url} />
      <CardBody>
        <Title>{name}</Title>
        <Text>by {userId}</Text>
      </CardBody>
      <CardFooter>
        <CardFooterItem main>{type}</CardFooterItem>
        <CardFooterItem>{total} tracks</CardFooterItem>
      </CardFooter>
    </Card>
  );
}

export default PlaylistCard;

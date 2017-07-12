import React, { Component } from 'react';

import Card, { CardHero, CardBody, CardFooter, CardFooterItem } from 'components/Card';
import { Title, Text } from 'components/Typography';

export default class PlaylistCard  extends Component {
  render() {
    const { playlist, disabled } = this.props;
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
    )
  }
}

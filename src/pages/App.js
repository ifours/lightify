import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMedium from 'react-icons/lib/fa/medium';

import Main from 'components/Main';
import Footer from 'components/Footer';
import MainSection from 'components/MainSection';
import { NavigationBar, NavigationList, NavigationItem } from 'components/Navigation';
import { SocialList, SocialLink } from 'components/Social';

import useSession from 'connects/session';

import Playlist from './Playlist';
import Featured from './Featured';
import Landing from './Landing';
import NoMatch from './NoMatch';
import Fake from './Fake';

export default useSession(({ loggedIn, ...rest }) => {
  if (!loggedIn) return <Landing {...rest}/>;

  return (
    <Main>
      <NavigationBar>
        <NavigationList>
          <NavigationItem to="/featured">Featured</NavigationItem>
          <NavigationItem to="/genres">Genres & Moods</NavigationItem>
          <NavigationItem to="/releases">New Releases</NavigationItem>
          <NavigationItem to="/discover">Discover</NavigationItem>
        </NavigationList>
      </NavigationBar>
      <MainSection>
        <Switch>
          <Route path="/" exact component={Featured}/>
          <Route path="/featured" component={Featured}/>
          <Route path="/genres" component={Fake}/>
          <Route path="/releases" component={Fake}/>
          <Route path="/discover" component={Fake}/>
          <Route path={`/users/:userId/playlists/:playlistId`} component={Playlist}/>
          <Route component={NoMatch} />
        </Switch>
      </MainSection>
      <Footer>
        <SocialList>
          <SocialLink icon={FaGithub} src="https://github.com/IFours">Github</SocialLink>
          <SocialLink icon={FaTwitter} src="https://twitter.com/_ifours_">Twitter</SocialLink>
          <SocialLink icon={FaMedium} src="https://medium.com/@ifours">Medium</SocialLink>
        </SocialList>
      </Footer>
    </Main>
  );
});

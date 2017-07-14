import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMedium from 'react-icons/lib/fa/medium';

import MainSection from 'components/MainSection';
import Navigation from 'components/Navigation';
import NavLogo from 'components/NavLogo';
import NavList from 'components/NavList';
import NavItem from 'components/NavItem';
import Footer from 'components/Footer';
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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Navigation>
        <NavLogo>Lightify</NavLogo>
        <NavList>
          <Link to="/featured"><NavItem>Featured</NavItem></Link>
          <Link to="/genres"><NavItem>Genres & Moods</NavItem></Link>
          <Link to="/releases"><NavItem>New Releases</NavItem></Link>
          <Link to="/discover"><NavItem>Discover</NavItem></Link>
        </NavList>
      </Navigation>
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
    </div>
  );
});

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainSection from 'components/MainSection';
import Navigation from 'components/Navigation';
import NavLogo from 'components/NavLogo';
import NavList from 'components/NavList';
import NavItem from 'components/NavItem';
import Footer from 'components/Footer';

import useResources from 'connects/resources';


import Playlist from './Playlist';
import Home from './Home';
import Landing from './Landing';

class App extends Component {

  render() {
    const { match: { url }, loggedIn } = this.props;

    if (!loggedIn) return <Landing />;

    return (
      <div>
        <Navigation>
          <NavLogo>Lightify</NavLogo>
          <NavList>
            <NavItem>Featured</NavItem>
            <NavItem>Genres & Moods</NavItem>
            <NavItem>New Releases</NavItem>
            <NavItem>Discover</NavItem>
          </NavList>
        </Navigation>
        <MainSection>
          <Route exact path={`${url}`} component={Home}/>
          <Route exact path={`${url}users/:userId/playlists/:playlistId`} component={Playlist}/>
        </MainSection>
        <Footer />
      </div>
    );
  }
}

export default useResources(App);

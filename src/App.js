import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainSection from 'components/MainSection';
import Navigation from 'components/Navigation';
import NavLogo from 'components/NavLogo';
import NavList from 'components/NavList';
import NavItem from 'components/NavItem';

import Footer from 'components/Footer';

import useResources from 'connects/resources';

import Repository from 'services/Repository';

import Playlist from './Playlist';
import Home from './Home';

class App extends Component {

  componentDidMount() {
    const { loggedIn, fetchFeaturedPlaylists } = this.props;

    if (loggedIn) {
      fetchFeaturedPlaylists();
    } else {
      Repository.authorize();
    }
  }

  render() {
    const { match: { url } } = this.props;

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
          <Route exact path="/" component={Home}/>
          <Route exact path={`${url}playlists/:id`} component={Playlist}/>
        </MainSection>
        <Footer />
      </div>
    );
  }
}

export default useResources(App);

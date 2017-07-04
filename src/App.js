import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Navigation from './components/Navigation';
import NavLogo from './components/NavLogo';
import NavList from './components/NavList';
import NavItem from './components/NavItem';

import Container from './components/Container';

import CardList from './components/CardList';
import Card, { CardHero, CardBody, CardFooter, CardFooterItem, CardAvatar } from './components/Card';

import { Heading, Title, Text } from './components/Typography';
import { H3 } from './components/Primitives';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation>
          <NavLogo>Design</NavLogo>
          <NavList>
            <NavItem>Articles</NavItem>
            <NavItem>Videos</NavItem>
            <NavItem>Tools & Resources</NavItem>
            <NavItem>Careers</NavItem>
          </NavList>
        </Navigation>
        <MainSection>
          <Header>
            <Heading>What’s on our mind?</Heading>
            <H3>Collection of articles, videos, and resources made by designers at Facebook.</H3>
          </Header>
          <Container>
            <CardList>
              <Card>
                <CardHero src="http://facebook.design/public/images/card_resource_soundkit@2x.png">
                </CardHero>
                <CardBody>
                  <Title>Sound Kit for Prototypes</Title>
                  <Text>A collection of interaction sounds for prototypes.</Text>
                </CardBody>
                <CardFooter>
                  <CardFooterItem main>Resources</CardFooterItem>
                  <CardFooterItem>Tools</CardFooterItem>
                </CardFooter>
              </Card>

              <Card artical>
                <CardBody>
                  <CardAvatar src="http://facebook.design/public/images/avatars/will.jpg"/>
                  <Title>How to Enhance Mobile Interactions with Sound Design</Title>
                  <Text>When I talk to people about sound design and the role it plays at Facebook, many people seem puzzled at first. “Sound? Facebook?”...</Text>
                </CardBody>
                <CardHero src="http://facebook.design/public/images/sound-design-and-enhancing-mobile-interactions-at-facebook.jpg">
                </CardHero>
                <CardFooter>
                  <CardFooterItem main>Article</CardFooterItem>
                  <CardFooterItem>Case studios</CardFooterItem>
                </CardFooter>
              </Card>

              <Card>
                <CardHero src="http://facebook.design/public/images/card_resource_messengerkit@2x.png">
                </CardHero>
                <CardBody>
                  <Title>Messenger Platform Design Kit</Title>
                  <Text>Sketch templates for native experiences.</Text>
                </CardBody>
                <CardFooter>
                  <CardFooterItem main>Resources</CardFooterItem>
                  <CardFooterItem>Tools</CardFooterItem>
                </CardFooter>
              </Card>

              <Card artical>
                <CardBody>
                  <CardAvatar src="http://facebook.design/public/images/avatars/jason.jpeg"/>
                  <Title>Questions to Ask as a New Designer on the Team</Title>
                  <Text>Last summer I switched teams at Facebook. My first project seemed simple enough: redesign the sign up flow for Facebook Lite, an app for low-end Android phones.</Text>
                </CardBody>
                <CardHero src="http://facebook.design/public/images/questions-to-ask-as-a-new-designer-on-the-team.png">
                </CardHero>
                <CardFooter>
                  <CardFooterItem main>Article</CardFooterItem>
                  <CardFooterItem>Case studios</CardFooterItem>
                </CardFooter>
              </Card>

              <Card artical>
                <CardBody>
                  <CardAvatar src="http://facebook.design/public/images/avatars/andrewl.png"/>
                  <Title>Tips for Becoming a Design Leader</Title>
                  <Text>One of the things I love about working at Facebook is the emphasis we put on personal growth and the objectives people have for their careers...</Text>
                </CardBody>
                <CardHero src="http://facebook.design/public/images/tips-for-becoming-a-design-leader.png">
                </CardHero>
                <CardFooter>
                  <CardFooterItem main>Article</CardFooterItem>
                  <CardFooterItem>Case studios</CardFooterItem>
                </CardFooter>
              </Card>

              <Card artical>
                <CardBody>
                  <CardAvatar src="http://facebook.design/public/images/avatars/charlie.jpg"/>
                  <Title>The Current State of Adaptive Design</Title>
                  <Text>A survey of 2016's most popular design tools to see how they compare for adaptive layout features.</Text>
                </CardBody>
                <CardHero src="http://facebook.design/public/images/the-current-state-of-adaptive-design.jpg">
                </CardHero>
                <CardFooter>
                  <CardFooterItem main>Article</CardFooterItem>
                  <CardFooterItem>Case studios</CardFooterItem>
                </CardFooter>
              </Card>

              <Card artical>
                <CardBody>
                  <CardAvatar src="http://facebook.design/public/images/avatars/tanner.jpg"/>
                  <Title>Inside Another Design Critique with Facebook</Title>
                  <Text>Get a look into a critical part of our product process: the design critique.</Text>
                </CardBody>
                <CardHero src="http://facebook.design/public/images/inside-a-design-critique-with-facebook.png">
                </CardHero>
                <CardFooter>
                  <CardFooterItem main>Article</CardFooterItem>
                  <CardFooterItem>Case studios</CardFooterItem>
                </CardFooter>
              </Card>

              <Card>
                <CardHero src="http://facebook.design/public/images/studio.png">
                </CardHero>
                <CardBody>
                  <Title>Origami Studio</Title>
                  <Text>Explore, iterate, and test your ideas. A new tool for designing modern interfaces, built and used by designers at Facebook.</Text>
                </CardBody>
                <CardFooter>
                  <CardFooterItem main>Resources</CardFooterItem>
                  <CardFooterItem>Tools</CardFooterItem>
                </CardFooter>
              </Card>


              <Card>
                <CardHero src="http://facebook.design/public/images/ios10-card.png">
                </CardHero>
                <CardBody>
                  <Title>iOS 10 GUI (iPhone)</Title>
                  <Text>Sketch, Photoshop, Figma, XD and Craft templates of GUI elements found in the public release of iOS 10.</Text>
                </CardBody>
                <CardFooter>
                  <CardFooterItem main>Resources</CardFooterItem>
                  <CardFooterItem>Tools</CardFooterItem>
                </CardFooter>
              </Card>

            </CardList>
          </Container>
        </MainSection>
      </div>
    );
  }
}

export default App;

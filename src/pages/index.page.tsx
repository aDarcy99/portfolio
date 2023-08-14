import React from 'react';
// Types
import type { NextPage } from 'next';
// Components
import Head from 'next/head';
import Button from '../components/reusable/button/button';
import Input from '../components/reusable/input/input';
import Container from '../components/reusable/container/container';
import Header from '../components/header/header';
import Project from '../components/project/project';
// Constants
import builtWithTechologies from '../constants/builtWithTechnologies';
// Assets
// Styles
import classes from './index.module.scss';
import Divider from '../components/reusable/divider/divider';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My place</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container>
        <h2>Personal Projects</h2>
        <Divider />
        <Project
          project={{
            title: 'Your Chances',
            description: `One of my first projects. Using data from the CIA World Factbook, 
            it gives you the chances of being born in a certain country. It was originally built in Vanilla JS, CSS and HTML. 
            But after becoming more experienced I remade it with React, and replaced CSS with Styled Componentss. 
            Then after a lot of time using React-JSS I made the switch from styled components to React-JSS and used my own theme component Themerig`,
            links: {
              demo: '/',
              github: '/',
            },
            builtWithTechnologies: [builtWithTechologies['javascript']],
          }}
        />
        <Project
          project={{
            title: 'Simple Typing Test',
            description: `After using React for a while, I wanted to create something with vanilla Javascript again, so I created a simple typing test. 
            It made me appreciate how easy it is to build web apps with React.`,
            links: {
              demo: '/',
              github: '/',
            },
            builtWithTechnologies: [builtWithTechologies['javascript'], builtWithTechologies['css'], builtWithTechologies['html']],
          }}
        />
        <Project
          project={{
            title: 'Portfolio',
            description: `This website, which went through a lot of revisions to get where it is now. 
            Sadly design has never come as easily to me as other aspects of web development, even though I have a passion for it. 
            Although this has led me to wanting to find systems to define design and started my research into Design Systems.`,
            links: {
              demo: '/',
              github: '/',
            },
            builtWithTechnologies: [
              builtWithTechologies['javascript'],
              builtWithTechologies['react'],
              builtWithTechologies['nextJs'],
              builtWithTechologies['jss'],
            ],
          }}
        />
      </Container>
      <Container>
        <h2>My stack</h2>
      </Container>
      <Container>
        <h2>About me</h2>
      </Container>
      <Container>
        <h2>Get in Touch</h2>
      </Container>
      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
};

export default Home;

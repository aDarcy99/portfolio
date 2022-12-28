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
            title: 'Test Project',
            description: 'This is the description',
            links: {
              demo: '/',
              github: '/',
            },
            builtWithTechnologies: [builtWithTechologies['babel']],
          }}
        />
      </Container>
    </>
  );
};

export default Home;

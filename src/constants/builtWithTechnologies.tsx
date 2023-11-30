import React from 'react';
import DatabaseIcon from '../static/icons/technologies/database';
// Assets
import {
  GithubIcon,
  BabelIcon,
  CssIcon,
  EjsIcon,
  ExpressIcon,
  HtmlIcon,
  JavascriptIcon,
  JssIcon,
  MaterialUiIcon,
  MongoIcon,
  NextJsIcon,
  NodeJsIcon,
  NoneIcon,
  NpmIcon,
  PhotoshopIcon,
  PythonIcon,
  ReactIcon,
  StyledComponentsIcon,
  WebpackIcon,
} from '../static/icons/technologies/index';
import SassIcon from '../static/icons/technologies/sassIcon';
import SocketIcon from '../static/icons/technologies/socketIcon';
import TailwindIcon from '../static/icons/technologies/tailwindIcon';
import TypescriptIcon from '../static/icons/technologies/typescriptIcon';
import FigmaIcon from '../static/icons/technologies/typescriptIcon copy';

const builtWithTechnologies = {
  html: { label: 'HTML', icon: <HtmlIcon /> },
  css: { label: 'CSS', icon: <CssIcon /> },
  javascript: { label: 'Javascript', icon: <JavascriptIcon /> },
  typescript: { label: 'Typescript', icon: <TypescriptIcon /> },
  react: { label: 'React', icon: <ReactIcon /> },
  nextJs: { label: 'NextJs', icon: <NextJsIcon /> },
  babel: { label: 'Babel', icon: <BabelIcon /> },
  webpack: { label: 'Webpack', icon: <WebpackIcon /> },
  jss: { label: 'JSS', icon: <JssIcon /> },
  github: { label: 'Github', icon: <GithubIcon /> },
  styledComponents: { label: 'Styled Components', icon: <StyledComponentsIcon /> },
  materialUi: { label: 'Material UI', icon: <MaterialUiIcon /> },
  nodeJs: { label: 'NodeJs', icon: <NodeJsIcon /> },
  express: { label: 'Express', icon: <NoneIcon /> },
  ejs: { label: 'EJS', icon: <EjsIcon /> },
  monogDB: { label: 'MongoDB', icon: <MongoIcon /> },
  SQL: { label: 'SQL', icon: <DatabaseIcon /> },
  socket: { label: 'Socket.io', icon: <SocketIcon /> },
  sass: { label: 'Sass', icon: <SassIcon /> },
  tailwind: { label: 'Tailwind', icon: <TailwindIcon /> },
  // mySQL: { label: 'MySQL', icon: <DatabaseIcon /> },
  // PostgreSQL: { label: 'PostgreSQL', icon: <DatabaseIcon /> },
  python: { label: 'Python', icon: <PythonIcon /> },
  figma: { label: 'Figma', icon: <FigmaIcon /> },
  // photoshop: { label: 'Photoshop', icon: <PhotoshopIcon /> },
};

export default builtWithTechnologies;

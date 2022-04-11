import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <AboutMe />
      <Projects />
      <Contacts />
    </Fragment>
  );
}

export default App;

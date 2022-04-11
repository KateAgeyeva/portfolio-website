import AboutMe from './components/desktop/AboutMe';
import Contacts from './components/desktop/Contacts';
import Projects from './components/desktop/Projects';

import AboutMeMob from './components/mobile/AboutMeMob';
import ProjectsMob from './components/mobile/ProjectsMob';
import ContactsMob from './components/mobile/ContactsMob';

import { Fragment } from 'react';
import { Desktop, Mobile } from '../src/components/ui/MediaQuery';

function App() {
  return (
    <Fragment>
      <Desktop>
        <AboutMe />
        <Projects />
        <Contacts />
      </Desktop>
      <Mobile>
        <AboutMeMob />
        <ProjectsMob />
        <ContactsMob />
      </Mobile>
    </Fragment>
  );
}

export default App;

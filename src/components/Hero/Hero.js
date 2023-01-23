import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Unleash the Power of <br />
        Blockchain Technology 🚀

        </SectionTitle>
        <SectionText>
        We are a leading provider of innovative blockchain-based solutions for businesses and organizations. Our team of experts is dedicated to helping you leverage the power of blockchain technology to streamline your operations, improve efficiency, and drive growth.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.pabloacebedo.com/'}>Contact</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        From Volatility to Stability,
         <br />
         Bidirectional Tokenization Model BTM.

        </SectionTitle>
        <SectionText>
        Unveils a transformative approach to cryptocurrency. BTMs are brand-aligned assets that use a unique mathematical model to provide stable prices and continuous liquidity. This innovative model eliminates the risks of traditional crypto exchanges, offering a more reliable, bidirectional trading environment that empowers both value creators and their communities.
        </SectionText>
       
        <a href="https://www.youtube.com/watch?v=QVR21VWNUk0m" target="_blank" rel="noopener noreferrer">
          <Button>Video</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

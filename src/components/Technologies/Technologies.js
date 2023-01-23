import React from 'react';
import {SiArchicad } from 'react-icons/si';
import { FaAnchor, FaSnapchatGhost } from "react-icons/fa";
import { SiAirplayaudio } from "react-icons/si";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  Token creation is the process of creating and issuing digital tokens on a blockchain network. These tokens can be used for a variety of purposes, such as representing a digital asset, a utility within a decentralized application, or as a form of currency.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <FaAnchor size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Framework</ListTitle>
        <ListParagraph>
          Anchor <br />
          For quickly building secure Solana programs.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <FaSnapchatGhost size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Wallet</ListTitle>
        <ListParagraph>
          Phantom <br />
          Safe and easy to store, send, receive, collect, and swap tokens on the Solana blockchain.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <SiArchicad size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>AMM</ListTitle>
        <ListParagraph>
        Liquidity Bootstrapping <br />
        Curve - LBC
        </ListParagraph>
      </ListContainer>
    </ListItem>
   
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;

import React from 'react';
import { BiAtom, BiLogoProductHunt } from 'react-icons/bi';
import { FaAnchor, FaSnapchatGhost } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

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
    <a href="https://solana.com/" rel='noopener' target='_blank' >
    <ListItem>
      <picture>
        <FaAnchor size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Framework</ListTitle>
        <ListParagraph>
          Anchor - Solana <br />
          For quickly building secure Solana programs.
        </ListParagraph>
      </ListContainer>
   
    </ListItem>
    </a>

    <a href="https://phantom.app/" rel='noopener' target='_blank' >
    <ListItem>
      <picture>
        <FaWallet size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Wallet</ListTitle>
        <ListParagraph>
          Phantom <br />
          Safe and easy to store, send, receive, collect, and swap tokens on the Solana blockchain.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </a>

    <a href="https://www.academia.edu/95690669/Bidirectional_Cryptographic_Tokens" rel='noopener' target='_blank' >
    <ListItem>
      <picture>
        <BiAtom size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>BTM- White Paper</ListTitle>
        <ListParagraph>
        Bidirectional Tokenization Model <br />
        Curve - LBC <br /> Click to visit our White Paper
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </a>
    <a href="https://www.pokoapp.xyz/" rel='noopener' target='_blank' >
    <ListItem>
      <picture>
        <BiLogoProductHunt size="3rem" />
      {/* <img src="https://i.imgur.com/t0576WV.png" alt="poko" /> */}
      </picture>
      <ListContainer>
        <ListTitle>poko</ListTitle>
        <ListParagraph>
        Offramp with 0% fees with a  <br />
        self-issued Mastercard
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </a>
  </List>
  {/* <SectionDivider colorAlt /> */}
</Section>
);

export default Technologies;

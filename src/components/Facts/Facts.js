import React from 'react';
import { BiAtom, BiSolidBolt } from 'react-icons/bi';
import { FaAnchor, FaSnapchatGhost } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './FactsStyles';

const Facts = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>BTM: The World's First Growth-StableToken</SectionTitle>
  <SectionText>


BTM stands as a groundbreaking achievement in the realm of digital finance. As the inaugural growth-stable coin, it intertwines economic solidity with the ideals of sustainable progression. Dive into a currency experience where wealth preservation meets a vision for a greener tomorrow.
  </SectionText>
  <List>
    
    <ListItem>
      <picture>
        <BiSolidBolt size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Stable Prices</ListTitle>
        <ListParagraph>
        BTMs use a unique mathematical model to ensure stable token prices, <br />
        reducing the volatility typically associated with cryptocurrency.
        </ListParagraph>
      </ListContainer>
   
    </ListItem>
    

    
    <ListItem>
      <picture>
        <BiSolidBolt size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Continuous Liquidity</ListTitle>
        <ListParagraph>
        BTMs provide constant liquidity,<br />
        making it easy for participants to buy and sell tokens at any time without the usual risks of cryptocurrency exchanges.
        </ListParagraph>
      </ListContainer>
    </ListItem>
   

    
    <ListItem>
      <picture>
        <BiSolidBolt size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Empowering Value Creators</ListTitle>
        <ListParagraph>
        By aligning tokens with specific brands or content creators, <br />
        BTMs foster a mutualistic relationship between value creators and their communities, benefiting both parties.


        </ListParagraph>
      </ListContainer>
    </ListItem>
   
  </List>
  {/* <SectionDivider colorAlt /> */}
</Section>
);

export default Facts;

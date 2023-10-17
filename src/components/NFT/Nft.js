import React from 'react';
import { GiToken } from "react-icons/gi";
import styled from 'styled-components';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './NftStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { nft } from '../../constants/constants';

const Subtitle = styled.h4`
  font-weight: 400;
  color: #9cc9e3;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Nft = () => (
  <Section nopadding id="token">
    <SectionDivider />
    <SectionTitle main>Revolutionizing Pricing</SectionTitle>
    <Subtitle>Harnessing the Power of the Square Root Function</Subtitle>
    <SectionText>
    "Harnessing the Power of the Square Root Function" Introduces a novel approach to calculating price using the power function \(P = S^0.5\). By leveraging the unique properties of square root relationships, this method offers a more intuitive and dynamic pricing strategy. As the supply increases, the price curve smoothly ascends, providing an optimal balance between price and demand, while eliminating the volatility typically associated with traditional pricing models. 
    </SectionText>
    
    <GridContainer>
      {nft.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              {/* <HeaderThree title>{p.title}</HeaderThree> */}
              <Hr />
            </TitleContent>
            {/* <CardInfo className="card-info">{p.description}</CardInfo> */}
            {/* <UtilityList>
              <ExternalLinks href={p.source} rel='noopener' target='_blank'><GiToken size="3rem" href={p.source} /></ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Nft;

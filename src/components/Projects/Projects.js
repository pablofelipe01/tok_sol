import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import styled from 'styled-components';

const Subtitle = styled.h4`
  font-weight: 400;
  color: #9cc9e3;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Token</SectionTitle>
    <a href="https://solana.fm/address/5pMztYTmnPd2mT4PFsxh6xXJwzoN2pbKZBmWTFagV2Pf?cluster=mainnet-solanafmbeta" rel='noopener' target='_blank'>
    <Subtitle>CONTRACT</Subtitle>
    </a>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              {/* <TitleContent>Token</TitleContent> */}
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {/* <ExternalLinks href={p.visit} rel='noopener' target='_blank' >Code</ExternalLinks> */}
              <ExternalLinks href={p.source} rel='noopener' target='_blank' >Mint</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider  />
  </Section>
  
);

export default Projects;
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './TeamStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { team } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="team">
    <SectionDivider />
    <SectionTitle main>Team</SectionTitle>
    <GridContainer>
      {team.map((p, i) => {
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
              {/* <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList> */}
            </div>
            <UtilityList>
              {/* <ExternalLinks href={p.visit}>Code</ExternalLinks> */}
              <ExternalLinks href={p.source}><AiFillLinkedin size="3rem" href={p.source} /></ExternalLinks>
              
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
import React from 'react';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { IconName } from "react-icons/bs";
import { GiToken } from "react-icons/gi";

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './TokenStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { token } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="token">
    <SectionDivider />
    <SectionTitle main>Click to get Tok_Sol Token</SectionTitle>
    <GridContainer>
      {token.map((p, i) => {
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
              <ExternalLinks href={p.source} rel='noopener' target='_blank' ><GiToken size="3rem" href={p.source} /></ExternalLinks>
              
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
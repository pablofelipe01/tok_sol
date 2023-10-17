import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 3024878295">+ 57 302 487 8295</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: pablo@toksol.io.io">
          pablo@toksol.io
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> TOK the world, one SOL at a time </Slogan>
          {/* <a href="https://sites.google.com/web3tokensolutions.io/fit-token/inicio"><Slogan> Privacy Policy </Slogan></a> */}
          
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/pablofelipe01" rel='noopener' target='_blank'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/company/web3tokensolutions/" rel='noopener' target='_blank'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/tokensolutions" rel='noopener' target='_blank'>
            <AiFillTwitterSquare  size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
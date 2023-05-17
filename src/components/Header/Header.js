import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { SiApachenetbeanside  } from 'react-icons/si';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Img } from './HeaderStyles';

const Header = () =>  (
  <Container>
        {/* <img src="https://i.imgur.com/uxR5RCe.png" alt="tokSolLogo" size="3rem"  /> */}
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <Img src="https://i.imgur.com/CJA7udx.png"  />  
          {/* <span> Tok_Sol</span> */}
        </a>
      </Link>
    </Div1>
    <Div2>
      {/* <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Timeline</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#team">
          <NavLink>Team</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#token">
          <NavLink>Token</NavLink>
        </Link>
      </li>  
      <a href="https://solscan.io/address/BeB6qDcgjEY9rHxyDAJS99cAuR3jszUeZU21HqumCtPd" rel='noopener' target='_blank'>   
      <li>
        <Link href="https://solscan.io/address/BeB6qDcgjEY9rHxyDAJS99cAuR3jszUeZU21HqumCtPd" rel='noopener' target='_blank'>
          <NavLink>DAO</NavLink>
        </Link>
      </li> 
      </a>       
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/pablofelipe01" rel='noopener' target='_blank'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/pablo-f-acebedo/" rel='noopener' target='_blank'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/tokensolutions" rel='noopener' target='_blank'>
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;

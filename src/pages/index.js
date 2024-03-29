import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Team from '../components/Team/Team';
import Token from '../components/Token/Token';
import Nft from '../components/NFT/Nft';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Facts from '../components/Facts/Facts';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Facts />
      <Technologies />
        <Nft />
      <Projects />
      <Timeline />
      <Acomplishments />
      <Team />
      {/* <Token /> */}
    </Layout>
  );
};

export default Home;

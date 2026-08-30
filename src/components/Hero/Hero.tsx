import React from "react";
import { TypeAnimation } from "react-type-animation";

// components
import HeroButtons from "../HeroButtons/HeroButtons";
import SocialIcons from "../SocialIcons/SocialIcons";

import { MATE } from "../../data";

const Hero: React.FC = () => {
  return (
    <>
      <div className='about-txt text-left'>
        <h5>
          <span className='about line-1'>
            <TypeAnimation
              sequence={['Hello World, my name is', 1000]}
              speed={50}
              cursor={false}
            />
          </span>
          <br />
          <span
            className='about line-2'
            style={{ display: "flex", alignItems: "center" }}
          >
            <TypeAnimation
              sequence={[1500, 'Kevin Reber']}
              speed={40}
              cursor={true}
            />
            <img
              src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
              className='hand-gif'
              alt='wave'
            ></img>
          </span>
          <br />
          <span className='about line-3'>
            I'm a <strong>Senior Software Engineer at LinkedIn</strong>, where I
            build AI agents that automate data center infrastructure work. I
            also ship the developer tooling other teams build on.
            <br />
            Before LinkedIn I co-founded an ed-tech startup out of{" "}
            <strong>UC Berkeley's Skydeck</strong>. The team is still at it{" "}
            <a
              className='links'
              href={MATE}
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
          </span>
          <br />
          <hr />
        </h5>
        <SocialIcons variant='hero' />
      </div>
      <div className='about-btn'>
        <HeroButtons />
      </div>
    </>
  );
};

export default Hero;

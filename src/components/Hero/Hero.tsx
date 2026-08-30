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
            I'm a <strong>Senior Software Engineer at LinkedIn</strong>. I build
            agentic AI systems for data center infrastructure, and the developer
            tooling that scales them across engineering teams.
            <br />
            Earlier, I co-founded an ed-tech startup through{" "}
            <strong>UC Berkeley's Skydeck</strong> accelerator. You can see it{" "}
            <a className='links' href={MATE}>
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

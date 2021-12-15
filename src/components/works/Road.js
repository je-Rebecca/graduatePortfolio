import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const Road = () => {
  return (
    <div>
      <ScrollToTop />

      <img
        src="https://imgur.com/8HlBFBy.jpg"
        alt="Untitled-4"
        border="0"
        width="60%"
      />
      <Headline>
        <h2>Road</h2>
        <h4>Tools: Ardunio</h4>
        <h4>
          People make too many choices and decisions in their lives and
          sometimes these decisions are burdensome. However, I wanted to
          silently talk about who can reach the desired goal if they are
          confident in their choice and do not regret it.
        </h4>
      </Headline>
      <ImgWrap>
        <div className="gallery">
          <h4 className="nomal">
            <p>
              <strong>Concept</strong>
            </p>
            I got the idead from the poet 'The Road not taken' wrote by Robert.
            <br />
            <br />
            <div class="poet">
              <p>Two roads diverged in a yellow wood,</p>
              <p>And sorry I could not travel both</p>
              <p>And be one traveler, long I stood</p>
              <p>And looked down one as far as I could</p>
              <p>To where it bent in the undergrowth;</p>
              <br />
              <p>I shall be telling this with a sigh</p>
              <p>Somewhere ages and ages hence:</p>
              <p>Two roads diverged in a wood, and I-</p>

              <p>I took the one less traveled by,</p>
              <p>And that has made all the difference.</p>
            </div>
            <p>
              In the poet, author chose the road that no one chooses. Later, the
              author never regretted his decision. I think that my situation
              also same with the author. I am facing big choose which can change
              my life totally which apply the graduate school that I eager.
              Through this work, I want to mention that every person facing
              their own situation, and each of their answers are different.
              Also, least, if you keep moving forward to the goal that I set,
              That choose and decision are right.
            </p>
          </h4>
          <h4 className="nomal">
            <p>
              <strong>Prototype</strong>
            </p>
            This is the mockup desgin that I detailed base on my idea. Threes
            Gears are hanging on the wall, the road drawn on the wall, through
            the gears. When the small gear spinning, the road shape will change.
            Thus, the road keeps changing every second. But If I keep going to
            get my destination, the load will be one clear path.
          </h4>
          <img src="https://i.imgur.com/9yaezwi.jpg" alt="pic1" border="0" />
          The sides parts looks like this, back part of gear there is a
          stepped-motor. It is connected with Ardunio Uno.
          <img src="https://i.imgur.com/o9KOf0N.jpg" alt="pic1" border="0" />
          The wall size is 8 inch by 8 inch, gears scales looks like below.
          <img src="https://i.imgur.com/nCbmG7D.jpg" alt="pic1" border="0" />
          <h4 className="nomal">
            <p>
              <strong>Art Work</strong>
            </p>
            <iframe
              src="https://player.vimeo.com/video/649387901"
              width="100%"
              height="564px"
              frameborder="0"
              title="ArtWork"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </h4>
          <h4 className="nomal">
            To operate this space, the special eyeglass is needed, which is can
            capture companion 's iris and sent it to the projector. The eyeglass
            looks like this, on the upper right side has a scanner of the user's
            iris. The frame is made of titanium so it has flexibility and very
            light to wearing during this space.
            {/* The dome will be blank, till participants scanned their companion's
            iris through the eyeglass. When the eyeglass scanned the colors, it
            will send color information to to the projector. After then, the
            dome space will be reflected participant iris' color on the wall.
            The participant will feel they are inside of companion's space and
            it give a chance to deeply understand about each other. The eyeglass
            looks like this, on the upper right side has a scanner of the user's
            iris. The frame is made of titanium so it has flexibility and very
            light to wearing during this space. */}
          </h4>
          <img src="https://i.imgur.com/MVR7E1y.jpg" alt="color chart" />
        </div>
      </ImgWrap>
      <Button>
        <h4>
          It was my first time to using Arduino. Although It took some time to
          understand electric current flow, really motivated artwork. Because I
          think Arduino connects between technology and design. In additional,
          through this project, I thought about my road that I am facing and I
          was able to be more motivated and have confidence in the goal I am
          challenging which is applying graduate school. Also, I want to try
          different artwork using Arduino.
        </h4>
      </Button>
      <NavBar>
        <Link to="">
          <div class="flex">
            <div className="arrow">
              <MdKeyboardArrowLeft />
            </div>
            <h2>Title1</h2>
          </div>
        </Link>
        <Link to="">
          <div class="flex">
            <h2>Title2</h2>
            <div className="arrow">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </Link>
      </NavBar>
    </div>
  );
};

const Headline = styled.div`
  padding: 0 4vw;
  h2 {
    text-align: left;
    font-weight: 100;
  }
  h4 {
    text-align: left;
    font-weight: 100;
  }
`;
const ImgWrap = styled.div`
  max-width: 100%;
  padding: 4vw;
  .nomal {
    .poet {
      text-align: center;
    }
    font-weight: 100;
    text-align: left;
    margin: 0;
    .zeroMargin {
      margin: 0;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 1vw;
    width: auto;
    img {
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    }
  }
`;
const Button = styled.div`
  h4 {
    padding: 0 4vw;
    text-align: left;
    font-weight: 100;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4vw;
  h2 {
    font-weight: 100;
  }
  .flex {
    display: flex;
    .arrow {
      width: 18px;
      padding-right: 35px;
      padding-top: 1rem;
      font-size: 2rem;
    }
  }
`;

export default Road;

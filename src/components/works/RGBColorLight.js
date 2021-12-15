import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const RGBColorLight = () => {
  return (
    <div>
      <ScrollToTop />
      <MainImgWrap>
        <img
          src="https://i.imgur.com/nstPC0e.jpg"
          alt="Untitled-4"
          border="0"
          width="60%"
        />
      </MainImgWrap>
      <div>
        <Headline>
          <h2>Color light </h2>
          <h4>Tools: Ardunio</h4>
          <h4>
            In 2020, I started to study about color affection on a person's mood
            and using colors for application development. There, I learned that
            color has power to cure mental and body weakness. For example, green
            color can increase a person's metabolism and red color can increase
            blood pressure and activate adrenaline. I then, devised a lighting
            box with Arduino,
            <br />
            <br />I believe by doing so will improve people’s mood in the
            pandemic period
          </h4>
        </Headline>
        <ImgWrap>
          <div className="gallery">
            <h4 className="nomal">
              <p>
                <strong>Concept</strong>
              </p>
              Input : 4 x 4 Membrane key pad <br /> output : RGB led light{' '}
              <br /> When the user press number on the keypad it will shows
              colors they are Red, Orange, Yellow, Green, Blue, Navy, Purple,
              Pink and Mint.
              <br />
              <br />
            </h4>
            <h4 className="nomal">
              <p>
                <strong>Prototype</strong>
              </p>
              At first, I tried to show as many colors as possible, but I chose
              the 10 most noticeable colors because there was a limit to RGB
              colors. For instance, gray and white looks similar in RGB color.
              And we decided to connect to 0-9 on the keypad. <br />
              <br />
              Each color has meaning. Like, Red boosting body energy and mood,
              Orange color raises appetite and Green relieve stress.
            </h4>

            <img src="https://i.imgur.com/IyrCeTl.jpg" alt="pic1" border="0" />
            <h4 className="nomal">
              <p>
                <strong>Art Work</strong>
              </p>
              As my video demonstrates, each keys are pressed, different light
              color shows up. But when a none numeric key is pressed a warning
              message will appear on the computer screen and a red light will
              blink 3 times on the key pad.
              <br />
              <br />
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/653384006?h=ddc2e9abeb"
                width="640"
                height="1137"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </h4>
            <h4 className="nomal">
              <p>
                <strong>Arduino circuit</strong>
              </p>
              Regarding of Arduino circuit, Put the RGB light and 220 Ω
              resistance on the breadboard. Then Connected each pins with Ground
              and number10 to 12. Plugged 'Membrane keypads' into Uno number 2
              to 9.
            </h4>
            <img src="https://i.imgur.com/yJAzt0p.jpg" alt="color chart" />
            <p> Actual circuit </p>
            <img src="https://i.imgur.com/2SSsw77.jpg" alt="color chart" />

            {/* <img src="https://i.imgur.com/2SSsw77.jpg" alt="color chart" />
            <img src="https://i.imgur.com/qpEsThZ.jpg" alt="color chart" /> */}
            <h4 className="nomal">
              <p>
                <strong>Arduino Code</strong>
              </p>
            </h4>
            <h4 className="nomal">
              As you can see on the top of picture, each RGB color wires defined
              with 10,11,12 which was connected on Uno. Also, I programed to
              assign the Membrane keypad's column and rows number and each
              number on keypad.
            </h4>
            <img src="https://i.imgur.com/yO4Ilgz.jpg" alt="color chart" />

            <h4 className="nomal">
              <br />
              I further define ‘function’ to operate UNO board I need to add
              switch and case code to match with a number or a color. For
              example, White' RGB is 255,255,255 and Orange is 255,136,0. I put
              Each Color's number like this 'analogWrite(RED,255)'. <br />
              Also, When the non-numeric key is pressed, message say 'press the
              number button' will pop up &, the red light on the box will
              blinking three times.
            </h4>
            <br />
            <img src="https://i.imgur.com/RlLDMwL.jpg" alt="color chart" />
          </div>
        </ImgWrap>
        <Button>
          <h4>
            Although Arduino coding is different from JavaScript coding that I
            am more familiar with. Now I learned more through this project..
            Likewise, defined the pins and numbers how to set the RGB colors.
            These improve my interest on Arduino.
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
const MainImgWrap = styled.div`
  position: relative;
  height: 40vwx;
  img {
    position: absolute;
    left: -4%;
    width: 112%;
    height: 100%;
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
  .flexing {
    display: flex;
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

export default RGBColorLight;

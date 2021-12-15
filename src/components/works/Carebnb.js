import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const Carebnb = () => {
  return (
    <div>
      <ScrollToTop />
      <MainImgWrap>
        <img
          src="https://i.imgur.com/6NX3pZO.jpg"
          alt="Tumbnails"
          border="0"
          width="500px"
        />
      </MainImgWrap>
      <div>
        <Headline>
          <h2 className="Title">CareBnb (Booking Site)</h2>
          <h4>
            Tools(FrameWork ): Javascript (React, Redux, Express,
            Style-component, Scss, Stripe Library, Kakao Login Library) <br />
            Date : May- August, 2021
            <br />▶ Checking the code :{' '}
            <Link class="herLink" to="https://github.com/leemj0948/Carebnb">
              Github url{' '}
            </Link>
          </h4>
          <h4>
            When I make this site, I just finished studying Redux library which
            keeps the data whole site, although the page is converted to another
            page.
            <br />
            <br />
            I considered which site should I made for practice this concept.
            Finally, I decided to make the booking hotel site. Because the
            process of booking, required to keep the data from start of booking
            to payment.
            <br />
            <br />
            To save the time, I got the idea of layout and some feature from
            Airbnb. Made the data to json file in person, import it to my site
            to fill the information of hotels and pictures.
          </h4>
        </Headline>
        <ImgWrap>
          <div className="gallery">
            <h4 className="nomal">
              <p className="subtitle">
                <strong> Main Features</strong>
              </p>
              I would like to emphasize two characters of this site: Landing
              Page and Hotel Booking Process. Except those two, more detail of
              site, I already posting on my blog.
              <br />
              <Link
                className="herLink"
                to="https://leejoeun0948.medium.com/scroll-down-event-a544fd8b128b"
              >
                {' '}
                Medium blog url{' '}
              </Link>
              <br />
              <br />
              <p>
                <strong> &nbsp; 1. First Page</strong>
              </p>
              As you can see from my Site pictures, the main page layout is
              similar with AirBnb. It consists of header and main city names and
              advertisement. Pressing the hamburger icon locates on right ,
              login In and Sign Up button are appearing. When these buttons are
              pressed the modal page pops up and ask the user to input user
              phone number.
            </h4>
            <img src="https://i.imgur.com/OflIeOD.gif" alt="gif" />

            <h4 className="nomal">
              <p>
                <strong> &nbsp; 2. Booking process</strong>
              </p>
              <br />
              This picture shows whole process of booking. When the user adding
              date and amount of guest at the top and the pressed search button,
              hotel listing page shows up. And then, choose one of hotels and
              typing the email and card number, Booking confirmed. The point is
              the 'check in and out' date are kept although page were changed
              because of Redux library.
            </h4>
            <img src="https://i.imgur.com/SYftLDh.gif" alt="gif" />
          </div>
        </ImgWrap>
        <Button>
          <h4>
            This is a challenging project. Especially, changing the navigator
            sized by the location of scroll y axle. When the scroll on the top
            the navigator is big. However, when the scroll down, the navigator
            size small. <br />
            <br />
            Also, I put every process of booking 'set the date', 'item listing'
            and 'payment'. I learned new library such as AirBnb calendar to make
            the calendar and Stripe for card payment. It is not totally done but
            this is one of my work that I spent a great deal of time.
            <br />
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
  .title {
    font-size: 1.8rem;
  }
  padding: 0 4vw;
  h2 {
    text-align: left;
    font-weight: 100;
  }
  h4 {
    text-align: left;
    font-weight: 100;
  }
  .herLink {
    color: blue;
    text-decoration: underline;
  }
`;

const MainImgWrap = styled.div`
  position: relative;
  height: 450px;
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
  .herLink {
    color: blue;
    text-decoration: underline;
  }
  .nomal {
    font-weight: 100;
    text-align: left;
    margin: 0;
    .subtitle{
      font-size="1.3rem"
    }
    .zeroMargin {
      margin: 0;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 1.5vw;
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
  .herLink {
    color: blue;
    text-decoration: underline;
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

export default Carebnb;

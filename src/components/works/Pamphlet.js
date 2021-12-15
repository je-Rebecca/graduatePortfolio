import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const Pamphlet = () => {
  return (
    <div>
      <ScrollToTop />
      <img src="https://i.imgur.com/ytgIXBd.jpg" alt="Untitled-4" border="0" />
      <Headline>
        <h2>Promotional Material</h2>
        <h4>Tools: Adobe indesign, Photoshop and Illustrator</h4>
        <h4>I made the promotional material when I was work in company.</h4>
      </Headline>
      <ImgWrap>
        <div className="gallery">
          <h4 className="nomal">
            <p>
              <strong>Cards</strong>
            </p>
            I made the cards for two purposes. First is to celebrate the season
            at the same time keep reminding customer of our company. Second
            reason promotes our featured listing.
            <br />
            <br />
            Our company only sends the seasonal card two times, one for near end
            for holiday season and the other for Lunar New Year. For the
            Year-end greeting, aside from season greeting we try to display
            relaxation and happiness in the content of the cards by using bright
            color.
          </h4>
          <img src="https://i.imgur.com/yCz6ps4.jpg" alt="color chart" />
          <h4 className="nomal">
            When making Lunar New Year card particularly for those Asian
            customer such as Korean, Chinese and Malaysian whom celebrate this
            big holiday event. <br />
            <br />
            Although new year card is familiar with me, I realized each country
            put the different symbols on the cards. For example, Korea puts the
            Sun on the card because it means of the new day of the year.
            However, except the Korea other country they may have other symbols,
            figure or. Through this card I had a chance to understand each
            county's culture and which color they are preferred.
          </h4>
          <img src="https://i.imgur.com/CHwDxug.jpg" alt="color chart" />
          <img src="https://i.imgur.com/9AZOCdz.jpg" alt="color chart" />

          <h4 className="nomal">
            <p>
              <strong>Set up sheets</strong>
            </p>
            Finally, I made the set up sheet which shows every information of
            rental or sale listing. When I went to 'showing' and meet the
            prospective renter, I thought that these renter sees various unit
            and that might cause them to confusing which unit was having the
            amenities and features. So I decided to make the summarized sheet
            which has every information they needs.
          </h4>
          <img src="https://i.imgur.com/zyqueAU.jpg" alt="color chart" />
          <h4 className="nomal">
            <p>
              <strong>Pamphlet</strong>
            </p>
            I also made a pamphlet that reminds customers. This is because
            promotional cards are only reminded of customers at the beginning or
            end of the year. This pamphlet consists of three sides, so it can
            contain a lot of information. Various information such as New York
            City events was included, and rental and sales lists were added.
          </h4>

          <img src="https://i.imgur.com/TWn2pHy.jpg" alt="pic1" border="0" />
        </div>
      </ImgWrap>
      <Button>
        <h4>
          <p>
            <strong>What I learned</strong>
          </p>
          Doing these works, made me think about which font and size is good for
          the receiver and how many colors should I use for attract the people.{' '}
          Especially, during the 'seasonal cards' that help me to understand
          various cultures.
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
    grid-row-gap: 3vw;
    width: auto;
    img {
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
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

export default Pamphlet;

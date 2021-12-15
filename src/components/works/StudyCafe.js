import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Chart from '../../assets/svgchart.svg';
import Draft from '../../assets/draft.svg';
import ScrollToTop from '../../ScrollToTop';
const StudyCafe = () => {
  return (
    <div>
      <ScrollToTop />
      <MainImgWrap>
        <img
          src="https://i.imgur.com/SB9qcQX.jpg"
          alt="Untitled-4"
          border="0"
        />
      </MainImgWrap>
      <div>
        <Headline>
          <h2>Study Cafe infomation App [Case Study]</h2>
          <h4>Team : Joeun Lee, JiHyeon Kim, JiHyeon Ha </h4>
          <h4>Time : 2020. April - </h4>
          <h4>Work Definition : research, survey, design</h4>
          <h4>
            The average age of Korean who got their first job in Korea is 31.
            That means, most of them study long time to prepare for their
            career. These young people are always looking for a place to study.
            Especially, they search study cafe because they want to have a quiet
            place to spend a long time at the same time got motivated from
            studying with other students.
            {/* 
            The average age of those who got their first job in Korea is 31.that
            means many of them study long time to prepare for their career.
            People looks for the place to study. Espeically, they search the
            study cafe which is they can study long time with quiet place at the
            same time got motivated from other students. Because of this long
            preparation for career and studying that inspire us this application
            of study cafe.  */}
            <br />
            <br />
            Although there are bunch of study cafes in Korea already in
            existence and new study cafes are opening every day. We believe that
            the information about individual facility and price are not enough,
            the students will spend a great deal of a time to searching. We
            thought that to save the students time is to have an app to give all
            study café in the area information.
            {/* <br /> This app center on people, concious looking for the study.
            this application help easily find their neighborhood place to do
            just that. Basic on the information they could book the cafe esaily.
            At the same time, new study cafe keep open every other weeks. But It
            is difficult found the price and facility infomation from the each
            study cafe site. That's make us planning Study cafe infomation App */}
            {/* call GongDukkae which mean is wake up your brain. */}
          </h4>

          {/* prototype */}
          <h2>User Research</h2>
          <h4>
            We first surveyed between April 27 and May 2, 2020 and received 164
            responses. These survey participants age is between 20-30. The
            result is that most students study in the library for three to six
            hours a day.
            {/* We first do the survey between April.27.2020 - May.02.2020, amount
            164 people response. base on that we found is most of student
            preparing for the job, they study about 3-6 hour perday at library.
            Also, when they choose the study place, they consider the quiet and
            focus place to study. Base on that, they prefer to study at study
            cafe and they don't have enough infomation. */}
          </h4>
        </Headline>
        <ImgWrap>
          <div className="gallery">
            <img src={Chart} alt="chart" border="0" />
            <h4 className="nomal">
              Regarding of the choice of place to study, almost all the survey
              participants want a quiet place so they can focus on study. We
              also found the about 80% of respondents will use our study cafe
              facility app.
              <br />{' '}
              <strong>
                At the end, we are sure that student would like to study in a
                study café and will need detailed information.
              </strong>{' '}
              <br />
              <br /> *************** Among the various age group, we are decided
              to target the senior grade in university who is preparing a
              different kind of license or test to get the job opportunity.
              <br />
              <br />
              When sketching application, we put the search and community
              features and allow users to share their experience both on the use
              of app and the cafe.
            </h4>
            <h2>Result 1</h2>
            <h4 className="nomal">
              Eventually, we made the prototype app using application service
              and upload onto the Google Play as below, Our app is focused on
              the map and the community features. Because at first, we believe
              community feature is important to draw many users to use the app.
            </h4>
            <img src="https://i.ibb.co/HrSChc5/sft.jpg" alt="sft" border="0" />
            <h4 className="nomal">
              As you can see below, our prototype app shows the study cafes data
              that we input when the user pressed one study café icon, the cafe
              details such as how much per hour, facilities. There is also a
              posting board where users can share their user experiences. After
              first demo version, I removed the board posting function to allow
              student focus in their study instead of reading the exchanges from
              the posting. I redesigned the features to let the user focus and
              motivate on study.
            </h4>
            <iframe
              src="https://player.vimeo.com/video/642925507"
              width="100%"
              height="564"
              title="prototype"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <h4 className="nomal">
              After this demo version, I thought that because of board feature,
              there isno difference with other local community app. So, I
              redesigned which is more useful to the student user. This time, my
              goal is let the user focus and motivate on study. So I removed
              community board feature because it disturbed student.
            </h4>
            {/* After this demo version, we thought our app should be focus on the
            motiviation of study. but the community feature conflicted to our
            goals. This time we are focus on the simplify features. */}
            <h1> Visual Design</h1>
            <div className="hor">
              <h4 className="nomal">
                <h2 className="zeroMargin">Sketches </h2>
                <p>
                  Main Two Features. <br />
                </p>
                <p> 1. Information of Study cafe</p>
                <p>
                  {' '}
                  2. Study motivation (attendance, todo list , study time
                  recorders like draft)
                </p>
              </h4>
              <img src={Draft} alt="img" />
            </div>
            {/* <img
            src="https://i.ibb.co/9NbwWSQ/Untitled-1.png"
            alt="Untitled-1"
            border="0"
          /> */}
            {/* <img src="https://i.ibb.co/37fK6SM/ew.jpg" alt="ew" border="0" /> */}
            <h2>
              Figma (design prototyping tool)
              <br />
            </h2>
            <h4 className="nomal">
              <p>
                In our actual design, I focus on basic functions, search the
                'Study Cafe' and help the study. Home screen in the top part has
                today's goal to motivate the user to study. It can be helpful to
                reach their goals because when the goal is visible that can
                motivate the user to achieve the day’s goals. There is an
                Attendance button in the middle of the main page. It is working
                manually, when the user entered the Study Cafe, pressed the
                Check in/ out button. The users can check how much time they are
                studying per day, even they know their study pattern.
              </p>{' '}
            </h4>
            <img src="https://i.imgur.com/zwOVNxy.jpg" alt="img" border="0" />
            <h4 className="nomal">
              <p>
                {' '}
                On the My Page it consists of three parts, profile, recent
                checked listing and my review. Users can add short comments
                after they visit the cafe. When the user pressed search icon on
                the button, the user can find the cafe easily with the cafe
                name. That's save the user's time.
              </p>
            </h4>
            <img src="https://i.imgur.com/sXqUVCi.jpg" alt="img" border="0" />
            <h2>Color </h2>
            <h4 className="nomal">
              Using the simple colors will not take distract users to focus on
              the study. The logo depicts a drawing of brain and light, it means
              this app helps the brain awake and helps the study. Most of app
              color from the logo, I use yellow color to stress a few parts of
              the text content. Yellow is a positive color; users can feel
              cheerful and positive.
            </h4>
            <img src="https://i.imgur.com/ZXmKJou.jpg" alt="gong" border="0" />{' '}
            <div class="vedioFlex">
              <div>
                <p>Page1</p>
                <img
                  src="https://i.ibb.co/M6DpPNQ/gong-1.gif"
                  alt="gong-1"
                  border="0"
                />
              </div>
              <div>
                <p>Main Features</p>

                <img
                  src="https://i.ibb.co/82cVxDP/gong-2.gif"
                  alt="gong-2"
                  border="0"
                />
              </div>
            </div>
          </div>
        </ImgWrap>
        <br />
        <br />
        <Buttom>
          <h2>What I learned </h2>
          <h4>
            At first we set the broad target who is studying. Later, we realized
            we can't satisfy every user. Once we set the target person who is
            facing graduated. It's much easier and clear to figure out features
            and design of app. Because what they want is founding place to study
            and making study pattern to achieve their goal. Based on this
            experience, I learned that setting a specific target as a user is
            the most important thing to create an app.
            <br />
            <br />
            Doing the prototype and testing, I learned that just I needed to
            focus only 1-2 strong features to attract the user. If an app has
            many features, the identity of the application can fade.
          </h4>
        </Buttom>
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
  height: 45vw;
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
  h2 {
    text-align: left;
    font-weight: 150%;
    margin: 0;
  }
  .hor {
    display: flex;
  }
  .nomal {
    font-weight: 100;
    text-align: left;
    margin: 0;
    .zeroMargin {
      margin: 0;
    }
  }
  .vedioFlex {
    display: flex;
    div {
      width: 50%;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
    width: auto;
    h1 {
      background: radial-gradient(
        circle,
        rgba(237, 238, 174, 1) 0%,
        rgba(233, 200, 148, 0.8666170634920635) 100%
      );
      margin: 0;
      padding: 10 px;
      text-align: left;
    }
    img {
      width: 80%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
      margin: auto;
    }
  }
`;
const Buttom = styled.div`
  h4 {
    padding: 0 4vw;
    text-align: left;
    font-weight: 100;
  }
  h2 {
    padding: 0 4vw;
    text-align: left;
    font-weight: 150%;
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
export default StudyCafe;

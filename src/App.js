import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './Header';
import Resume from './components/Resume';
import { GlobalStyle } from './global.style';
import Work from './components/Work';
import Home from './components/Home';
import Road from './components/works/Road';
import WordMemory from './components/works/WordMemory';
import RGBColorLight from './components/works/RGBColorLight';
import Eyes from './components/works/Eyes';
import MovieApp from './components/works/MovieApp';
import CommunityApp from './components/works/CommunityApp';
import StudyCafe from './components/works/StudyCafe';
import Pamphlet from './components/works/Pamphlet';
import BookTemplate from './components/works/BookTemplate';
import GuideDesign from './components/works/GuideDesign';
import ResumeSite from './components/works/ResumeSite';
import NewsLetters from './components/works/NewsLetters';
import Footer from './Footer';
import Carebnb from './components/works/Carebnb';
import ScrollToTop from './ScrollToTop';
// https://beaumont-demo.squarespace.com/  << 샘플
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Home />
          </Route>
          <Route path="/work" component={Work}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/works/Eyes" component={Eyes}></Route>
          <Route path="/works/memoryApp" component={WordMemory}></Route>
          <Route path="/works/BookTemplate" component={BookTemplate}></Route>
          <Route path="/works/movieApp" component={MovieApp}></Route>
          <Route path="/works/Road" component={Road}></Route>
          <Route path="/works/CommunityApp" component={CommunityApp}></Route>
          <Route path="/works/StudyCafeApp" component={StudyCafe}></Route>
          <Route path="/works/GuideDesign" component={GuideDesign}></Route>
          <Route path="/works/Pamphlet" component={Pamphlet}></Route>
          <Route path="/works/NewsLetters" component={NewsLetters}></Route>
          <Route path="/works/ResumeSite" component={ResumeSite}></Route>
          <Route path="/works/Carebnb" component={Carebnb}></Route>
          <Route path="/works/RGBColorLight" component={RGBColorLight}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

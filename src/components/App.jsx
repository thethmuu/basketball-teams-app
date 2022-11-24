import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './Article';
import Articles from './Articles';
import Home from './Home';
import Navbar from './Navbar';
import Player from './Player';
import Players from './Players';
import Team from './Team';
import TeamPage from './TeamPage';
import Teams from './Teams';

const App = () => {
  return (
    <>
      {/* <h1>Basketball League</h1> */}
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/players' element={<Players />}>
              <Route path=':name' element={<Player />} />
              <Route
                path=''
                element={
                  <div className='sidebar-instruction'>Select a player</div>
                }
              />
            </Route>
            <Route path='/teams' element={<Teams />}>
              <Route path=':teamId' element={<Team />} />
              <Route
                path=''
                element={
                  <div className='sidebar-instruction'>Select a team</div>
                }
              />
            </Route>
            <Route path='/:teamId' element={<TeamPage />} />
            <Route path='/:teamId/articles' element={<Articles />}>
              <Route path=':articleId' element={<Article />} />
              <Route
                path=''
                element={
                  <div className='sidebar-instruction'>Select an article</div>
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

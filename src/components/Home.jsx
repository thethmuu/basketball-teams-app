import React from 'react';
import { Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import TeamLogo from './TeamLogo';

const Home = () => {
  const { response: teamNames, loading } = useTeamNames();
  console.log(teamNames);

  if (loading) return null;

  return (
    <div className='container'>
      <h1 className='large-header'>Basketball League</h1>
      <h3 className='header text-center'>Select a team</h3>

      <div className='home-grid'>
        {teamNames.map((name) => (
          <Link key={name} to={`/${name}`}>
            <TeamLogo id={name} width='126px' />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

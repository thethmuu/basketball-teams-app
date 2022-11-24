import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { slugify } from '../utils';

export default function Sidebar({ title, list }) {
  return (
    <div>
      <h3 className='header'>{title}</h3>
      <ul className='sidebar-list'>
        {list.map((player) => (
          <CustomLink key={player} to={slugify(player)}>
            {player.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

function CustomLink({ to, children }) {
  const location = useLocation();

  const isMatch = location.pathname.split('/')[2] === to;

  return (
    <div>
      {isMatch ? '✨' : ''}
      <Link
        className={isMatch ? 'active' : ''}
        to={{
          pathname: to,
          search: location.search,
        }}
      >
        {children}
      </Link>
    </div>
  );
}

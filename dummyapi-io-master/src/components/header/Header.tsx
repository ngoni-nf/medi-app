import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="https://dummyapi.io/images/icon.png" alt="logo" />
        <p>DUMMYAPI.IO</p>
      </Link>
      <div className="account">
        <Link to="/posts">
          <Button color="secondary">Posts</Button>
        </Link>
        <Link to="/users">
          <Button color="secondary">Users</Button>
        </Link>
        <p>Ece Maç</p>
        <Avatar
          alt="Ece Maç"
          src="https://avatars.githubusercontent.com/u/43401712?v=4"
        />
      </div>
    </header>
  );
};

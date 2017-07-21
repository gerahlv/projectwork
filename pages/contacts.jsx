import React from 'react';
import Menu from '../components/menu';
import Icon from '../components/icon';
import IconFacebook from '../components/icon-facebook';
import IconNumber from '../components/icon-number';
import IconEmail from '../components/icon-email';


class Contacts extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="head-name">
            <Icon />
            ProjectWork: blog
          </div>
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">

          If you have any questions about this project,<br /> feel free to contact me: <br />

      <IconFacebook /> @gerah.greega <br />
        <IconNumber /> +371 269 60 456 <br />
        <IconEmail /> germans.grigorjevs@gmail.com <br />
        </main>
        <footer className="footer">
          <p>&copy; 2017 Germans</p>
        </footer>
      </div>
    );
  }
}

export default Contacts;

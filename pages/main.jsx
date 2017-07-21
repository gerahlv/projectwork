import React from 'react';
import Menu from '../components/menu';
import Icon from '../components/icon';
import IconEmail from '../components/icon-email';
import Login from '../components/login';
//import Logo from '../components/logo';

class Main extends React.Component {
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

          <div className="login">
            Login: <br />
            <Login />
          </div>
        </main>
        <footer className="footer">
          <p>&copy; 2017 Germans</p>
        </footer>
      </div>
    );
  }
}

export default Main;

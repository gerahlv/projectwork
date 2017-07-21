import React from 'react';
import Menu from '../components/menu';
import Icon from '../components/icon';
import IconEmail from '../components/icon-email';
import Login from '../components/login';

class Feed extends React.Component {
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
            <div>
              <iframe src="https://www.youtube.com/embed/uEdyTlI3BAA?ecver=2" width="640" height="360" frameborder="0" allowfullscreen></iframe></div>
          </div>
        </main>
        <footer className="footer">
          <p>&copy; 2017 Germans</p>
        </footer>
      </div>
    );
  }
}

export default Feed;

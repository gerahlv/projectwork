import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
         <input type="text" placeholder="Enter Username" name="uname" required />
         <br />
         <input type="password" placeholder="Enter Password" name="psw" required />
         <br />
         <a href="./#/feed"><button type="submit">Login</button></a>
         <button type="submit">Sign Up</button><br />
         <a href="./#/contacts">Forgot password?</a>
       </div>
    );
  }
}

export default Login;

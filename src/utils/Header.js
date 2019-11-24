import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light" style={ { 'background-color' : '#e3f2fd' } } >
          <span class="navbar-brand mb-0 h1">Online Movie Ticket</span>
        </nav>
      </div>
    )
  }
}

export default Header;

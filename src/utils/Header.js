import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light" style={{ 'background-color': '#bbbbbb' }} >
          <span class="navbar-brand mb-0 h1">Online Movie Ticket</span>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light" style={{ 'background-color': '#bbbbbb' }} >
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">หน้าแรก <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/movie">ภาพยนตร์</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cinema">โรงภาพยนตร์</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/soulvenir">ของที่ระลึก</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;

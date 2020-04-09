import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <div className="of">Of</div>
            <div className="the">The</div>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>Fresh Seafood</span>
        </h3>
      </header>
    );
  }

}

export default Header;

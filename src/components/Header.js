import React from 'react';

const Header = props => (
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
          <span>{props.tagline}</span>
        </h3>
      </header>
    );

export default Header;

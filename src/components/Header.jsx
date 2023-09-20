import React from 'react';

import arrow from '../assets/arrow.svg';
import settings from '../assets/settings.svg';
import profile from '../assets/profile.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="settings">
        <img src={settings} alt="settings" />
      </div>
      <div className="profile">
        <img src={profile} alt="profile" />
        <span>null null</span>
        <div className="arrow">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;

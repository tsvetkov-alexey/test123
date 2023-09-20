import React from 'react';
import Company from './Company';
import Navigation from './Navigation';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Company />
      <Navigation />
    </div>
  );
};

export default Sidebar;

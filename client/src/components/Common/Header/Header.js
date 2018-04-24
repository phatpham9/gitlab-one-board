import React from 'react';
import { APP } from "../../../config";

import './Header.scss';

const Header = () => (
  <header className="header text-center">
    {APP.name}
  </header>
);

export default Header;

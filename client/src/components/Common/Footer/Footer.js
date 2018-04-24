import React from 'react';
import { APP } from "../../../config";

import './Footer.scss';

const Footer = () => (
  <footer className="footer text-center" >
    Star us on <a target="_blank" href={`${APP.github}`}>GitHub</a>
  </footer>
);

export default Footer;

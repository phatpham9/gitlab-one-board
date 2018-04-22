import React from 'react';
import { APP } from "../../../config";

import './Footer.scss';

const Footer = () => (
    <footer className="footer text-center" >
        Made by <a target="_blank" href={`${APP.author.website}`}>leflair.vn</a>
    </footer>
);

export default Footer;

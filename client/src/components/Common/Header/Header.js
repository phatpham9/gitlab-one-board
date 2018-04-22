import React from 'react';
import { APP } from "../../../config";

import './Header.scss';

const Header = () => (
    <header className="header mt-3 text-center">
        <h1>{APP.name}</h1>
    </header>
);

export default Header;
import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
    <div className="content">
        {children}
    </div>
);

const propTypes = {
    children: PropTypes.any.isRequired,
};

Content.propTypes = propTypes;

export default Content;

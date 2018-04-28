import React from 'react';
import PropType from 'prop-types';
import { Input } from 'reactstrap';

import './Select.scss';

const propTypes = {
  options: PropType.array.isRequired,
  name: PropType.string.isRequired,
}
const defaultProps = {
  options: []
}
const Select = ({ title, displayName, options, onChange, ...rest }) => (
  <Input type="select" {...rest} onChange={(e) => onChange(e)}>
    <option value="">{title}</option>
    { options.length > 0 &&
      options.map((option, index) => 
        <option key={index} value={option.id}>{displayName ? option[displayName] : option}</option>
      )
    }
  </Input>
);

Select.defaultProps = defaultProps;
Select.propTypes = propTypes;

export default Select;

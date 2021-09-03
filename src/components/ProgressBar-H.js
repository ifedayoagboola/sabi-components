import React from 'react';
import PropTypes from 'prop-types';

import styledComponents from '../styledComponents';

export default function ProgressBar({ value, max, color, width}) {
    return (
        <styledComponents.ProgressBarContainer color={color} width={width}>
            <progress value={value} max={max}>

            </progress>
            <span>{value}%</span>
        </styledComponents.ProgressBarContainer>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
  };
  
  ProgressBar.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: "50%",
    value:60
  };


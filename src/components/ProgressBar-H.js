import React from 'react';
import PropTypes from 'prop-types';

import styledComponents from './styledComponents';

export default function ProgressBar({ value, max, progressColor,progressBackgroundColor,progressValueColor,progressValueSize, width,height, showText}) {
    return (
        <styledComponents.ProgressBarContainer 
        color={progressColor} 
        progressBackgroundColor={progressBackgroundColor} 
        progressWidth = {width} progressHeight={height}
        progressValueColor={progressValueColor}
        progressValueSize={progressValueSize}
        >
            <progress value={value} max={max}>

            </progress>
            {
             showText === 'true'?             <span className="progressValue">{value}%</span>: ""
            }

        </styledComponents.ProgressBarContainer>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    progressColor: PropTypes.string,
    width: PropTypes.string, 
    height: PropTypes.string, 
    progressBackgroundColor: PropTypes.string, 
    progressValueColor: PropTypes.string, 
    progressValueSize: PropTypes.string, 
    showText: PropTypes.string, 
  }; 
  
  ProgressBar.defaultProps = {
    max: 100,
    progressColor: "lightBlue",
    width: "50",
    value:60,
    height:"8px",
    progressBackgroundColor:"#eee",
    progressValueColor:"#000",
    progressValueSize:"12px",
    showText:"true"
  };


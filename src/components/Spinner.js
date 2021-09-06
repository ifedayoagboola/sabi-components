import React from 'react';
import propTypes from 'prop-types';
import styledComponents from '../styledComponents';


export default function Spinner(
    {
        containerSize,
        height, 
        width, 
        r, 
        cy, 
        cx, 
        fill, 
        strokeWidth, 
        value,
        progress, 
        backgroundColor, 
        color
    }
) { 
    return (
        <div className="circle" style={{width:`${containerSize}`}}>
          <styledComponents.SpinnerViewContainer 
          viewBox="0 0 100 100" 
          width={width} 
          height={height} 
          className="circle-item">
              <styledComponents.Circle 
              cx={cx} 
              cy={cy} 
              r={r} 
              fill={fill} 
              stroke={backgroundColor} 
              strokeWidth={strokeWidth} 
              strokeDasharray={value} 
              strokeDashoffset={value-value}
              />
              <styledComponents.Circle 
              className="progress" 
              cx={cx} 
              cy={cy} 
              r={r} 
              fill={fill} 
              stroke={color} 
              strokeWidth={strokeWidth} 
              strokeDasharray={value} 
              strokeDashoffset={value - ((progress/100)*value)} 
              strokeLinecap="round"
              />
        </styledComponents.SpinnerViewContainer> 
        </div>
    )
}
 Spinner.propTypes = {
    height:propTypes.string, 
    width: propTypes.string,
    r: propTypes.string, 
    cy: propTypes.string, 
    cx: propTypes.string, 
    fill: propTypes.string, 
    strokeWidth: propTypes.string,
    value: propTypes.string ,
    progress: propTypes.string ,
    containerSize: propTypes.string,
    backgroundColor: propTypes.string,
    color: propTypes.string,
 }

 Spinner.defaultProps = {
    height:"100%", 
    width: "100%",
    r: "20", 
    cy: "50", 
    cx: "50", 
    fill: "transparent", 
    strokeWidth: "2",
    value: "200",
    progress: "20", 
    containerSize: "190px",
    backgroundColor:"#E2E9F0",
    color:"blue"
 }
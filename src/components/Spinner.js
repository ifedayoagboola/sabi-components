import React from 'react';
import propTypes from 'prop-types';
import styledComponents from '../styledComponents';


export default function Spinner({height, width, r, cy, cx, fill, stroke, strokeWidth, value,progress}) { 
    return (
        <div className="circle">
          <styledComponents.SpinnerViewContainer width={width} height={height} className="circle-item">
              <styledComponents.Circle cx={cx} cy={cy} r={r} fill={fill} stroke={"#E2E9F0"} strokeWidth={strokeWidth} strokeDasharray={value} strokeDashoffset={value-value}/>
              <styledComponents.Circle className="progress" cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={value} strokeDashoffset={value - progress*1.89} strokeLinecap="round"/>
            </styledComponents.SpinnerViewContainer> 
            {/* <span>{progress}%</span> */}
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
    stroke: propTypes.string, 
    strokeWidth: propTypes.string,
    value: propTypes.string ,
    progress: propTypes.string ,
 }

 Spinner.defaultProps = {
    height:"50", 
    width: "50",
    r: "30", 
    cy: "25", 
    cx: "25", 
    fill: "transparent", 
    stroke: "blue", 
    strokeWidth: "5",
    value: "200",
    progress: "60", 
 }
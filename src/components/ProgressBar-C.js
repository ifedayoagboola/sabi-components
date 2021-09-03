import React from 'react';
import propTypes from 'prop-types';
import styledComponents from '../styledComponents';


export default function ProgressCircularBar({height, width, r, cy, cx, fill, stroke, strokeWidth, value,progress, textPosition,progressValueColor, backGround}) { 
    return (
        <styledComponents.CircularProgressBarWrapper className="circle">
            {textPosition === 'center'?( <styledComponents.SvgViewContainer width={width } height={height} className="circle-item">
            {backGround === 'false'? ("")
            :
            (
            <styledComponents.Circle cx={cx} cy={cy} r={r} fill={fill} stroke={"#E2E9F0"} strokeWidth={+strokeWidth} strokeDasharray={+value + +r%30 } strokeDashoffset={(+value + +r%30) - (+value + +r%30)}/>)
            }  
              <styledComponents.Circle className="progress" cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={+value + +r%30} strokeDashoffset={(+value + +r%30) - progress*1.89} strokeLinecap="round"/>
            <text className="progress-value" fill={progressValueColor} y="50" x="50" textAnchor="middle" alignmentBaseline="middle">{progress}%</text>
            </styledComponents.SvgViewContainer>)
            :
            (
                <>
            <styledComponents.SvgViewContainer width={width} height={height} className="circle-item">
            {backGround === 'false'? ("")
            :
            (
            <styledComponents.Circle cx={cx} cy={cy} r={r} fill={fill} stroke={"#E2E9F0"} strokeWidth={strokeWidth} strokeDasharray={value} strokeDashoffset={value-value}/>)
            }  
              <styledComponents.Circle className="progress" cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={value} strokeDashoffset={value - progress*1.89} strokeLinecap="round"/>
            </styledComponents.SvgViewContainer> 
            <span className="progress-value">{progress}%</span> 
            </>
            )}
         </styledComponents.CircularProgressBarWrapper>
    )
}
 ProgressCircularBar.propTypes = {
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
    textPosition: propTypes.string ,
    progressValueColor: propTypes.string,
    backGround: propTypes.string
 }

 ProgressCircularBar.defaultProps = {
    height:"100", 
    width: "100",
    r: "30", 
    cy: "50", 
    cx: "50", 
    fill: "transparent", 
    stroke: "blue", 
    strokeWidth: "5",
    value: "200",
    progress: "60", 
    textPosition: "center",
    progressValueColor: "blue",
    backGround: "false"
 }
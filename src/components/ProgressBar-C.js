import React from 'react';
import propTypes from 'prop-types';
import styledComponents from '../styledComponents';



export default function ProgressCircularBar({textSize,textMargin, height, width, containerSize, r, cy, cx, fill, color, backgroundColor, strokeWidth, value,progress, textPosition,progressValueColor, backGround}) { 
    return (
        <styledComponents.CircularProgressBarWrapper progressValueSize = {textSize} progressValueMargin={textMargin} progressValueColor={progressValueColor} className="circle" style={{width:`${containerSize}`}}>
            {textPosition === 'center'?( <styledComponents.SvgViewContainer viewBox="0 0 100 100" width={width } height={height} className="circle-item">
            {backGround === 'false'? ("")
            :
            (
            <styledComponents.Circle cx={cx} cy={cy} r={r} fill={fill} stroke={backgroundColor} strokeWidth={+strokeWidth} strokeDasharray={value} strokeDashoffset={value  - value }/>)
            }  
              <styledComponents.Circle className="progress" cx={cx} cy={cy} r={r} fill={fill} stroke={color} strokeWidth={strokeWidth} strokeDasharray={value} strokeDashoffset={(+value + +r%30) - progress*1.89} strokeLinecap="round"/>
            <text className="progress-value" fill={progressValueColor} y="50" x="50" textAnchor="middle" alignmentBaseline="middle">{progress}%</text>
            </styledComponents.SvgViewContainer>)
            :
            (
                <>
            <styledComponents.SvgViewContainer viewBox="0 0 100 100" width={width} height={height} className="circle-item">
            {backGround === 'false'? ("")
            :
            (
            <styledComponents.Circle cx={cx} cy={cy} r={r} fill={fill} stroke={backgroundColor} strokeWidth={strokeWidth} strokeDasharray={value} strokeDashoffset={value-value}/>)
            }  
              <styledComponents.Circle className="progress" cx={cx} cy={cy} r={r} fill={fill} stroke={color} strokeWidth={strokeWidth} strokeDasharray={value} strokeDashoffset={value - progress*1.89} strokeLinecap="round"/>
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
    color: propTypes.string, 
    strokeWidth: propTypes.string,
    value: propTypes.string ,
    progress: propTypes.string ,
    textPosition: propTypes.string ,
    progressValueColor: propTypes.string,
    backGround: propTypes.string,
    containerSize: propTypes.string,
    backgroundColor: propTypes.string,
    textSize: propTypes.string,
    textMargin: propTypes.string,
 }

 ProgressCircularBar.defaultProps = {
    height:"100%", 
    width: "100%",
    r: "30", 
    cy: "50", 
    cx: "50", 
    fill: "transparent", 
    color: "blue", 
    strokeWidth: "5",
    value: "200",
    progress: "60", 
    textPosition: "center",
    progressValueColor: "#000",
    backGround: "false",
    containerSize:"150px",
    backgroundColor:"#E2E9F0",
    textSize:"10px",
    textMargin:"10px"
 }
import styled from "styled-components";

 const ProgressBarContainer = styled.div` 
  progress {
    margin-right: 8px;
  };
  .progressValue{
    color: ${(props)=> props.progressValueColor};
    font-size: ${(props)=>props.progressValueSize};
    margin-top: -8px;
    // background-color:red;
  }
  progress[value] {
    width: ${(props) => props.progressWidth};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: ${(props) => props.progressHeight}; 
    border-radius: 20px;
    background-color: ${(props)=> props.progressBackgroundColor};
  }

  progress[value]::-webkit-progress-value {
    height: ${(props) => props.progressHeight}; 
    border-radius: 20px;
    background-color: ${(props) => props.color};
  }
  display:flex;
  align-items: center;
  // background-color:red;
  width:fit-content;
  height:fit-content;
  
  height: ${(props)=> props.progressHeight};
  `;
  const SvgViewContainer = styled.svg` 
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  
  `;
  const SpinnerViewContainer = styled.svg` 
  // background-color:red;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  
  animation: rotate 2s linear infinite;
  & .progress {
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
 const Circle = styled.circle`  
  cx: ${(props) => props.cx};
  cy: ${(props) => props.cy};
  r: ${(props) => props.r};
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
  stroke-width: ${(props) => props.strokeWidth};
`;
 const CircularProgressBarWrapper = styled.div`  
 .progress-value{
  position: relative;
  z-index: 90;
  font-size:${(props) => props.progressValueSize};
  margin-left :${(props) => props.progressValueMargin};
  color :${(props) => props.progressValueColor};

 }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin:0;
`;

 
export default {  ProgressBarContainer, SvgViewContainer, Circle,SpinnerViewContainer,CircularProgressBarWrapper };
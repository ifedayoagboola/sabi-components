import ProgressCircularBar from "./components/ProgressBar-C";
import ProgressBar from "./components/ProgressBar-H";
import Spinner from "./components/Spinner"
import Color from "./constants/colors"

/* eslint-disable no-underscore-dangle */
function App() {
  return (
    <div className="App">
      <h1>Sabi-Agent Web</h1>

      <ProgressCircularBar 
      progressValueColor={Color.GREEN._600} 
      backGround="true"  
      backgroundColor="#7807"  
      strokeWidth="3" 
      progress="44" 
      textPosition  
      containerSize="70px" 
      color="red" 
      textMargin="-6px" 
      textSize="11px"/>

      <ProgressBar 
      backGround 
      width="50vw" 
      value="50" 
      height="5px" 
      progressBackgroundColor="pink"
      progressColor="blue"
      progressValueColor="blue"
      progressValueSize="15px"
      />

      <Spinner 
      backgroundColor="green" 
      color="pink" 
      containerSize="80px"
      height="fit-content"
      width="fit-content"
      />
    </div>
  );
}

export default App;

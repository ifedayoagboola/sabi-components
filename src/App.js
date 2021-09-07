<<<<<<< HEAD
import Input from "./components/forms/input";
import Password from "./components/forms/password";
import Otp from "./components/forms/otp";

function App() {
	return (
		<div className="App">
			<h1>Sabi-Agent Web</h1>
			<Input rightlabel="0/20" placeholder="Input Password" type="password" />
			<Password />
			<Otp toprightlabel="Enter Pin" />
		</div>
	);
=======
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
      textSize="10px"
      />

      <ProgressBar 
      backGround 
      width="50vw" 
      value="50" 
      height="10px" 
      progressBackgroundColor="pink"
      progressColor="blue"
      progressValueColor="red"
      progressValueSize="10px"
      showText = "true"
      />

      <Spinner 
      backgroundColor="green" 
      color="pink" 
      containerSize="180px"
      height="fit-content"
      width="fit-content"
      />
    </div>
  );
>>>>>>> 6956ffe5b9a805575698316f92a50b57bc5b1f9f
}

export default App;

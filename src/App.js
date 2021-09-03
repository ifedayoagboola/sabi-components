import ProgressBar from "./components/ProgressBar-H";
import ProgressCircularBar from "./components/ProgressBar-C";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="App">
      <h1>Sabi-Agent Web</h1>
      <ProgressBar color="red" value="90" width="80"/>
      <ProgressCircularBar progress="70"   backGround r="40"/>
      <Spinner stroke="red" r="22"/>  
    </div>
  ); 
}

export default App;

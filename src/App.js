import ProgressCircularBar from "./components/ProgressBar-C";
import ProgressBar from "./components/ProgressBar-H";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="App">
      <h1>Sabi-Agent Web</h1>
      <ProgressCircularBar progressValueColor="green" backGround="true"  backgroundColor="#7807"  strokeWidth="3" progress="44" textPosition  containerSize="70px" color="indigo" textMargin="-8px" textSize="11px"/>
      <ProgressBar backGround width="30vw" value="5"/>
      <Spinner backgroundColor="green" color="pink" containerSize="180px"/>
    </div>
  );
}

export default App;

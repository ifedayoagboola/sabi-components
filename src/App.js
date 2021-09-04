import ImageUploader from "./components/ImageUploader";
import ProgressCircularBar from "./components/ProgressBar-C";

function App() {
  return (
    <div className="App p-20">
      <h1 className="text-YELLOW-_600">Sabi-Agent Web</h1>
      <div className="mt-10">
        <ImageUploader />
      </div>
      <div className="mt-10">
        <ProgressCircularBar backGround  />
      </div>
    </div> 
  );
}

export default App;

import Tags from "./components/forms/tags";
import { ReactComponent as SecurityShield } from "./assets/icons/security-shield.svg";

function App() {
  return (
    <div className="App p-20">
      <h1 className="text-YELLOW-_600">Sabi-Agent Web</h1>
      <Tags
        text="This is a tag"
        prefixIcon={<SecurityShield />}
        closable
        color="bg-PRIMARY-_500"
      />
    </div>
  );
}

export default App;

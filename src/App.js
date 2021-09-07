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
}

export default App;

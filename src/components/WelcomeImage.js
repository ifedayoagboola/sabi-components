import welcomeImage from "../assets/images/welcomeImage.svg";

const WelcomeImage = ({ width = "15rem" }) => (
	<div>
		<img src={welcomeImage} alt="image of a smiling woman" className="" style={{ width }} />
	</div>
);

export default WelcomeImage;

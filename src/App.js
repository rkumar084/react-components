import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard.js";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

export default function App() {
  return (
    <div className="container">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Primary hero</p>
        </div>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column is-3">
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
          </div>
          <div className="column is-3">
            <ProfileCard
              title="Cortana"
              handle="@cortana32"
              image={CortanaImage}
            />
          </div>
          <div className="column is-3">
            <ProfileCard title="Siri" handle="@siri43" image={SiriImage} />
          </div>
        </div>
      </section>
    </div>
  );
}

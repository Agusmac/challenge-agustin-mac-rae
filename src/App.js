
import "./styles/index.css"
import "./styles/TrickDiv.css"
import "./styles/Hero.css"
import "./styles/Grid.css"
import "./styles/Card.css"

import Hero from './components/Hero';
import Grid from './components/Grid';
import TrickDiv from "./components/TrickDiv"


function App() {
  return (
    <div className="App">
      <Hero />
      <Grid />
      <TrickDiv/>
    </div>
  );
}

export default App;

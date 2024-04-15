import "./App.css";
import { Application } from "./components/Application";
import { Counter } from "./components/Counter";
import { MuiMode } from "./components/MuiMode";
import { Skills } from "./components/Skills";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Application />
        <Skills skills={["HTML", "CSS", "JAVASCRIPT"]} />
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;

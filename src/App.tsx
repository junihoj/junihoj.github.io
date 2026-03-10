import { NavBar } from "#components";
import Dock from "#components/dock";
import Welcome from "#components/welcome";
import { Terminal } from "#windows";
import { Draggable, gsap } from "gsap/all";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main className="">
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;

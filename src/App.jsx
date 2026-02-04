import gsap from "gsap";
import { Draggable } from "gsap/draggable";

import { Navbar, Welcome, Dock } from "#components"
import { Terminal, Resume, Finder } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
      <Resume />
      <Finder />
    </main>
  )
}

export default App
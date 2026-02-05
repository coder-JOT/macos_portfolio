import gsap from "gsap";
import { Draggable } from "gsap/draggable";

import { Navbar, Welcome, Dock, Home } from "#components"
import { Terminal, Resume, Finder, Text, Image, Contact } from "#windows";

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
      <Text />
      <Image />
      <Contact />
      <Home />
    </main>
  )
}

export default App
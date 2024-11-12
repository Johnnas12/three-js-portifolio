import Hero from "./sections/Hero"
import Navbar from "./sections/navbar"
import About from "./sections/About"
import Projects from "./components/Projects"
import Clients from "./sections/Clients"
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
           <Navbar />
            <Hero />  
            <About />  
            <Projects />
            <Clients />
    </main>
  )
}

export default App
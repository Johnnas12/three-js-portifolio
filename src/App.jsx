import Hero from "./sections/Hero"
import Navbar from "./sections/navbar"
import About from "./sections/About"
import Projects from "./components/Projects"
import Clients from "./sections/Clients"
import Contacts from "./sections/Contacts"
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
           <Navbar />
            <Hero />  
            <About />  
            <Projects />
            <Clients />
            <Contacts />
    </main>
  )
}

export default App
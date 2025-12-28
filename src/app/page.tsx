
import Image from "next/image"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Experience from "../components/Experience"




const Home = () =>{
  return(
    <main className="bg-neutral-950  text-white ">
      
      <Hero />
     <Skills />  
      <Projects />
    <Experience />
    
      <Contact />
      <Footer />
    </main>
  )
}

export default Home;
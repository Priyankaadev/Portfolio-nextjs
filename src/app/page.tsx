
import Image from "next/image"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"




const Home = () =>{
  return(
    <main className="bg-neutral-950  text-white ">
      
      <Hero />
     <div className="relative w-full h-[30rem]">
  <Image
    src="/separation.png"
    alt="separate"
    fill
    className="object-contain"
    priority
  />
</div>
      <Projects />
       <Skills />  
    
      <Contact />
      <Footer />
    </main>
  )
}

export default Home;
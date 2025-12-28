import Image from "next/image"
import { socials } from "../data/social"


const Hero = () => {
  return (
   <section className="min-h-screen flex  justify-center bg-gradient-to-b from-orange-500 to-neutral-950
 flex-col items-center text-center px-6">


    <h1 className="text-3xl md:text-6xl font-bold mt-10">
        Hi, I'm <span className="text-indigo-500">Priyanka Aswal</span>  
    </h1>

<Image alt="photo" src='/profile.png' width={200} height={400} className="rounded-2xl rotate-6 m-5 "/>

    <p className="mt-4 max-w-2xl text-lg text-neutral-300">
        I'm a frontend web developer who enjoys building clean, fast, and user-friendly web applications.
    </p>

{/* SOCIAL ICONS */}
<div className="m-5 flex gap-6">
    {socials.map((social)=>{
        const Icon = social.icon;
        return(
            <a key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-all duration-200"
            >
                <Icon size={28} />
            </a>
        )
    })}
</div>
   
    <div className="mt-2 flex gap-4">
        <a
        href="#projects"
        className="px-6 py-3 rounded-lg bg-blue-800 hover:bg-blue-700 transition"
        >
            View Projects
        </a>
        <a
        href="#contact"
        className="px-6 py-3 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition"
        >
            Contact
        </a>
    </div>
     
   </section>
  )
}

export default Hero

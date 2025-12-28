import Image from "next/image"

const Footer = () => {
  return (
  <footer className="relative flex justify-center items-center bg-green-500 h-[200px] opacity-50">
  <Image
    alt="footer"
    src="/Sparkle.png"
    fill
    className="object-cover"
    priority
  />
  <h2>Made with nextjs</h2>
</footer>

  )
}

export default Footer

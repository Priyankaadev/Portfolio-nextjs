import Image from "next/image"

const Footer = () => {
  return (
  <footer className="relative flex justify-center items-center bg-green-500 h-[200px]">
  <Image
    alt="footer"
    src="/Sparkle.png"
    fill
    className="object-cover"
    priority
  />
</footer>

  )
}

export default Footer

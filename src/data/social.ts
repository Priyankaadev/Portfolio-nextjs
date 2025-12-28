import { IconType } from "react-icons";
import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";

export const socials: { name: string; href: string; icon: IconType }[] = [
  {
    name: "GitHub",
    href: "https://github.com/Priyankaadev",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanka-aswal-822927209/",
    icon: FaLinkedin,
  },
  {
    name: "Resume",
    href: "https://docs.google.com/document/d/10A2nqiHdKF92hKNZGH0A8clcB44LpwKO_KThnXPbR1c/edit?usp=sharing",
    icon: IoReaderOutline,
  },
 
];

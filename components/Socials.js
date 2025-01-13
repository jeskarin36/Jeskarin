import Link from "next/link"

import {RiYoutubeLine,RiInstagramLine,RiFacebookLine,RiBehanceLine,RiPinterestLine,RiDribbbleLine} from "react-icons/ri"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
const Socials = () => {

  return <div className="flex items-center gap-x-5 text-lg">
    <Link href='https://github.com/jeskarin36' target="_blank" className="hover:text-accent transition-all duration-300"><FaGithub /></Link>
    <Link href='https://www.linkedin.com/in/francelis-martinez-martinez-aa68251b7/' target="_blank" className="hover:text-accent transition-all duration-300"><FaLinkedin /></Link>
    <Link href='mailto:jeskarinmartinez36@gmail.com' target="_blank" className="hover:text-accent transition-all duration-300"><MdEmail /></Link>
    <Link href='tel:+584142305703' target="_blank" className="hover:text-accent transition-all duration-300"><FaSquarePhone /></Link>
  </div>;
};

export default Socials;

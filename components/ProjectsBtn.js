import Image from "next/image"
import Link from "next/link"
import {HiArrowRight} from "react-icons/hi2"

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link href="/work" className="relative w-[185px] h-[185px] flex justify-center items-center z-30 bg-circleStar bg-cover bg-center bg-no-repeat group ">
    <Image src={'/rounded-text.png'} width={141} height={148} className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] "></Image>
   
    </Link>
  </div>;
};

export default ProjectsBtn;

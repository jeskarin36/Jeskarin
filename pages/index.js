import Image from "next/image"
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import {motion} from "framer-motion"
import { fadeIn } from "../variants"
const Home = () => {
  return <div className="bg-[#3f0c17] h-full">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 top-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        <motion.h1 variants={fadeIn('down',0.2)} initial='hidden' animate='show' exit='hidden' className="h1">Jeskarin Martinez <br/>
        <span className="text-accent">Ingeniera Informatica</span></motion.h1>
      <motion.p variants={fadeIn('down',0.3)} initial='hidden' animate='show' exit='hidden' className="max-w-sm  xl:max-w-xl mx-auto xl:mx-0 mb-10 ">Amo Programar Y Resolver Problemas</motion.p>
      <div className="flex justify-center xl:hidden relative">
        <ProjectsBtn/>
      </div>
      <motion.div variants={fadeIn('down',0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex xl:mb-28 '>
      <ProjectsBtn></ProjectsBtn>
      </motion.div>
      </div>
    </div>
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
    <ParticlesContainer></ParticlesContainer>
    <motion.div variants={fadeIn('up',0.5)} initial='hidden' animate='show' exit='hidden' transition={{duration:1,ease: 'easeInOut'}} className="mr-[12rem]  absolute -bottom-32 lg:bottom-0 lg:right-[-8%] ">
      <Avatar></Avatar>
    </motion.div>
    </div>
  </div>;
};

export default Home;

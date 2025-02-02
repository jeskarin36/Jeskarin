import React,{useState} from "react"
import Image from "next/image"
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'Habilidades',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
    ],
  },
  {
    title: 'Experiencia',
    info: [
    
      {
        title: 'Cargando...',
        stage: '2024 - 2025',
      },
    ],
  },
  {
    title: 'Educacion',
    info: [
      {
        title: 'Universidad "Argelia Laya", T.S.U en Informatica',
        stage: 'Dic, 2024',
      },
      {
        title: 'Universidad "Argelia Laya", Ingeniera Informatica',
        stage: 'Dic, 2025',
      },
    ],
  },
];

import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"


const About = () => {
  const [index,setIndex]=useState(0)
  console.log(index)
  return <div className="h-full bg-[#3f0c17] py-16 text-cente overflow-y-scroll xl:overflow-y-hidden  xl:text-left ">
       <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-[98%] h-full top-0 absolute mix-blend-color-dodge translate-z-0"></div>
             
    <motion.div variants={fadeIn('right',0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex  absolute bottom-0 -left-[200px] "> 

     </motion.div>
     <div className="container mx-auto h-full flex flex-col items-center xl:flex-row  gap-x-6">
        <div className="flex-1 flex flex-col justify-center ">
            <motion.h2 variants={fadeIn('right',0.2)} initial="hidden" animate="show" exit="hidden"className=" h2  text-center xl:text-start">Sobre Mi</motion.h2>      
            <motion.p variants={fadeIn('right',0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 md-6 xl:mb-12 px-2 xl:px-0 ">
              
            Soy Ingeniera Informatica con gran pasion por el Desarrollo de Software. Tengo 21 años, vivo en San Jose de Barlovento, Venezuela. <br></br><br></br>
            Me especializo en React.js, Next.js, TypeScript y Tailwind para crear aplicaciones web escalables y eficientes.<br></br><br></br>
En mi tiempo libre me gusta tocar la flauta transversa e ir a la playa. ¡Estoy emocionada de explorar más la tecnología y colaborar en proyectos innovadores!
            
        
            </motion.p>
            <motion.div variants={fadeIn('right',0.6)} initial="hidden" animate="show" exit="hidden" className="">
            <div className="flex flex-1 ">
            <div className="relative flex-1">
            <a download href="/CV.pdf" className="text-[1.2rem] cursor-pointer text-center w-[14rem] pt-2 pb-2 flex justify-center m-auto mt-10 xl:m-0 border rounded border-white font-extrabold text-white mb-2">Descargar CV</a>

            </div>
              
              </div>
            </motion.div>
         </div>
        <motion.div variants={fadeIn('left',0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col   pt-8  w-full xl:pt-0 xl:max-w-[48%] h-[480px]  ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {
              aboutData.map((item,itemIndex)=>{
                return(
                  <div key={itemIndex}
                   className={`${index ===itemIndex  && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `} onClick={()=>setIndex(itemIndex)}>
                    {item.title}
                  </div>
                )
              })
            }
          </div>
          <div className=" py-2 pb-32 xl:py-6 flex flex-col relative gap-y2 xl:gap-y-4 items-center xl:items-start ">
            {
              aboutData[index].info.map((item,itemIndex)=>{
                return <div key={itemIndex} className="flex-1 flex flex-wrap mb-4  md:flex-row max-w-max gap-x-2 items-center text-white/60" >
                  <div className=" mb-2 md:mb-0 font-bold"> {item.title} </div>
                 <div className="hidden md:flex">- </div>
                 <div className="flex gap-x-4"> {item.stage} </div>
                
                 {
                
                  item.icons? <>                 <Image src={"/HTML5_logo_and_wordmark.svg.png"} width={80} height={80}></Image>
                  <Image src={"/CSS3_logo_and_wordmark.svg.png"} width={60} height={60}></Image>
                  <Image src={"/JavaScript-logo.png"} width={100} height={170}></Image>
                  <Image src={"/java-logo-1.png"} width={100} height={100}></Image>
                  <Image src={"/React.png"} width={80} height={80}></Image>
                  <Image src={"/next-js-logo-8FCFF51DD2-seeklogo.com.png"} width={80} height={80}></Image>
                  <Image src={"/Tailwind_CSS_Logo.svg.png"} width={80} height={80}></Image>
                  <Image src={"/nodejs-logo.png"} width={80} height={90}></Image>
                  <Image src={"/Sql_data_base_with_logo.png"} width={100} height={100}></Image>
                  <Image src={"/github_PNG23.png"} width={100} height={100}></Image>
                  <Image src={"/Git-Logo.png"} width={100} height={100}></Image>
                  </>:null
                 }
                   </div>
              })
            }
          </div>
        </motion.div>
     </div>
  </div>;
};

export default About;

import Circles from '/components/Circles'
import {BsArrowRight} from "react-icons/bs" 
import {motion} from "framer-motion"
import { fadeIn} from "../../variants"
const Contact = () => {
  return( <div className='h-full bg-[#3f0c17]'>
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-[98%] h-full absolute mix-blend-color-dodge translate-z-0"></div>
             
<div className='container relative mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
  
  <div className='flex flex-col w-full max-w-[700px]'>
    <h2 className='h2 text-center mb-12'>Contactame!!<span className='text-accent'></span></h2>
     <form className='flex-1 flex flex-col gap-6 w-full mx-auto' action="https://formspree.io/f/mvggvdwe" method="POST">
       <div className='flex gap-x-6 w-full'>
          <input type='text' placeholder='Nombre' name='Nombre'  className='input bg-[rgba(0,0,0,0.3)] '></input>
          <input type='email' placeholder='Email' name='Email' className='input bg-[rgba(0,0,0,0.3)]'></input>
       </div>
       <input type='text' placeholder='Asunto' name='Asunto' className='input bg-[rgba(0,0,0,0.3)]'></input>
       <textarea placeholder='Mensaje' name='Mensaje' className='textarea bg-[rgba(0,0,0,0.3)]'></textarea>
       <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ' type='submit'>
        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 '>Enviar</span>
        <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] '></BsArrowRight>
       </button>
     </form>
  </div>
</div>
    </div>);
};

export default Contact;

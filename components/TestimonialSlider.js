// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Nombre',
    position: 'Position',
    message:
     'En proceso...'    
  },
];


import {Swiper,SwiperSlide} from "swiper/react"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {Navigation, Pagination } from 'swiper'
import {FaQuoteLeft} from "react-icons/fa"
import Image from "next/image"

const TestimonialSlider=()=>{
     return(
      <Swiper navigation={true} pagination={
        {
          clickable:true,
        }
      
      } modules={{Navigation,Pagination}}
      className="h-[400px]"
      >

         {
          testimonialData.map((person,index)=>{
            return(
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center md:flex-row gap-x-8 h-full">
                  <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                    <div className="flex flex-col justify-center text-center">
                        
                        <div className="mb-2 mx-auto ">
                          <Image src={person.image} width={100} height={100}></Image>
                        </div>
                        <div className="text-lg">{person.name} </div>
                        <div className="text-[12px] uppercase font-extralight tracking-widest ">{person.position} </div>
                    </div>
                  </div>
                  <div className="flex-1 flexflex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-4 p-10  ">
                    <div className="mb-4 ">
                      <FaQuoteLeft className="text-4xl xl:text-6x1 text-white/20 mx-auto md:mx-0"/>
                    <div className="xl:text-lg text-center md:text-left">
                      {person.message}
                    </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
         }

      </Swiper>
     )
}



export default TestimonialSlider
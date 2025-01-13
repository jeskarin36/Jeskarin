import Image from "next/image"
import Link from 'next/link'
import ParticlesContainer from "../../components/ParticlesContainer"

const Work = () => {
       return <div className="w-full h-full overflow-y-scroll bg-[#3f0c17]  overflow-x-hidden ">
                  <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-[98%] h-full absolute mix-blend-color-dodge translate-z-0"></div>
              <h2 className="h2 text-center mt-16 xl:mt-16 ">Mis Proyectos <span className="text-accent">Jeskarin</span></h2>
              
              <div className="w-[90%] min-h-min[70%] pb-16 relative  flex flex-wrap justify-center ml-10">
                     <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                            <Link href="https://jeskarin36.github.io/EditorImage/" target="_blank">
                                   <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                          <Image src="/Capturadepantalla 2024-12-12113626.png" fill
                                                 style={{ objectFit: "fill" }} ></Image>
                                   </div>
                                   <h5 className=" text-[1.2rem] mt-3 ">Editor de Fotos</h5>
                                   <p className="text-[.9rem] mt-3"> Con este Editor de Foto puedes cambiar y adaptar la foto que quieras a tu gusto y medida...</p>
                                   <div className="flex gap-2 flex-wrap  mt-3">
                                          <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-orange-600">HTML</div>
                                          <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-600">CSS</div>
                                          <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-yellow-500">JS</div>


                                   </div>
                            </Link>
                     </div>
                     <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                            <Link href="https://jeskarin36.github.io/react-restaurant/" target="_blank">
                                   <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                          <Image src="/Captur25.png" fill
                                                 style={{ objectFit: "fill" }} ></Image>
                                   </div>
                                   <h5 className=" text-[1.2rem] mt-3">Gerincht</h5>
                                   <p className="text-[.9rem] mt-3">Gerincht Es una pagina web para un restaurante, el cual expone sus productos, precios y su historia..</p>

                                   <div className="flex gap-2 flex-wrap mt-3 ">
                                          <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-700">React</div>
                                   </div>
                            </Link>
                     </div>
                     <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10  p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                            <Link href="https://jeskarin36.github.io/react-skyloop/" target="_blank">
                                   <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                          <Image src="/Captur0.png" fill
                                                 style={{ objectFit: "fill" }} ></Image>

                                   </div>
                                   <h5 className="m-2 text-[1.2rem] mt-3">SKYLOOP</h5>
                                   <p className="text-[.9rem] mt-3">SKYLOOP es una Tienda Online, el cual expone sus productos para niños, adolescentes y adultos...</p>

                                   <div className="flex gap-2 flex-wrap mt-3">
                                          <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-700">React</div>
                                   </div>
                            </Link>
                     </div>
  

                            <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                                   <Link href="https://jeskarin36.github.io/vite-search-image/" target="_blank">
                                          <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                                 <Image src="/Captura21219.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] mt-3 ">Buscador de Imagenes</h5>
                                          <p className="text-[.9rem] mt-3">Buscador de Imagenes, Desarrolle esta pagina que consume la API de unsplash.com</p>

                                          <div className="flex gap-2 flex-wrap mt-3">
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div>

                            <div className="w-[19rem] h-[25rem] cursor-pointer m-auto  mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                                   <Link href="https://jeskarin36.github.io/facebook/" target="_blank">
                                          <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                                 <Image src="/Captura5340.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="m-2 text-[1.2rem] mt-3">IU Facebook</h5>
                                          <p className="text-[.9rem] mt-3">IU Facebook, Esta pagina web es un Clon de la aplicacion de Facebook, (solo la Interfaz grafica)</p>

                                          <div className="flex gap-2 flex-wrap mt-3">
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] bg-orange-600">HTML</div>
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] bg-blue-600">CSS</div>
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-yellow-500">JS</div>

                                          </div>
                                   </Link>
                            </div>
                            <div className="w-[19rem] h-[25rem] cursor-pointer m-auto  mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                                   <Link href="https://jeskarin36.github.io/react-salon/" target="_blank">
                                          <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                                 <Image src="/Captura120725.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="text-[1.2rem] mt-3">Peluqueria</h5>
                                          <p className="text-[.9rem] mt-3"> En esta pagina, se expone el trabajo de una Peluqueria, pudiendo agendar una cita o revisar sus horarios... </p>

                                          <div className="flex gap-2 flex-wrap  mt-3">
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div>
                            <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                                   <Link href="https://jeskarin36.github.io/react-psicologa/" target="_blank">
                                          <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                                 <Image src="/Captura20958.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="text-[1.2rem] mt-3">Psicologa</h5>
                                          <p className="text-[.9rem] mt-3">Esta es una pagina personal de una Psicologa, en el cual se expone sus precios y sobre ella misma...</p>

                                          <div className="flex gap-2 flex-wrap  mt-3">
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div>
                            <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                                   <Link href="https://jeskarin36.github.io/react-otroquest/" target="_blank">
                                          <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                                 <Image src="/Capturadepantalla2024-12-12 121407.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>

                                          </div>
                                          <h5 className="text-[1.2rem] ">OTROQUEST</h5>
                                          <p className="text-[.9rem] mt-3">OTROQUEST es una pagina sobre reseña de juegos, el cual cuenta con su productos y canal de twicht</p>

                                          <div className="flex gap-2 flex-wrap  mt-3">
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-700">React</div>

                                          </div>
                                   </Link>
                            </div>
                            <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                                   <Link href="https://jeskarin36.github.io/aeropuerto-front-end/" target="_blank">
                                          <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                                 <Image src="/Capturadepantalla2024-12-12112310.jpg" fill
                                                        style={{ objectFit: "fill" }} ></Image>
                                          </div>
                                          <h5 className="mt-3 text-[1.2rem] ">Aeropuerto</h5>
                                          <p className="text-[.9rem] mt-3"> En esta pagina encontraras todo acerca de vuelos y destinos soñados... </p>

                                          <div className="flex gap-2 flex-wrap  mt-3">
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-orange-600">HTML</div>
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-600">CSS</div>
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-yellow-500">JS</div>

                                          </div>
                                   </Link>
                            </div>
                            <div className="w-[19rem] h-[25rem] cursor-pointer m-auto mt-10 p-5 rounded-lg shadow-[23px_26px_23px_-3px_rgba(0,_0,_0,_0.6)] bg-gradient-to-r from-rose-900 via-rose-600 to-red-700">
                                   <Link href="https://jeskarin36.github.io/portafolio/" target="_blank">
                                          <div className="w-[100%] h-[45%] relative bg-indigo-900 ">
                                                 <Image src="/Captu15656.png" fill
                                                        style={{ objectFit: "fill" }} ></Image>
                                          </div>
                                          <h5 className="mt-3 text-[1.2rem] ">Portafolio</h5>
                                          <p className="text-[.9rem] mt-3">En este portafolio personal se encuentrar toda la informacion sobre una desarrolladora web...</p>

                                          <div className="flex gap-2 flex-wrap  mt-3">
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-orange-600">HTML</div>
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-blue-600">CSS</div>
                                                 <div className="w-15 pl-3 pr-3 h-6 text-[.8rem] text-center bg-yellow-500">JS</div>

                                          </div>
                                   </Link>
                            </div>



              </div>
       </div>;
};

export default Work;


/**
 * 
 * 
 *    <SwiperSlide>   </SwiperSlide>
                            <SwiperSlide> </SwiperSlide>
                            <SwiperSlide>  </SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide> </SwiperSlide>
                            <SwiperSlide> </SwiperSlide>
                            <SwiperSlide>  </SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide>  </SwiperSlide>
                            <SwiperSlide></SwiperSlide>

 */
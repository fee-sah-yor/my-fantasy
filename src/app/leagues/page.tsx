"use client"
import React from 'react';
import Link from 'next/link';
import { motion, } from 'framer-motion';

const transition = {
    duration: 1.4,
    ease: [0.43, 0.13, 0.23, 0.96]
}
  
  const variant = {
      hidden: {
        opacity: 0,
        x: -85
    },
    visible: {
        opacity: 1,
        x: 0
    }
}

let initial = variant.hidden;
let animate = variant.visible

export default function Leagues() {

    //---------------------- fade out on scroll-----------------
    return (
        <>
            <section
                className='w-fit md:w-full'>
                {/* <motion.div style={{width}} className='bg-blue-500 w-full'> hello</motion.div> */}
                {/* 'bg-red-300 text-grey px-5 h-[70vh] w-1/2 rounded-2xl border-red-700 border-2 */}
                <div className='bg-black text-white w-full h-[100vh] md:h-[70vh] p-3 text-left'>
                    <motion.div 
                      variants = {variant}
                      initial={initial}
                      whileInView={animate}
                        transition={transition}
                        className='p-6 my-20'>
                        <h3 className='text-3xl pb-3'> Classic League Players</h3>
                        <ul className='space-y-2'>
                            <li>These league competitions will last for 38 weeks.</li>
                            <div className='grid grid-cols-2 md:flex md:flex-row items-center justify-start gap-5'>
                                <li> <span className='bg-white py-1.5 px-3 rounded-[50%] text-black'>1</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦150,000</span>
                                </li>
                                <li>
                                    <span className='bg-white py-1.5 px-3 rounded-[50%] text-black'>2</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦100,000</span>
                                </li>
                                <li>
                                    <span className='bg-white py-1.5 px-3 rounded-[50%] text-black'>3</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦50,000</span>
                                </li>
                                <li>
                                    <span className='bg-white py-1.5 px-3 rounded-[50%] text-black'>4</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦25,000</span>
                                </li>
                            </div>
                            <li>5th and 6th place will receive a jersey of their choice.</li>
                            <li>Managers of the week <span className='border-green-400 border mx-2 py-1 px-3 rounded-full'>₦1,500</span></li>
                            <li>Managers of the month <span className='border-green-400 border mx-2 py-1 px-3 rounded-full'>₦5,000</span></li>
                        </ul>
                    </motion.div>
                </div>

                <div className='bg-white text-black w-full h-[100vh] md:h-[70vh] p-3 text-left'>
                    <motion.div
                      variants = {variant}
                      initial={initial}
                      whileInView={animate}
                    transition={transition}
                        className='p-6 my-20'>
                        <h3 className='text-3xl pb-3'>Super League and Cup</h3>
                        <ul className='space-y-2'>
                            <li>Winner of the Super League <span className='border-green-400 border mx-2 py-1 px-3 rounded-full'> ₦25,000.</span> </li>
                            <li>Winner of the Super Cup <span className='border-green-400 border mx-2 py-1 px-3 rounded-full'>₦10,000</span></li>
                            <li>Also at the end of the season, the top 4 players from the classic league
                                <br /> will be promoted to the “Super League” and the last 4 from the current
                                “Super League” will be eliminated.</li>
                            <li>5 top players from the All Black Family League will also be promoted
                                to the super league.</li>

                        </ul>
                    </motion.div>
                </div>

                <div className='bg-black text-white w-full h-[100vh] md:h-[70vh] p-3 text-left'>
                    <motion.div 
                        variants = {variant}
                        initial={initial}
                        whileInView={animate}
                      transition={transition}
                        className='p-6 my-20'>
                        <h3 className='text-3xl pb-3'>All Black Cup</h3>
                        <ul className='space-y-2'>
                            <li>This cup competition is automatically created by FPL themselves within the Classic
                                league.</li>
                            <li>It’s a knockout competition amongst all the players. </li>
                            <li>Winner of the Cup <span className='border-green-400 border mx-2 py-1 px-3 rounded-full'>₦20,000.</span></li>

                        </ul>
                    </motion.div>
                </div>

                <div className='bg-white text-black w-full h-[100vh] md:h-[70vh] p-3 text-left'>
                    <motion.div 
                        variants = {variant}
                        initial={initial}
                        whileInView={animate}
                      transition={transition}
                        className='p-6 my-20'>
                        <h3 className='text-3xl pb-3'>All Black Head to Head</h3>
                        <ul className='space-y-2'>
                            <li>This competition is where managers go head to head with each other each week.</li>
                            <li>Winner will receive  <span className='border-green-400 border-2 mx-2 py-1 px-3 rounded-full'>₦20,000.</span></li>

                        </ul>
                    </motion.div>
                </div>

                <div className='bg-black text-white w-full h-[100vh] md:h-[70vh] p-3 text-left'>
                    <motion.div 
                        variants = {variant}
                        initial={initial}
                        whileInView={animate}
                      transition={transition}
                        className='p-6 my-20'>
                        <h3 className='text-3xl pb-3'>All Black Elimination Chamber</h3>
                        <ul className='space-y-2'>
                            <li> This is a competition created by the All Black League on its own.</li>
                            <li> It’s another private league in which the managers with the lowest scores
                                each week will be eliminated until it is remaining 3 players at the top.</li>
                            <div className='flex items-center justify-start gap-5'>
                                <li> <span className='bg-white py-1.5 px-3 rounded-[50%] text-black'>1</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦7,500</span>
                                </li>
                                <li>
                                    <span className='bg-white py-1.5 px-3 rounded-[50%] text-black'>2</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦5,000 </span>
                                </li>
                                <li>
                                    <span className='bg-white py-1.5 px-3 rounded-[50%] text-black'>3</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦2,500 </span>
                                </li>
                            </div>
                            <li> There will be three different series.</li>
                            <li>More information will be given in the WhatsApp group upon commencement of the season.
                            </li>
                            <li> Note: you must be registered in the Classic league to participate in this competition.
                            </li>
                        </ul>
                    </motion.div>
                </div>


                <div className='bg-white text-black w-full h-[100vh] md:h-[70vh] p-3 text-left'>
                    <motion.div 
                        variants = {variant}
                        initial={initial}
                        viewport={{once:false, amount:0.1}}
                        whileInView={animate}
                        transition={transition}
                        className='p-6 my-20'>
                        <h3 className='text-3xl pb-3'>Papi's predicator</h3>
                        <ul className='space-y-2'>
                            <li>This is a competition created by the All Black League.</li>
                            <li>It’s a private league where each manager chooses the correct scores & first goal scorer for weekly Premier League matches.</li>
                            <li>Manager of the week <span className='border-green-400 border mx-2 py-1 px-3 rounded-full'>₦2,000.</span></li>
                            <div className='grid grid-cols-3 md:flex md:flex-row items-center justify-start gap-5'>
                                <li> <span className='bg-black py-1.5 px-3 rounded-[50%] text-white'>1</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦15,000</span>
                                </li>
                                <li className='flex'>
                                    <span className='bg-black py-1.5 px-3 rounded-[50%] text-white'>2</span> <br/>
                                    <span className='border-green-700 border mx-2 py-1.5 px-3 rounded-full '> ₦10,000 </span>
                                </li>
                                <li>
                                    <span className='bg-black py-1.5 px-3 rounded-[50%] text-white'>3</span>
                                    <span className='border-green-400 border mx-2 py-1.5 px-3 rounded-full'>₦5,000 </span>
                                </li>
                            </div>
                            <li className='text-green-400 text-xl'>***Note: you must be registered in the Classic League to participate in this competition.***</li>
                        </ul>
                    </motion.div>
                </div>
            </section >

            <Link href={'/registeration'} className='flex justify-center items-center mb-4'>
                <button className=' bg-green-800 text-center text-white rounded-full px-6 py-2 hover:bg-black hover:text-white'>
                    Register
                </button>
            </Link>
        </ >
    )
}

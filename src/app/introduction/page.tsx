"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import {AnimatePresence, motion} from 'framer-motion';
import allBlackSportsEmblem from "/images/allBlackSportsEmblem.png";
import oldTrafford from "/images/old trafford stadium.jpg";


const transition = {
duration :1, 
ease: [0.43,0.13,0.23,0.96]
}
const btnTransit={
  duration :0.6, 
ease: [0.43,0.13,0.23,0.96]
}

export default function Introduction() {


  return (
    <>
    <main className='position-relative  backdrop-blur-md text-white'>
    <div>
      <div className='z-[-1]'>
    <Image
    src={oldTrafford}
    alt='old trafford stadium'
    fill={true}
    style={{objectFit:'cover'}}
    ></Image>
      </div>
    </div>
    <nav className="backdrop-blur-md">
    <div className='flex flex-row justify-start items-center pl-0'>
    <Image src={ allBlackSportsEmblem } alt='logo' width={55}></Image>
    <h1 className='text-white m-0 p-0'> All Black Sports </h1>
    </div>
    </nav>
 
      <section 
        className='flex flex-col items-center justify-between gap-5 backdrop-blur-sm '>
            <motion.div 
              initial={{ y:"-80vh", opacity: 0}}
              animate={{ opacity: 1, y: 0}}
              transition={{delay:0.2,...transition}}
              className='mt-40 '>
              <AnimatePresence>
              <motion.h1 
              exit={{opacity:0}}
              transition={{delay:0.5,...transition}}
              className='text-3xl md:text-7xl font-semibold text-center'>Welcome to All Black FPL
              </motion.h1>
              </AnimatePresence>
            </motion.div>

           <div className='mt-15 flex flex-col items-center justify-center gap-10'>
           <motion.p 
           initial={{opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay:1.2, ...transition}}
           className='text-md text-center'>(2023/24 Season) <br/>
           You are now playing for bragging rights!!! <br/>
           <span className='text-green-400 text-xl'>₦700,000 IS UP FOR GRABS!!!</span><br/>
           Do you have what it takes to be an All Black Champion? <br />
           If you’re new to Fantasy Premier League, watch the video below.</motion.p>
          
           <motion.button 
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:1.2,...btnTransit}}
           className='p-1 bg-green-800 text-center text-black rounded-full px-6 py-2 hover:bg-black hover:text-white'>
           <a href="https://www.youtube.com/watch?v=mAvr7qz7O1o" target="_blank">
           Watch Video
           </a>
           </motion.button>

           </div>

           <div className='flex gap-5'>
           <Link href={'/registeration'}>
           <motion.button
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:1.2,...btnTransit}}
            className='p-1 bg-green-800 text-center text-black rounded-full px-6 py-2 hover:bg-black hover:text-white'>
            Register
            </motion.button>
           </Link>
           
           <Link href={'/leagues'}>
           <motion.button 
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:1.2,...btnTransit}}
           className='p-1 bg-green-800 text-center text-black rounded-full px-6 py-2 hover:bg-black hover:text-white'>
           Learn more
           </motion.button>
           </Link>
           </div>

           <Footer/>
      </section>
      </main>
      </>
      )
    }
  



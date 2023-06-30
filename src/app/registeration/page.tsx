"use client"
import React from 'react';
import Image from 'next/image';
import follow from "/images/follow.png"
import payment from "/images/payment.png"
import confirm from "/images/confirm.png"
import Link from 'next/link';

export default function Registration() {
    return (
        <>
            <section className='bg-black lg:h-[100vh] ' >
                <div className='h-full flex flex-col items-center justify-center space-y-2 text-center pt-4 lg:pt-3 lg:flex-row lg:space-x-2'>
                    <div className='bg-white text-black w-[40%] h-[50vh] p-3 rounded-lg sm:w-[60%] lg:w-[20%]' >
                        <div className='flex flex-col items-center space-y-4 text-center' >

                            <div className='w-[30%] lg:w-[70%]'>
                                <Image src={follow} alt='' height={100}></Image>
                            </div>
                            <div >
                                <p> Follow us on Twitter <a className='text-green-400 text-xl'
                                    href=" https://twitter.com/allblacksports?s=20" target="_blank">@allblacksports</a> & our sponsor
                                    <a href="https://twitter.com/heartemporiumng?s=20&t=_bKKZq1V-Gp2r_TajI4wtQ" target="_blank"> @heartemporiumng</a>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='bg-white text-black w-[40%] h-[50vh] p-3 rounded-lg sm:w-[60%] lg:w-[20%]' >
                        <div className='flex flex-col items-center justify-center space-y-4 text-center' >
                            <div className='w-[30%] lg:w-[70%]' >
                                <Image src={payment} alt='' width={100} height={100}></Image>
                            </div>
                            <div >
                                <p >
                                    Pay ₦1,500 to the bank account below
                                    Anozie Okechi Emmanuel

                                    First Bank
                                    3118082454
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white text-black w-[40%] h-[50vh] p-3 rounded-lg sm:w-[60%] lg:w-[20%]' >
                        <div className='flex flex-col items-center space-y-4 text-center' >
                            <div className='w-[30%] lg:w-[70%]'>
                                <Image src={confirm} alt='' height={100}></Image>
                            </div>
                            <div>
                                <p>Click this link to confirm payment.
                                </p>
                                <button className=' bg-green-800 text-center text-white rounded-full px-6 py-2 hover:bg-black hover:text-white'>
                                    <a href=" http://Wa.me/19092646514?text=Hello%20Anozie,%20I%20just%20made%20payment,%20can%20you%20please%20confirm?" target="_blank">
                                        Confirm</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-black flex flex-col justify-center items-center'>
                    <Link href={'/introduction'} >
                        <button className=' bg-green-800 text-center text-white rounded-full px-6 py-2 hover:bg-black hover:text-white'>
                            Home
                        </button>
                    </Link>
                </div>

            </section>

        </>
    )
}
